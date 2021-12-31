import hostelApplicationModel from "../models/hostelApplication.js";

export const getApplications = async (req, res) => {
  try {
    const hostelApplications = await hostelApplicationModel.find();
    res.json(hostelApplications);
  } catch (error) {
    console.log("Not found any data.");
  }
};

export const createApplication = async (req, res) => {
  const newApplicant = new hostelApplicationModel(req.body);
  try {
    await newApplicant.save();
    res.json(newApplicant);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateApplication = async (req, res) => {
  try {
    const user = await hostelApplicationModel.findByIdAndUpdate(
      req.params.id,

      { $set: req.body },
      {
        new: true,
      }
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json("Some thing went wrong");
  }
};

export const deleteApplication = async (req, res) => {
  try {
    const user = await hostelApplicationModel.findByIdAndDelete(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json("Some thing went wrong");
  }
};
