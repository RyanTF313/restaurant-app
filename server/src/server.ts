import app from './app.js';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URI!)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  });
