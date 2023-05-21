
import { compareSync } from 'bcrypt'
import BikeLocationsDataModel from '../../Model/BikeLocationsDataModel.js'

export const getBikeLocations = async (req, res) => {

    console.log("get bike location request recieved!")

    BikeLocationsDataModel.find({}).then((result) => {
        console.log(result)
        if (result.length > 0) {
            return res.send({ status: true, data: result, massage: "Locations fetched successfully" })
        }
        else {
            return res.send({ status: false, data: [], massage: "Locations not dound" })
        }
    }).catch((error) => {
        console.log("error while fetching bike locations :", error)
        return res.send({ status: false, data: [], massage: error })
    })

}

export const updateBikeLocation = async (req, res) => {
    console.log("update bike location request received!");

    let body = '';

    req.on('data', (chunk) => {
        body += chunk;
    });

    console.log(body)
    req.on('end', async () => {
        // Parse the request body as JSON
        const jsonData = JSON.parse(body);

        // Access the values from the JSON data
        const id = jsonData.id;
        const lat = jsonData.lat;
        const lang = jsonData.lang;

        console.log('Received request body:', jsonData);

        try {
            const result = await BikeLocationsDataModel.updateOne(
                { id: id }, // Filter by the custom ID field
                jsonData, // Update object
                { upsert: true, new: true } // Option to insert the document if not found
            );

            if (result) {
                console.log('Bike location updated successfully');
                return res.send({ status: true, message: "Bike location updated successfully" });
            } else {
                console.log('Bike not found');
                return res.send({ status: false, message: "Bike not found" });
            }

        } catch (error) {
            console.log('Error updating document:', error);
            return res.send(error);
        }
    });
};



export const unlockBike = async (req, res) => {

    console.log("unlock bike request recieved!")
    const bikeId = req.body.data.text

    console.log("bike id :", bikeId)


}