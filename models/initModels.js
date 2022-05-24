const { User } = require('../models/user.model');
const { Repair } = require('../models/repair.model');


// Establish your models relations inside this function
const initModels = () => {
    User.hasMany(Repair);
    Repair.belongsTo(User);
};

module.exports = { initModels };
