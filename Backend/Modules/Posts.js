import mongoose from "mongoose";

const postsSchema = mongoose.Schema({
  UserName: {
    type: String,
    required: true,
  },
  UserPhoto: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: false,
  },
  img: {
    type: String,
    required: false,
  },
  Role: {
    type: Boolean,
    default: false,
  },
  likes: {
    type: Number,
    required: true,
  },
  views: {
    type: Number,
  },
  date: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
});

const Posts = mongoose.model("posts", postsSchema);


export default  Posts;
