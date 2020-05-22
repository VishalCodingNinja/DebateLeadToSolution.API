var mongoose = require('mongoose');
import { CommentSchema } from '../models/commentModel'
const Comment= mongoose.model('Comment',CommentSchema);


export const addNewComment=(req,res)=>{
    let newComment=new Comment(req.body);

    newComment.save((err,comment)=>{
        if(err){
            res.send(err);
        }
       res.json(comment);  
    });
}



export const getComments=(req,res)=>{
    Comment.find({},(err,comment)=>{
        if(err){
            res.send(err);
        }
       res.json(comment);  
    });
}
export const getCommentsByID=(req,res)=>{
    Comment.findById(req.params.commentID,(err,comment)=>{
        if(err){
            res.send(err);
        }
       res.json(comment);  
    });
}

export const updateComments=(req,res)=>{
    Comment.findOneAndUpdate({_id:req.params.commentID},req.body, {new:true, useFindAndModify: false},(err,comment)=>{
        if(err){
            res.send(err);
        }
       res.json(comment);  
    });
}

export const deleteComment=(req,res)=>{
    Comment.findOneAndRemove({_id:req.params.commentID},(err,comment)=>{
        if(err){
            res.send(err);
        }
       res.json({message:'Sucessfully deleted'});  
    });
}