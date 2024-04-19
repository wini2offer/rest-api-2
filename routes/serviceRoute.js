const express = require("express");
const router = express.Router();
const {getAllService, getSingleService, createNewService, updatedService, deleteService  } = require("../controllers/serviceController");

//  This Section is For All Service
router.get("/service", getAllService);

// This Section is for Single Service
router.get("/service/:id", getSingleService);

// This Section is for New Service
router.post("/service", createNewService);

// This Section is for Updated Service
router.put("/service/:id", updatedService);

// This Section is for Deleted Service
router.delete("/service/:id", deleteService);

module.exports = router;
