let express = require("express");
let router = express.Router();

let _vehicleCtrl = require("../controllers/vehicle");

router.get("/", function (req, res) {
  res.json({
    API: "1.0"
  });
});

router.post("/addVehicle", _vehicleCtrl.saveVehicles);
router.get("/vehicles", _vehicleCtrl.getVehicles);
router.put("/vehicle/:id", _vehicleCtrl.editVehicle);
router.delete("/vehicle/:id", _vehicleCtrl.deleteVehicle);
router.get("/vehicleById/:id", _vehicleCtrl.getVehicleById);


module.exports = router;