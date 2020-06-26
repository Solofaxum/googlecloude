// const User = require("../model/user");
// const jwt = require("jsonwebtoken");


// exports.userSignup = async (req, res, next) => {
//   const { email, password } = req.body;
//   let user = await User.findOne({ email: email });
//   if (user) {
//     res.status(422).json({ status: "error", data: "email already registered" });  //422 already exists
//   } else {
//     await User.create({ email: email, password: password, role: "user", active:true });
//     res.status(201).json({ status: "Ok", data: "succesfully registerd" });
//   }
// };

// exports.userLogin = async (req, res, next) => {
//   const { email, password } = req.body;
//   if (!email || !password) {
//     return res.status(412).json({         //412=precondtion failed
//       status: "error",
//       data: "Please provide email or password",
//     });
//   }
//   let user = await User.findOne({ email: email }); // find =[]   findOne = {}
//   if (!user || password != user.password) {
//     returnres.status(406).json({          //406 not acceptable
//       status: "error",
//       data: "Invalid Credential",
//     });
//   }

//   let token = await jwt.sign({ email: useremail }, "solosecret");
//   res.status(200).json({ token: token });
// };

// exports.getUsers = async(req, res, next) => {            
//   try {
//       let usersList = await User.find({ }) 
//       res.status(200).json({success:true, data:usersList})
//   } catch (error) {
//       res.status(204).json({success: false})
//   } 
// }





