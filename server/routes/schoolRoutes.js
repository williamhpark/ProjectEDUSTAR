const express = require("express");
const router = express.Router();

const School = require("../models/schoolModel");

// @route POST /school
// @desc  Post school data from the submitted form to the database
router.post("/instance", async (req, res) => {
  try {
    const { name, about, location, admissions } = req.body;
    const newSchool = new School({
      name,
      about,
      location,
      admissions,
    });
    // Save the school to the database
    const savedSchool = await newSchool.save();
    res.json(savedSchool);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// @route POST /image
// @desc  Post the image from the submitted form to the database
router.post("/image", async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// @route GET /all
// @desc  Get all school data in the database
router.get("/all", async (req, res) => {
  const schools = await School.find();
  res.json(schools);
});

// @route GET /instance
// @desc  Get school data from a specific instance (based on ID) in the database
router.get("/instance/:id", async (req, res) => {
  const school = await School.findById(req.params.id);
  res.json(school);
});

// @route GET /image
// @desc  Get image
router.get("/image:id", async (req, res) => {});

module.exports = router;
