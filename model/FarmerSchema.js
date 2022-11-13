import { Schema, model, models } from "mongoose";

const farmerSchema = new Schema({
  accountRegistered: {
    type: Boolean,
    default: false,
  },
  fullName: String,
  email: String,
  phoneNumber: String,
  gender: String,
  birthday: String,
  farmInfo: {
    name: String,
    city: String,
    country: String,
    zipCode: String,
    plotType: String,
  },
  cardInfo: {
    cardName: String,
    cardNumber: String,
    cardCVV: String,
    cardEXP: String,
  },
  bookings: [
    {
      farm: String,
      farmLand: String,
      // "flightDetails": {
      //       "startDate": "13/11/2022",
      //       "endDate": "20/11/2022",
      //       "duration": 7
      //   },
      flightDetails: {
        startDate: String,
        endDate: String,
        duration: Number,
      },
      selectedDrone: {
        droneID: String,
        brand: String,
        title: String,
        weight: String,
        description: String,
        equipment: String,
        flightSpeed: String,
        imageUrl: String,
        price: Number,
        quality: String,
        service: String,
        cameraSpecs: {
          lens: String,
          operatingRange: String,
          sensor: String,
          shutterSpeed: String,
        },
        flightParams: {
          flightTime: String,
          maxServiceCeiling: String,
          maxSpeed: String,
          windResistance: String,
          flightSpeed: String,
        },
        imageSpecs: {
          imageResolution: String,
          recordingRate: String,
          videoResolution: String,
        },
        thermalSensingSpace: {
          fov: String,
          measuringFreq: String,
          sensoryRange: String,
        },
      },
      cardDetails: {
        cardName: String,
        cardNumber: String,
        cvv: String,
        exp: String,
      },
    },
  ],
});

const Farmers = models.farmer || model("farmer", farmerSchema);

export default Farmers;
