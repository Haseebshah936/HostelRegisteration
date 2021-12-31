import express from "express";
import {
  getApplications,
  createApplication,
  updateApplication,
  deleteApplication,
} from "../controllers/hostelApplication.js";

const router = express.Router();

//get, post, put, delete
router.get("/", getApplications);

router.post("/", createApplication);

router.put("/:id", updateApplication);

router.delete("/:id", deleteApplication);

export default router;
