const express = require("express");
const posts = require("../Modules/Posts.js");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const Users = require("../Modules/User.js");
//create post
router.post("/", async (req, res) => {
  try {
    const { token,content, img, Role} = req.body;
    const decode = jwt.verify(token, process.env.JWT_KEY);
    id = decode.id;
    const User = await Users.findById({_id:id});
    const d = new Date();

    const date = `${d.getUTCDate()}-${d.getUTCMonth()}-${d.getUTCFullYear()}`;

    const newPost = new posts({
      UserName:User.UserName,
      UserPhoto:User.img,
      content,
      img,
      Role,
      likes:0,
      views:0,
      date,
      author:id
    });

    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
     console.log("hatta", error.message, "hatta");
    res.status(500).json({ error: error.message });
  }
});

//Read all
router.get("/", async (req, res) => {
  try {
    const token = req.query.token;

    jwt.verify(token, process.env.JWT_KEY, (err, decode) => {
      if (err) {
        console.log("am in");
        console.log(err.message);
        throw new Error("re login");
      }
    });

    const pageNumber = req.query.pageParam;
    const AllPosts = await posts.find();
    const data = AllPosts.slice(pageNumber, pageNumber + process.env.LIMIT);
    res
      .status(200)
      .json({
        data,
        nextPage:
          pageNumber + process.env.LIMIT < AllPosts.length ? pageNumber + process.env.LIMIT : null,
      });
  } catch (e) {
    //    artık böyle yapıcaığız throw erro ile istediğimiz error göstereceğiz
    res.status(501).json({ error: e.message });
  }
});

module.exports = router;
