import mongoose from "mongoose";

const hostelApplicationStructure = mongoose.Schema({
  studentName: {
    type: String,
    required: true,
    unique: true,
  },
  registrationNumber: {
    type: String,
    required: true,
  },
});

const hostelApplicationModel = mongoose.model(
  "hostelApplication",
  hostelApplicationStructure
);

export default hostelApplicationModel;
