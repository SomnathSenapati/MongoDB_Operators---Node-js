const httpStatusCode = require("../helper/httpStatusCode");
const EmployeeModel = require("../model/employee");

class EmployeeController {
  async AddEmployee(req, res) {
    try {
      const { name, age, role, salary } = req.body;
      // if (!name || !email || !password || !phone) {
      //   return res.status(httpStatusCode.BadRequest).json({
      //     status: false,
      //     message: "All fields are required",
      //   });
      // }
      //check for dublicate email
      // const isExistingUser = await userModel.findOne({ email });
      // if (isExistingUser) {
      //   return res.status(httpStatusCode.Conflict).json({
      //     status: false,
      //     message: "email already exist",
      //   });
      // }

      // if (name.length < 3 || name.length > 30) {
      //   return res.status(httpStatusCode.BadRequest).json({
      //     status: false,
      //     message: "Name must be within 3 to 30  characters",
      //   });
      // }

      // if (!/^\d{10}$/.test(phone)) {
      //   return res.status(httpStatusCode.BadRequest).json({
      //     status: false,
      //     message: "Phone must be of 10 digits",
      //   });
      // }

      // const hashed = await hashedPassword(password);

      const employee = new EmployeeModel({
        name,
        age,
        role,
        salary,
      });
      const data = await employee.save();

      return res.status(httpStatusCode.Create).json({
        status: true,
        message: "employee Add Successfully",
        data: data,
      });
    } catch (error) {
      console.log("err", error);

      return res.status(httpStatusCode.InternalServerError).json({
        status: false,
        message: error.message,
      });
    }
  }
  async alldata(req, res) {
    try {
      const AllData = await EmployeeModel.find();

      return res.status(httpStatusCode.Ok).json({
        status: true,
        message: "employee get Successfully",
        total: AllData.length,
        data: AllData,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async and(req, res) {
    try {
      const data = await EmployeeModel.find({
        $and: [{ role: "Developer" }, { age: { $gte: 20, $lte: 30 } }],
      });
      return res.status(httpStatusCode.Ok).json({
        status: true,
        message: "employee get Successfully",
        total: data.length,
        data: data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async or(req, res) {
    try {
      const data = await EmployeeModel.find({
        $or: [{ role: "Software Tester" }, { role: "System Architect" }],
      });
      return res.status(httpStatusCode.Ok).json({
        status: true,
        message: "employee get Successfully",
        total: data.length,
        data: data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async nor(req, res) {
    try {
      const data = await EmployeeModel.find({
        $nor: [{ role: "Senior Cashier" }, { role: "Store Manager" }],
      });

      return res.status(httpStatusCode.Ok).json({
        status: true,
        message: "employee get Successfully",
        total: data.length,
        data: data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async not(req, res) {
    try {
      const data = await EmployeeModel.find({
        age: { $not: { $gte: 25 } },
      });

      return res.status(httpStatusCode.Ok).json({
        status: true,
        message: "employee get Successfully",
        total: data.length,
        data: data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async exists(req, res) {
    try {
      const data = await EmployeeModel.find({
        age: { $exists: true, $gte: 30 },
      });

      return res.status(httpStatusCode.Ok).json({
        status: true,
        message: "employee get Successfully",
        total: data.length,
        data: data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async type(req, res) {
    try {
      const data = await EmployeeModel.find({
        age: { $type: "int" },
      });

      return res.status(httpStatusCode.Ok).json({
        status: true,
        message: "employee get Successfully",
        total: data.length,
        data: data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async mod(req, res) {
    try {
      const data = await EmployeeModel.find({
        salary: { $mod: [2000, 1000] },
      });

      return res.status(httpStatusCode.Ok).json({
        status: true,
        message: "employee get Successfully",
        total: data.length,
        data: data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async regex(req, res) {
    try {
      const data = await EmployeeModel.find({
        age: { $type: "int" },
      });

      return res.status(httpStatusCode.Ok).json({
        status: true,
        message: "employee get Successfully",
        total: data.length,
        data: data,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new EmployeeController();
