import express from "express";
import protectRoute from "../Middleware/protectRoutes.js";
import   {getUsersForSidebar}  from "../controllers/usercontroller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar)


export default router;