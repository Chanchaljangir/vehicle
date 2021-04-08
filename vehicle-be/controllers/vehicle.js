"use strict";
//models
const Vehicle = require("../models/vehicle");

async function saveVehicles(req, res) {
    let respObj = {
        IsSuccess: false,
        Message: "OK.",
        Data: null,
    };
    try {
        console.log("req.body", req.body)
        if (!req.body.year)
            res.status(400).json({
                err: "BAD_REQUEST",
                message: "vehicle year is required",
            });
        if (!req.body.make)
            res.status(400).json({
                err: "BAD_REQUEST",
                message: "vehicle make is required",
            });
        if (!req.body.model)
            res.status(400).json({
                err: "BAD_REQUEST",
                message: "vehicle model is required",
            });
        let result = await new Vehicle(req.body).save();
        respObj.IsSuccess = true;
        respObj.Data = result;
        res.status(200).json(respObj);
    } catch (err) {
        respObj.error = err;
        (respObj.message = err.message || "Error while processing db query"),
            res.status(500).json(respObj);
    }
}
async function getVehicles(req, res) {
    let respObj = {
        IsSuccess: false,
        Message: "OK.",
        Data: null,
    };

    try {
        let vehicle = await Vehicle.find();
        console.log("Vehicle", Vehicle)
        respObj.IsSuccess = true;
        respObj.Data = vehicle;
        res.status(200).json(respObj);
    } catch (err) {
        respObj.error = err;
        console.log("err", err);
        (respObj.message = err.message || "Error while processing db query"),
            res.status(500).json(respObj);
    }
}
async function editVehicle(req, res) {
    try {
        const result = await Vehicle.findOneAndUpdate(
            {
                _id: req.params.id
            },
            req.body, {
            new: true
        }
        );
        result ? res.status(200).send({
            message: "Edit Successfully",
            Data: result,
            IsSuccess: true
        }) :
            res.status(422).send({
                message: "Edit unsuccessfully",
                IsSuccess: false
            })
    } catch (error) {
        res.send(error)
    }
}
async function deleteVehicle(req, res) {
    try {
        const result = await Vehicle.findByIdAndDelete(
            {
                _id: req.params.id
            }
        ).remove();
        result ? res.status(200).send({
            message: "Deleted Successfully",
            Data: result,
            IsSuccess: true
        }) :
            res.status(422).send({
                message: "Deleted unsuccessfully",
                IsSuccess: false
            })
    } catch (error) {
        res.send(error);
    }

}
async function getVehicleById(req, res) {
    let respObj = {
        IsSuccess: false,
        Message: "OK.",
        Data: null,
    };

    try {
        let vehicle = await Vehicle.findById({
            _id: req.params.id
        });
        respObj.IsSuccess = true;
        respObj.Data = vehicle;
        res.status(200).json(respObj);
    } catch (err) {
        respObj.error = err;
        console.log("err", err);
        (respObj.message = err.message || "Error while processing db query"),
            res.status(500).json(respObj);
    }
}
module.exports = {
    saveVehicles,
    getVehicles,
    deleteVehicle,
    editVehicle,
    getVehicleById
};