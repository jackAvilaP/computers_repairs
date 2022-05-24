const express = require('express');

const { repairExists } = require('../middlewares/repairs.middlewares');
const { protectAdmin, protectToken, protectAccountOwner } = require('../middlewares/users.middlewares');

const {
    getAllEquipment,
    getRepairById,
    newRepair,
    updateRepair,
    deleteRepair,
} = require('../controllers/repairs.controller');
const { createRepairsValidations, checkValidations } = require('../middlewares/validations.middlewares');


const router = express.Router();

router.use(protectToken);

router.route('/')
    .get( getAllEquipment)
    .post(createRepairsValidations, checkValidations, newRepair);

router.use(protectAdmin);

router.route('/:id')
    .get(repairExists, getRepairById)
    .patch(repairExists, updateRepair)
    .delete(repairExists, deleteRepair);

module.exports = { repairsRouter: router };