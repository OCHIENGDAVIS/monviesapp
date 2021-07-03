import mongoose from 'mongoose';
const { Schema } = mongoose;
const UserSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  movies: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Movie',
    },
  ],
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
