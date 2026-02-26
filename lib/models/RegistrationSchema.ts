import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema({
  // Step 1: Identity
  fullName: { type: String, required: true },
  fatherName: { type: String, required: true },
  cnicOrFormB: { type: String, required: true, unique: true },
  dob: { type: Date, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  email: { type: String, required: true, unique: true },

  // Step 2: Location
  mobileNumber: { type: String, required: true },
  whatsAppNumber: { type: String },
  district: { type: String, required: true },
  permanentAddress: { type: String },
  postalAddress: { type: String },

  // Step 3: Academic
  currentGrade: { type: String, required: true }, // e.g., "10th Class"
  academicPercentage: { type: String },
  instituteName: { type: String, required: true },
  extracurriculars: [{ type: String }], // Array: ['Debates', 'Sports']

  // Step 4: Commitment
  otherAffiliations: { type: String }, // "Yes" or "No"
  motivation: { type: String, required: true },
  attendanceCommitment: { type: String, enum: ['Yes', 'No', 'Maybe'] },
  profilePicture: { type: String }, // URL to Cloudinary/S3
  parentalConsent: { type: Boolean, required: true },
  
  // Meta
  status: { type: String, default: 'Pending', enum: ['Pending', 'Approved', 'Rejected'] },
  registeredAt: { type: Date, default: Date.now }
});

export const RegistrationSchema = mongoose.models.Registration || mongoose.model("Registration", registrationSchema)