// const Car = require('../model/car');

// exports.addCars = async (req, res, next) => {
//     try {
//         await Car.create({
//             brand: req.body.brand,
//             manufacturer: req.body.manufacturer,
//             year: req.body.year,
//             mileage: req.body.mileage,
//             rate: req.body.rate,
//             available: req.body.available,
//             rental_records: req.body.rental_records
//         })
//         res.status(201).json({ success: true, data: "successfully posted" })
//     }
//     catch (error) {
//         res.status(205).json({ success: false, data: error.message })
//     }
// }


// exports.reservedCar= async (req, res, next) => {
//     try {
//       const reserveId = new ObjectId();
//       await Cars.updateOne(
//         { _id: req.params.car_id },
//         {
//           $push: {
//             rental_records: {
//               reservation_id: reserveId,
//               driver_license: req.body.driver_license,
//               start_date: new Date(),
//               return_date: "",
//             },
//           },
//         }
//       );
//       res.status(201).json({ status: "ok", reservation_id: reserveId });
//     } catch (error) {}
//   };

//   exports.returnedCar= async (req, res, next) => {
//     await Cars.updateOne(
//       {
//         _id: req.params.car_id,
//         "rental_records.reservation_id": req.params.reserve_id,
//       },
//       {
//         "rental_records.$.return_date": req.body.return_date,
//       }
//     );
//     res.json({ status: "ok", data: "the car is returned" });
//   };

//   exports.removedDetail = async (req, res, next) => {
//       try {
//         await Cars.updateOne(
//           {
//             _id: req.params.car_id,
//             "rental_records.reservation_id": req.params.reserve_id,
//           },
//           {
//             $unset: { "rental_records.$": 12 },
//           }
//         );
//         res.json({ status: "ok", data: "the car detail is deleted" });
//       } catch (error) {}
//     }


// exports.editCars = async (req, res, next) => {
//     try {
//         await Car.updateOne({ _id: req.body.id }, { $set: { ...req.body } })
//         res.status(202).json({ success: true, data: "successfully updated" })
//     } catch (error) {
//         res.status(304).json({ success: false, data: "unable to update" })
//     }
// }

// exports.deleteCars = async (req, res, next) => {
//     try {
//         let deleted = await Car.deleteOne({ _id: req.params.cid }, { $set: { ...req.body } })
//         res.status(200).json({ success: true, data: deleted })
//     } catch (error) {
//         res.status(304).json({ success: false, data: "Id is not found" })
//     }
// }

// exports.getCars = async (req, res, next) => {
//     const page = parseInt(req.query.page);
//     const limit = parseInt(req.query.limit);

//     const startIndex = (page - 1) * limit;
//     const endIndex = 5;
//     try {
//         let carList = await Car.find({})
//         const myPage = carList.slice(startIndex, endIndex)
//         res.status(200).json({ success: true, data: myPage })
//     } catch (error) {
//         res.status(204).json({ success: false, data: "unable to get your datas" })
//     }

// }