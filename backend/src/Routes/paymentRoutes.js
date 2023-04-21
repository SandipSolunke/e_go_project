import { Router } from "express";
import authUser from '../Controller/Auth/authUser.js'
import paymentController from "../Controller/Payment/paymentController.js";
const router=Router();

router.post('/',paymentController)



export default router;