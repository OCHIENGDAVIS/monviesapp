import mongoose from 'mongoose';
const dbConnect = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log('db connected!');
  try {
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
export default dbConnect;
