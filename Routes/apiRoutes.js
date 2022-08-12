const router = require("express").Router();
const user = require("../Controllers/User");
const admin = require("../Controllers/Admin");

//USER APIS

router.post("/createCertificate", user.createCertificate);
router.post("/sendOtp", user.sendMAil);
router.post("/registerToSite", user.RegisterToSite);
router.post("/registerToEvent", user.RegisterToEvent);
router.get("/getHistoryFromMail/:email", user.getHistoryFromEmail);

//ADMIN APIS

router.post("/addEvent", admin.AddEvent);
router.get("/getAllEvents", admin.getAllEvents);
router.delete("/deleteEvent/:id", admin.deleteEvent);
router.put("/updateEvent/:id", admin.updateEvent);
router.get("/getAllRegistrations/:eventId", admin.getAllRegistrationsForEvent);

module.exports = router;
