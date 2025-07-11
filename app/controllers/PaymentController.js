const httpStatusCode = require("../helper/httpStatusCode");
const PaymentModel = require("../model/payment");

class PaymentController {
  async Addpayment(req, res) {
    try {
      const { gross_amount, discount, net_amount } = req.body;

      const payment = new PaymentModel({
        gross_amount,
        discount,
        net_amount,
      });
      const data = await payment.save();

      return res.status(httpStatusCode.Create).json({
        status: true,
        message: "payment Add Successfully",
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
      const AllData = await PaymentModel.find();

      return res.status(httpStatusCode.Ok).json({
        status: true,
        message: "payment get Successfully",
        total: AllData.length,
        data: AllData,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new PaymentController();
