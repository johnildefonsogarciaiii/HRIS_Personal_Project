const Leave = require('../model/leaveModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');



// Get all leave
exports.getAllLeave = catchAsync(async (req, res, next) => {
    const leaves = await Leave.find(req.query);

    leaves.reverse();

    res.status(200).json({
        status: 'success',
        result: leaves.length,
        data: {leaves}
    })
});


// creating new leave
exports.createLeave = catchAsync(async(req, res, next) => {
    const leave = await Leave.create({
        employeeID: req.body.employeeID,
        leaveID: req.body.leaveID,
        dateCreated: req.body.dateCreated,
        natureOfLeave: req.body.natureOfLeave,
        dateFrom: req.body.dateFrom,
        dateTo: req.body.dateTo,
        reasons: req.body.reasons,
        status: req.body.status
    })

    if(!leave) {
        return next(new AppError('Document was not found', 404))
    }

    res.status(200).json({
        status: 'success',
        data: {leave}
    })
});



// updating leaves
exports.updateLeave = catchAsync(async(req, res, next) => {
    const update = await Leave.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })

    if(!update){
        return (new AppError('Leave was not found', 404))
    }

    res.status(200).json({
        status: 'success',
        data: update
    })
});

