import Movie from '../../../models/Movie';

const handler = async (req, res) => {
  const { method } = req;
  switch (method) {
    case 'POST':
      try {
        const newMovie = new Movie(req.body);
        await newMovie.save();
        return res.status(200).json({ message: 'success', data: newMovie });
      } catch (err) {
        return res.status(400).josn({ message: 'error', data: err });
      }
    case 'GET':
      try {
        const response = await Movie.find({});
        return res.status(200).json({
          message: 'success',
          data: response,
        });
      } catch (err) {
        return res.status(400).json({ message: 'error', data: err });
      }
    default:
      return res
        .status(400)
        .json({ message: 'error', data: 'invalid request' });
  }
};

export default handler;

// GET => /movies
//   read all the movies
// POST => /movies
//   create a new movie
// GET => /movies.id
//   get a single movie
// PATCH => /movies/id
//   update an existing movie
