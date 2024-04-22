const crypto = require("crypto");
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  employeeID: {
    type: String,
    required: [true, "Employee ID is required"],
    trim: true,
  },
  //   Authentication
  email: {
    type: String,
    required: [true, "email address is required"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minlength: 8,
    select: false,
  },

  //   Personal Information
  firstName: {
    type: String,
    // required: [true, "Please tell us your first name!"],
    trim: true,
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  gender: {
    type: String,
    enum: ["male", "female", ""],
  },
  civilStatus: {
    type: String,
    enum: ["single", "married", ""],
  },
  dateOfBirth: {
    type: Date,
  },
  nationality: {
    type: String,
  },

  //   Employment Information
  department: {
    type: String,
  },
  position: {
    type: String,
  },
  assignedLocation: String,
  section: String,
  company: String,
  employmentStatus: {
    type: String,
    enum: ["probitionary", "regular", ""],
  },
  sss: String,
  pagibig: String,
  philHealth: String,

  //   Contact Information
  personalContact: Number,
  companyMobileNumber: Number,
  companyLocalNumber: Number,
  presentCity: String,
  presentAddress: String,
  presentAddressTelephone: Number,
  permanentCity: String,
  permanentAddress: String,
  permanentAddressTelephone: Number,

  // for Middlewares
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

//PRE - MIDDLEWARES

//Converting password using bcrypt
userSchema.pre("save", async function (next) {
  //converting if not modified
  if (!this.isModified("password")) return next();

  //converting if modified
  this.password = await bcrypt.hash(this.password, 12);
  this.passowrdConfirm = undefined;

  next();
});

//updating the timestamp when password changes
userSchema.pre("save", function (next) {
  if (!this.isModified("password") || this.isNew) return next();

  this.passwordChangeAt = Date.now() - 1000;

  next();
});

//Finding users excluding deactivated ones
userSchema.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });

  next();
});


//METHODS MIDDLEWARES

//Checking if candidate password and user password is the same
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

//Checking and validation if passwordChangeAt is changed every time password was change
userSchema.methods.changePassword = function (JWTTimestamp) {
  if (this.passwordChangeAt) {
    const changeTimeStamp = parseInt(
      this.passwordChangeAt.getTime() / 1000,
      10
    );
    return JWTTimestamp < changeTimeStamp;
  }
  return false;
};

//Creating token for resetting password
userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  //checking the reset Token
  console.log({ resetToken }, this.passwordResetToken);

  return resetToken;
};

//Creating User Model at atlas
const User = mongoose.model("Users", userSchema);

//Exporting User Scheema
module.exports = User;
