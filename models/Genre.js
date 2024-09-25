import mongoose from "mongoose";

const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  }
});

const Genre = mongoose.models?.Genre || mongoose.model('Genre', genreSchema);
export default Genre;
