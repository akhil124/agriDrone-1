import { Schema, model, models } from "mongoose";

const bookingSchema = new Schema({
  email: String,
  booking: {
    pilotID: String,
    farmDetails: {
      farm: String,
      farmLand: String,
      farmType: String,
    },

    flightDetails: {
      startDate: String,
      endDate: String,
      duration: Number,
    },
  },
});

const Bookings = models.booking || model("booking", bookingSchema);

export default Bookings;
