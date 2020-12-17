import express from 'express';
import mongoose from 'mongoose';

import User from '../models/user-info.js';

const router = express.Router();



export const getUsers = async (req, res) => { 
    try {
        const users = await User.find();
                
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const createUser = async (req, res,next) => {
   
    const newUser = new User({name:req.body.name ,email:req.body.email ,phone:req.body.phone ,password:req.body.password  })
    if(req.file){
        newUser.profileImage = req.file.path
    }
   
    
    try {
        await newUser.save();
        console.log('newUser created!')

        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
        console.log('not create any user!')
    }
}

export const getUser = async (req, res) => { 
    const { id } = req.params;

    try {
        const user = await User.findById(id);
        
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const updateUser = async (req, res) => {
    const { id } = req.params;
   
   
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    

    const updatedUser = { name:req.body.name ,email:req.body.email ,phone:req.body.phone ,password:req.body.password };

    if(req.file){
        updatedUser.profileImage = req.file.path
    }

    await User.findByIdAndUpdate(id, updatedUser, { new: true });

    res.json(updatedUser);
}






export default router;