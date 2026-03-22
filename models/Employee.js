const mongoose = require("mongoose")

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name Field is Mandatory"]
    },
    email: {
        type: String,
        required: [true, "Email Field is Mandatory"]
    },
    phone: {
        type: String,
        required: [true, "Phone Number Field is Mandatory"]
    },
    designation: {
        type: String,
        required: [true, "Designation Field is Mandatory"]
    },
    salary: {
        type: Number,
        required: [true, "Name Field is Mandatory"]
    },
    city: {
        type: String,
    },
    state: {
        type: String
    },
})
const Employee = new mongoose.model("Employee", EmployeeSchema)

module.exports = Employee