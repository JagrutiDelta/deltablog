const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userDataModal = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    description:{
        type:String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    collection: 'UserData',
});

const userModal = mongoose.models.userDataModal || mongoose.model("userDataModal", userDataModal);

module.exports = userModal;