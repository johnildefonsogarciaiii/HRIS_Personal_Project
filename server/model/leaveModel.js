const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema({
  employeeID: {
    type: String,
    required: [true, "employee ID is required"],
  },
  leaveID: {
    type: String,
    required: [true, 'leave ID is required']
  },
  dateCreated: {
    type: Date,
    required: [true, "date created is required"],
  },
  natureOfLeave: {
    type: String,
    required: [true, "nature of leave is required"],
    enum: ['Vacation Leave', 'Sick Leave']
  },
  dateFrom: {
    type: Date,
    required: [true, 'date from is required']
},
  dateTo: {
    type: Date,
    required: [true, 'date to is required']
  },
  contact: Number,
  reasons: String,
  status: {
    type: String,
    enumL: ['pending', 'approved', 'disapproved', 'void', ""],
    default: 'pending'
  },
});

const Leave = mongoose.model("Leave", leaveSchema);

module.exports = Leave;
