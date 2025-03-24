import { Router } from "express";
import { getFaculty, getFacultyByDomain } from "../controller/faculty.controller.js";

const router = Router()

router.route("/get-faculties").get(getFacultyByDomain)
router.route("/get").get(getFaculty)

export default router