var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const CommentSchema =  new Schema({
    firstName:{
        type:String,
        required: true
     },
     lastName:{
        type:String,
        required: true
     },
     email:{
        type:String,
        required: true
     },
     created_date:{
        type:String,
        default: Date.now
     },
     phone:{
        type:Number
     }
});
module.export = mongoose.model('Comment', CommentSchema);