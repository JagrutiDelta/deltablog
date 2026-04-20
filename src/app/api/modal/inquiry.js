import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema({
  name: String,
  companyName: String,
  email: String,
  phone: String,
  country: String,
  city: String,
  message: String,
  ipAddress: String,
  userAgent: String,
  submittedAt: { type: Date, default: Date.now },
  status: { type: String, default: 'SUCCESS' }
}, { collection: 'ContactInquiries' });

const Inquiry = mongoose.models.ContactInquiry || mongoose.model('ContactInquiry', inquirySchema);

export default Inquiry;
