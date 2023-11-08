import mongoose from 'mongoose';
import tripSchema from './trip.js';

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  uuid: String, // You can store the UUID obtained from Supabase Auth here
  trips: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Trip' }], // Reference to Trip model
});
console.log(mongoose.models.User ? 'Using existing model' : 'Creating new model');
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
