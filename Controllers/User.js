const User = require("../models/users");
const otp = require("../models/otp");
const eventRegister = require("../models/eventRegistrations");

const { baseCreate, baseDetail } = require("./Repositories/baseRepository");

module.exports = {
  sendMAil,
  RegisterToSite,
  RegisterToEvent,
  getHistoryFromEmail,
  createCertificate,
};

async function sendMAil(req, res, next) {
  try {
    const val = Math.floor(1000 + Math.random() * 9000);
    console.log("val->", val);
    const user = await otp.findOne({ emailid: req.body.Email });
    console.log("user->", user);
    if (user) {
      await otp.updateOne({ emailid: req.body.Email }, { otp: val });
      console.log("here");
    } else {
      await otp.create({
        emailid: req.body.Email,
        otp: val,
      });
      console.log("there");

      // }

      const tranporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        auth: {
          user: "campuskart05@gmail.com",
          pass: "tbiqxiuxllqrzviu",
        },
      });

      const mailOptions = {
        from: "campuskart05@gmail.com",
        to: req.body.Email,
        subject: "otp for user verification",
        text: `please enter this otp ${val} with your given email id.`,
      };

      tranporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          res.send("error");
        } else {
          console.log("send");
          res.send("success");
        }
      });

      // console.log("data entered : ", data);
    }
    return res.status(200).json({ message: "mail sent succesfully" });
  } catch (error) {
    console.log("error : ", error);
    return res.status(400).json({ message: error });
  }
}

async function RegisterToSite(req, res, next) {
  const body = req.body;

  if (
    !body.name ||
    !body.email ||
    !body.college ||
    !body.year ||
    !body.contactNo
  ) {
    return res.status(400).json({ message: "Some fields are missing" });
  }

  try {
    const user = await User.findOne({ email: body.Email });
    if (user) {
      console.log(" Already registered ");
      return res.status(300).json({ message: "already registered" });
    }

    const votp = await otp.findOne({ emailid: body.email });

    console.log("votp->", votp.otp);
    console.log("here");
    const botp = body.otp;
    console.log("there");

    console.log({ botp });
    if (votp.otp == botp) {
      console.log("if check done");
      const data = await User.create({
        email: body.email,
        name: body.name,
        contactNo: body.contactNo,
        college: body.college,
        year: body.year,
      });
      console.log("data entered :", data);
      return res
        .status(200)
        .json({ success: true, message: "Registeration done" });
    } else {
      console.log("invalid otp");
      return res.status(400).json({ message: "Invalid Otp" });
    }
  } catch (error) {
    console.log("error : ", error);
    return next(error);
  }
}

async function RegisterToEvent(req, res, next) {
  const body = req.body;
  if (
    !body.eventId ||
    !body.userEmail ||
    !body.userCollege ||
    !body.userId ||
    !body.eventName ||
    !body.userContactNo ||
    !body.userName
  ) {
    return res.status(400).json({ message: "Some fields are missing" });
  }

  const Body = {
    eventId: body.eventId,
    userId: body.userId,
    eventName: body.eventName,
    userName: body.userName,
    userEmail: body.userEmail,
    UserContactNo: body.userContactNo,
    userCollege: body.userCollege,
  };

  try {
    await baseCreate(eventRegister, Body);
    return res
      .status(200)
      .json({ success: true, message: "Registration To This Event Is Done" });
  } catch (error) {
    return res.status(400).josn({ error: error });
  }
}

async function getHistoryFromEmail(req, res, next) {
  const params = req.params.email;
  try {
    const user = await baseDetail(eventRegister, { userEmail: params });

    if (!user) {
      return res.status(400).json({ message: "No data found" });
    }
    const data = await eventRegister
      .find({ userEmail: params })
      .sort({ date: -1 });
    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(400).josn({ error: error });
  }
}

async function createCertificate(req, res, next) {
  // const services = req.body.services
  console.log("tart");
  function createPdf() {
    let doc = new PDFDocument({ margin: 50 });

    generateHeader(doc);
    generateCustomerInformation(doc);
    generateTableRow(doc);
    generateFooter(doc);

    doc.end();
    doc.pipe(fs.createWriteStream("Certificate.pdf"));
  }

  function generateHeader(doc) {
    doc
      .image("maitLogo.jpg", 50, 35, { width: 75 })
      .fillColor("black")
      .fontSize(20)
      .fontSize(20)
      .text("Certificate of Participation", 30, 140)

      .fontSize(10)

      .fillColor("#444444");
  }

  function generateFooter(doc) {
    doc20
      .fontSize(10)
      .text("Congratulations", 40, 700, { align: "center", width: 500 });
  }

  function generateCustomerInformation(doc) {
    console.log("entered");

    doc
      .text(`Email :  ${req.body.Email}`, 50, 230)

      .moveDown();
    console.log("at last");
  }

  function generateTableRow(doc) {
    console.log("entered 2");
    doc.fontSize(10).text("Services:", 50, 290);

    console.log("at last 2");
  }

  createPdf();
  const filePath = "./Certificate.pdf";
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) console.log("file not exist");
    else console.log("exist");
  });
  res.download(filePath);
}
