import mongoose from "mongoose";

const hostelApplicationStructure = mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  registrationNumber: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
  },
  preference: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

const hostelApplicationModel = mongoose.model(
  "hostelApplication",
  hostelApplicationStructure
);

export default hostelApplicationModel;
