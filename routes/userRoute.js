const express = require("express");
const router = express.Router();
const { getAllUsers, getSingleUser, createNewUser, updatedUser, deleteUser } = require("../controllers/userController")

//  This Section is For All Users
router.get('/user', getAllUsers)


// This Section is for Single Users
router.get('/user/:id', getSingleUser)


// This Section is for New Users
router.post('/user', createNewUser)

// This Section is for Updated Users
router.put('/user/:id', updatedUser)

// This Section is for Deleted Users
router.delete('/user/:id', deleteUser)

module.exports = router;