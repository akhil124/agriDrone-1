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
  paymentDetails: [
    {
      cardName: String,
      cardNumber: String,
      cardCVV: String,
      cardEXP: String,
    },
  ],
});

const Farmers = models.farmer || model("farmer", farmerSchema);

export default Farmers;
