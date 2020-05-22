import {mongoose } from 'mongoose';
var Schema = mongoose.Schema;

const CommentSchema = new Schema({
    firstName:{
        type:String,
        required: true
     }
});
export default CommentSchema;