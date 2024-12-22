const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Users = require("../Modules/User.js");

router.get("/", async (req, res) => {
  try {
    const { Query, token } = req.query;

    jwt.verify(token, process.env.JWT_KEY);

    const results = await Users.find({ $text: { $search: Query } }); // to get all the usernames matchs with the query (if you pay attention we indexed the username)
    //  const results = await Users.find({ UserName: {$regex: Query, $options: "i"} });
    console.log(results)
    res.status(200).json({
      results,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
