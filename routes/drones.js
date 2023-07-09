const express = require('express');
const router = express.Router();


// require the Drone model here
const Drone = require("../models/Drone.model.js");



router.get('/drones', (req, res, next) => {
  // Renderiza el archivo list.hbs
  Drone.find().then((drones) => {
    res.render("drones/list", { drones });
  })
  .catch(err => console.log(`Error getting all Drones ${err}`));
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form");

});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  let { droneName, propellers, maxSpeed } = req.body;

  Drone.create({ droneName, propellers, maxSpeed })
    .then((result) => {
      res.redirect('/drones');
    })
    .catch((err) => next(err));
});




router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  Drone.findById(req.params.id)
    .then((result) => {
      res.render("drones/update-form", result);
    })
    .catch((err) => next(err));
});


router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  let { droneName, propellers, maxSpeed } = req.body;
  Drone.findByIdAndUpdate(
    req.params.id,
    { droneName, propellers, maxSpeed },
    { new: true }
  )
    .then((result) => {
      res.redirect("/drones");
    })
    .catch((err) => next(err));
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  Drone.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect("/drones");
  })
  .catch((err) => next(err));
});


module.exports = router;
