import mongoose from 'mongoose';

import Movie from '../../../models/Movie';

const handler = async (req, res) => {
  const { method } = req;
  if (!mongoose.isValidObjectId(req.query.id)) {
    return res.status(400).json({ message: 'provide a valid ObjectId' });
  }
  switch (method) {
    case 'GET':
      // get the param from the url and get the single movie (req.query)
      try {
        const movie = await Movie.findById(req.query.id);

        if (!movie) {
          return res
            .status(404)
            .json({ message: 'error', data: 'movie not found!' });
        }
        return res.status(200).json({ message: 'success', data: movie });
      } catch (err) {
        return res.status(400).json({ message: 'error', data: err });
      }

    case 'PATCH':
      try {
        const movieToPatch = await Movie.findById(req.query.id);

        if (!movieToPatch) {
          return res
            .status(404)
            .json({ message: 'error', data: 'movie not found' });
        }

        const update = await movieToPatch.updateOne(req.body);
        return res.status(200).json({ message: 'success', data: update });
      } catch (err) {
        return res.status(400).json({ message: 'error', data: err });
      }
    default:
      return req
        .status(400)
        .json({ message: 'error', data: 'invalid request' });
  }
};

export default handler;
