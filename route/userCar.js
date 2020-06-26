const router = require("express").Router();
// const jwt = require("jsonwebtoken");

const carsController = require("../controler/car");
const userController = require("../controler/user");


// const protect = async (req, res, next) => {
//     let token;
//     if (req.headers.authorization) {
//       token = req.headers.authorization.split(" ")[1]; 
//     }
//     if (!token) {
//       return res.json({
//         status: "error",
//         data: "you are not authorized to access this route",
//       });
//     }
//     try {
//       let decodedData = jwt.verify(token, "ubuntusecret"); 
//       let user = await User.findOne({ _id: decodedData.id });
//       req.user = user;
//       next();
//     } catch (error) {
//       return res.json({
//         status: "error",
//         data: "you are not authorized to access this route",
//       });
//     }
//   };
  
  // const authorize = (...role) => {
  //   return (req, res, next) => {
  //     if (role.includes(req.user.role)) {
  //       return next();
  //     }
  //     return res.json({
  //       status: "error",
  //       data: "user role is authorized to access this route",
  //     });
  //   };
  // };

  router.get("/users", userController.getUsers);
  router.post("/users/signup", userController.userSignup);
  router.post("/users/login", userController.userLogin);
   
  

router.post("/cars", carsController.addCars);
router.post("/cars/:car_id", carsController.reservedCar);
// router.patch("/cars/:car_id/returnedcar/:reserve_id",carsController.returnedCar);
// router.delete("/cars/:car_id/rentaldetail/:reserve_id", carsController.removeDetail);
router.patch("/cars", carsController.editCars);
// router.delete("/cars/:id",  carsController.deleteCars);
router.get("/cars",  carsController.getCars);



module.exports = router;
