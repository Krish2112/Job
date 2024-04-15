import  mongoose  from "mongoose";

export const dbConnection = ()=> mongoose.connect('mongodb://127.0.0.1:27017/jobSeeking')
.then(()=>{
    console.log("CONNECTION OPEN!!")
})
.catch(err=>{
    console.log("OH NO ERROR!!")
    console.log(err);
})