const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dhiraj:ztT4blZumC0vKGzT@cluster0.7a6ts.mongodb.net/meanapp?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then((res)=>{
    console.log("Coonection done")
}).catch((err)=>{
    console.log("Connection Failed  "+err);
})

module.exports = mongoose;