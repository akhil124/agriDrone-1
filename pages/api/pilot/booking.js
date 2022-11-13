import connectMongo from "../../../database/conn";
import Bookings from "../../../model/BookingSchema";
export default async function handler(req, res) {
  const { method } = req;
  const { email } = req?.query;
  const { pilotID } = req?.query;
  await connectMongo();
  //   if (method === "GET") {
  //     if (email) {
  //       try {
  //         const user = await Pilots.findOne({ email: email });
  //         res.status(200).json({ success: true, message: user });
  //       } catch (e) {
  //         res.status(300).json({ success: false, message: e });
  //       }
  //     } else if (pilotID) {
  //       try {
  //         const user = await Pilots.findById(pilotID);
  //         res.status(200).json({ success: true, message: user });
  //       } catch (e) {
  //         res.status(300).json({ success: false, message: e });
  //       }
  //     }
  //   }
  if (method === "POST") {
    const { email, booking } = req.body;
    console.log(req.body, "BODY");
    try {
      const booking = await Bookings.create(req.body);
      res.status(200).json({ success: true, message: booking });
    } catch (e) {
      res.status(300).json({ success: false, message: e });
    }
  }
}
