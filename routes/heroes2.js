var express = require('express');
const { route } = require('.');
const heroesControllers = require('../controllers/heroesControllers.js');
var router = express.Router();

const heroesController = require("../controllers/heroesControllers.js");


router.get("/", heroesControllers.list);
router.get("/:id", heroesControllers.show);
router.get("/:id/profesion",heroesController.showProf)
router.get("/:id?/resenia/:tipo?",heroesController.resena)

module.exports = router;