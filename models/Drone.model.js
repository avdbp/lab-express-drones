// Iteration #1
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let droneSchema = new Schema(
  {
    droneName: {
      type: String,
    },
    propellers: {
      type: Number,
    },
    maxSpeed: {
      type: Number,
    },
  },
  
  {
    timestamps: true,
  }
);

//schema para montar el modelo (estructura de un documento de la coleccion)
const Drone = mongoose.model("Drone", droneSchema); //Modelo: clase para manipular documentos en una colección

//especificas qué va a devolver el require
module.exports = Drone;