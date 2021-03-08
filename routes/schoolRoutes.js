const express = require("express");
const router = express.Router();
const multer = require("multer");
const AWS = require("aws-sdk");
const uuid = require("uuid");

const School = require("../models/schoolModel");

const storage = multer.memoryStorage({
  destination: (req, file, callback) => {
    callback(null, "");
  },
});
const upload = multer({ storage }).single("file");

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_SECRET,
});

// @route POST /school
// @desc  Post school data from the submitted form to the database
router.post("/instance", upload, async (req, res) => {
  try {
    let image = "";

    // Image upload
    if (req.file === null) {
      return res.status(400).json({ msg: "No file uploaded" });
    } else {
      let myFile = req.file.originalname.split(".");
      const fileType = myFile[myFile.length - 1];

      const fileKey = `${uuid.v4()}.${fileType}`;

      // The image key matches the ID of the corresponding school instance in MongoDB
      const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: fileKey,
        Body: req.file.buffer,
      };

      s3.upload(params, (error, data) => {
        if (error) {
          res.status(500).send(error);
        }
      });

      image = `https://project-edustar-bucket.s3.ca-central-1.amazonaws.com/${fileKey}`;
    }

    const { name, about, location, admissions } = req.body;
    const newSchool = new School({
      name,
      about,
      location,
      admissions,
      image,
    });
    // Save the school to the database
    const savedSchool = await newSchool.save();

    res.status(200).json(savedSchool);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// @route PUT /instance
// @desc  Update the school data for a certain instance in the database
router.put("/instance/:id", upload, async (req, res) => {
  try {
    let image = "";

    // Image upload
    if (req.file === null) {
      return res.status(400).json({ msg: "No file uploaded" });
    } else {
      let myFile = req.file.originalname.split(".");
      const fileType = myFile[myFile.length - 1];

      const fileKey = `${uuid.v4()}.${fileType}`;

      // The image key matches the ID of the corresponding school instance in MongoDB
      const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: fileKey,
        Body: req.file.buffer,
      };

      s3.upload(params, (error, data) => {
        if (error) {
          res.status(500).send(error);
        }
      });

      image = `https://project-edustar-bucket.s3.ca-central-1.amazonaws.com/${fileKey}`;
    }

    const { name, about, location, admissions } = req.body;
    const updatedData = { name, about, location, admissions, image };
    await School.findByIdAndUpdate({ _id: req.params.id }, updatedData);

    res.status(200).json(updatedData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// @route GET /all
// @desc  Get all school data in the database
router.get("/all", async (req, res) => {
  const schools = await School.find();
  res.status(200).json(schools);
});

// @route GET /instance
// @desc  Get school data from a specific instance (based on ID) in the database
router.get("/instance/:id", async (req, res) => {
  const school = await School.findById(req.params.id);
  res.status(200).json(school);
});

router.delete("/instance/:id", async (req, res) => {
  const deletedSchool = await School.findByIdAndDelete(req.params.id);
  res.status(200).json(deletedSchool);
});

module.exports = router;
