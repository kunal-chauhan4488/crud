require("mongoose")
    .connect("mongodb://localhost:27017/we_sept_25_crud")
    .then(() => {
        console.log("Database is connected");
    })
.catch (error => {
    console.log(error);
    
})