const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing.js");  
    
main()
    .then(()=>{
        console.log("connection successful with DB");
    })
    .catch((err)=>{
        console.log(err);
        console.log("some error occured");
    });

async function main(){
await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

const initDB = async () =>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj,owner:"66a70e0662e6de5b59c9d091"})); //id of wanderlust user
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
}

initDB();