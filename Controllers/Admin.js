const Events = require("../models/events");
const eventRegister = require("../models/eventRegistrations");

const multer = require("multer");

const { baseUpdate, baseList } = require("./Repositories/baseRepository");

module.exports = {
  AddEvent,
  getAllEvents,
  deleteEvent,
  updateEvent,
  getAllRegistrationsForEvent,
};

async function AddEvent(req, res, next) {
  try {
    var storage = multer.diskStorage({
      destination: function (req, file, cb) {
        // Uploads is the Upload_folder_name
        cb(null, "ImgUploads");
      },
      filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + ".jpg");
      },
    });

    const maxSize = 5 * 2000 * 2000;

    var upload = multer({
      storage: storage,
      limits: { fileSize: maxSize },
      fileFilter: function (req, file, cb) {
        // Set the filetypes, it is optional
        var filetypes = /jpeg|jpg|png/;
        var mimetype = filetypes.test(file.mimetype);

        var extname = filetypes.test(
          path.extname(file.originalname).toLowerCase()
        );

        if (mimetype && extname) {
          return cb(null, true);
        }

        cb(
          "Error: File upload only supports the " +
            "following filetypes - " +
            filetypes
        );
      },

      // mypic is the name of file attribute
    }).single("image");

    upload(req, res, async function (err) {
      if (err) {
        // ERROR occurred (here it can be occurred due
        // to uploading image of size greater than
        // 1MB or uploading different file type)
        return res.send(err);
      } else {
        // productsData.update({ imageId: req.file.filename }, { where: { id: 2 } });
        const data = await Events.create({
          imageUrl: req.file.filename,
          name: req.body.Name,
          description: req.body.description,
        });

        console.log("data uploaded :", data);
        return res.status(200).json("Services Added successfully");
        // SUCCESS, image successfully uploaded
        // res.send("Success, Image uploaded!");
      }
    });
  } catch (error) {
    console.log("error : ", error);
    return res.status(400).josn({ error: error });
  }
}

async function getAllEvents(req, res, next) {
  try {
    const data = await Events.find();
    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(400).josn({ error: error });
  }
}

async function deleteEvent(req, res, next) {
  const params = req.params.id;
  if (!params) {
    return res
      .status(400)
      .json({ success: false, message: "id is required in params" });
  }

  try {
    await Events.deleteOne({ _id: params });
    return res
      .status(200)
      .json({ success: true, message: "Event deleted successfully" });
  } catch (error) {
    return res.status(400).josn({ error: error });
  }
}

async function updateEvent(req, res, next) {
  const params = req.params.id;
  if (!params) {
    return res
      .status(400)
      .json({ success: false, message: "id is required in params" });
  }

  const Body = req.body;
  const body = {
    name: Body.name,
    description: Body.description,
    startDate: Body.startDate,
    endDate: Body.endDate,
  };
  try {
    const data = await baseUpdate(Events, { _id: params }, body);
    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(400).josn({ error: error });
  }
}

async function getAllRegistrationsForEvent(req, res, next) {
  const params = req.params.eventId;

  if (!params)
    return res
      .status(400)
      .json({ success: false, message: "eventId in params is required" });

  try {
    const data = await baseList(eventRegister, { eventId: params });
    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(400).josn({ error: error });
  }
}
