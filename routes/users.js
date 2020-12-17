import express from 'express';

import {getUsers,getUser, createUser,updateUser } from '../controllers/users.js';

const router = express.Router();

import upload from "../middleware/upload.js"


router.get('/',getUsers);
router.post('/',upload.single('profileImage'), createUser);
router.get('/:id',getUser)
router.patch('/:id',upload.single('profileImage'), updateUser);


export default router;