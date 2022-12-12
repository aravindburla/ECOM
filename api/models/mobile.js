const mongoose = require("mongoose");

const MobileSchema = new mongoose.Schema({
  mobileName: {
    type: String,
  },
  mobilePrice: {
    type: Number,
  },
  mobileBrand: {
    type: String,
  },
  mobileRam: {
    type: String,
  },
  mobileRom: {
    type: String,
  },
  mobileScreenSize : {
    type: Number,
  },
  mobileCamera: {
    type: Number,
  }
});

module.exports = mongoose.model("Mobile", MobileSchema);
