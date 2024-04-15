import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Please provide job title"],
        minLength:[3,"Title must have at least 3 characters"],
        maxLength:[50,"Title cannot exceed 50 characters"]
    },
    description:{
        type:String,
        required:[true,"Please provide job description"],
        minLength:[50,"Title must have at least 50 characters"],
        maxLength:[350,"Title cannot exceed 350 characters"]
    },
    category:{
        type:String,
        required:[true,"Job category is required"],
    },
    country:{
        type:String,
        required:[true,"Job country is required"]
    },
    city:{
        type:String,
        required:[true,"Job city is required"]
    },
    location:{
        type:String,
        required:[true,"Job location is required"],
        minLength:[20,"Location must have at least 20 characters"]
    },
    fixedSalary:{
        type:Number,
        minLength:[4,"Fixed Salary must have at least 4 digits"],
        maxLength:[9,"Fixed Salary cannot exceed 9 digits"],
    },
    salaryFrom:{
        type:Number,
        minLength:[4,"Salary from must have at least 4 digits"],
        maxLength:[9,"Salary from cannot exceed 9 digits"],
    },
    salaryTo:{
        type:Number,
        minLength:[4,"SalaryTo from must have at least 4 digits"],
        maxLength:[9,"SalaryTo from cannot exceed 9 digits"],
    },
    expired:{
        type:Boolean,
        default:false,
    },
    jobPostedOn:{
        type:Date,
        default:Date.now,
    },
    postedBy:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true
    }
})

export const Job = mongoose.model("Job",jobSchema)