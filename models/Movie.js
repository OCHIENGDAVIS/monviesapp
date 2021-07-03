import mongoose from 'mongoose';

const { Schema } = mongoose;
const MovieSchema = new Schema({
  name: String,
  genre: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  actors: [{ name: String }],
});
export default mongoose.models.Movie || mongoose.model('Movie', MovieSchema);
