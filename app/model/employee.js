const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const employeeModel = mongoose.model("employee", employeeSchema);
module.exports = employeeModel;
