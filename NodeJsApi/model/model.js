const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    Name:String,
    Email:String,
    Mob:String,
    Gender:String

})

module.exports = mongoose.model('UserRegs',userSchema);