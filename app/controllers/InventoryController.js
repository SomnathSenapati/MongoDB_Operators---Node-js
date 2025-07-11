const httpStatusCode = require("../helper/httpStatusCode");
const InventoryModel = require("../model/inventory");
const PaymentModel = require("../model/payment");

class UserAuthController {
  async AddInventory(req, res) {
    try {
      const { name, price, quantity, caregory } = req.body;
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

      const inventory = new InventoryModel({
        name,
        price,
        quantity,
        caregory,
      });
      const data = await inventory.save();

      return res.status(httpStatusCode.Create).json({
        status: true,
        message: "inventory Add Successfully",
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
      const AllData = await InventoryModel.find();

      return res.status(httpStatusCode.Ok).json({
        status: true,
        message: "inventory get Successfully",
        total: AllData.length,
        data: AllData,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async eq(req, res) {
    try {
      const eqdata = await InventoryModel.find({
        price: { $eq: "45999" },
      });

      return res.status(httpStatusCode.Ok).json({
        status: true,
        message: "inventory get Successfully",
        data: eqdata,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async gt(req, res) {
    try {
      const gtdata = await InventoryModel.find({
        price: { $gt: "6000" },
      });

      return res.status(httpStatusCode.Ok).json({
        status: true,
        message: "inventory get Successfully",
        data: gtdata,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async lt(req, res) {
    try {
      const ltdata = await InventoryModel.find({
        price: { $lt: "60000" },
      });

      return res.status(httpStatusCode.Ok).json({
        status: true,
        message: "inventory get Successfully",
        data: ltdata,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async gte(req, res) {
    try {
      const gtedata = await InventoryModel.find({
        price: { $gte: "60000" },
      });

      return res.status(httpStatusCode.Ok).json({
        status: true,
        message: "inventory get Successfully",
        data: gtedata,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async lte(req, res) {
    try {
      const ltedata = await InventoryModel.find({
        price: { $lte: "6000" },
      });

      return res.status(httpStatusCode.Ok).json({
        status: true,
        message: "inventory get Successfully",
        data: ltedata,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async in(req, res) {
    try {
      const indata = await InventoryModel.find({
        price: { $in: "6000" },
      });

      return res.status(httpStatusCode.Ok).json({
        status: true,
        message: "inventory get Successfully",
        data: indata,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async ne(req, res) {
    try {
      const nedata = await InventoryModel.find({
        price: { $ne: "6000" },
      });

      return res.status(httpStatusCode.Ok).json({
        status: true,
        message: "inventory get Successfully",
        data: nedata,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async nin(req, res) {
    try {
      const nindata = await InventoryModel.find({
        price: { $nin: "6000" },
      });

      return res.status(httpStatusCode.Ok).json({
        status: true,
        message: "inventory get Successfully",
        data: nindata,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async regex(req, res) {
    try {
      const data = await InventoryModel.find({
        name: { $regex: ".packed." },
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
  async text(req, res) {
    try {
      const data = await InventoryModel.find({
        $text: { $search: "Non-Fat" },
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
  async where(req, res) {
    try {
      const data = await PaymentModel.find({
        $where: function () {
          var value =
            isString(this._id) &&
            hex_md5(this._id) == "6870a606e2e6f2013bbfcc69";
          return value;
        },
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

module.exports = new UserAuthController();
