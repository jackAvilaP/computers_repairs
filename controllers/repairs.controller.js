
const dotenv = require('dotenv');

const { Repair } = require('../models/repair.model');

const { catchAsync } = require('../utils/catchAsync');
//const { AppError } = require('../utils/appError');

dotenv.config({ path: './config.env' });


const getAllEquipment = catchAsync(async (req, res, next) => {
    const repairs = await Repair.findAll(
        {
            where:{status:'pending'}
        }
    );

    res.status(200).json({
        repairs,
    })
});

const getRepairById = catchAsync(async (req, res, next) => {
    const { repair } = req;
    
    res.status(200).json({
        repair,
    });
});

const newRepair = catchAsync(async (req, res, next) => {
    const { date,computerNumber ,comments ,status,userId } = req.body;

    const newRepair = await Repair.create({
        date,
        computerNumber,
        comments,
        status,
        userId,
    });

    res.status(201).json({ newRepair });
});

const updateRepair = catchAsync(async (req, res, next) => {
    const { repair } = req;

    await Repair.update({status:'completed'})
});

const deleteRepair = catchAsync(async(req,res,next)=>{
    const { repair } = req;

    await Repair.update({status:'cancelled'})
})
module.exports = {
    getAllEquipment,
    getRepairById,
    newRepair,
    updateRepair,
    deleteRepair,

};