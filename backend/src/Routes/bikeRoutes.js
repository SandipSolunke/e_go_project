import { Router } from "express";
import { getBikeLocations,updateBikeLocation,unlockBike } from "../Controller/bike/bikController.js";

const router=Router();

router.get('/get_bike_locations',getBikeLocations)

router.post('/update_bike_location',updateBikeLocation)
router.post('/unlock_bike',unlockBike)



export default router;