import { Router } from "express";

// Controllers
import {
  addCompaniesDetails,
  fetchCompaniesDetails,
  fetchCompanyDetailsById,
} from "../controllers/company.controller.js";

const router = Router();

// Routes declarations
router.route("/").get(fetchCompaniesDetails).post(addCompaniesDetails);
router.route("/:id").get(fetchCompanyDetailsById);

export default router;
