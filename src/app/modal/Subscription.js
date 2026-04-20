const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subscriptionModal = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: {
            validator: function(email) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            },
            message: 'Please enter a valid email address'
        }
    },
    isActive: {
        type: Boolean,
        default: true
    },
    subscribedAt: {
        type: Date,
        default: Date.now
    },
    lastNotificationSent: {
        type: Date,
        default: null
    }
}, {
    collection: 'Subscriptions',
});

subscriptionModal.index({ email: 1 }, { unique: true });

const subscriptionModel = mongoose.models.subscriptionModal || mongoose.model("subscriptionModal", subscriptionModal);

module.exports = subscriptionModel;