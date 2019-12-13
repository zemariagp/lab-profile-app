'use strict';

const { Router } = require('express');
const router = new Router();
const User = require('./../models/user');
const bcryptjs = require('bcryptjs');



router.post('/login', async (req, res, next) => {
  console.log("req.body", req.body);
  const { username, password } = req.body;
  try {
    console.log("username", username);
    const user = await User.findOne({ username }).exec();
    console.log("user", user);
    if (!user) throw new Error("Username not found bro");

    const matchesPassword = await bcryptjs.compare(password, user.passwordHash);
    console.log("matchPass", matchesPassword);
    if (!matchesPassword) throw new Error("Wrong password bro");
    req.session.user = user._id;
    res.json({ user });


  } catch (error) {
    console.log("error caught here");
    next(error);
  }


});

router.post('/signup', async (req, res, next) => {
  const { username, password, campus, course } = req.body;
  try {
    const passwordHash = await bcryptjs.hash(password, 10);
    if (!passwordHash) throw new Error("something fucked up bro");
    const newUser = await User.create({ username, passwordHash, campus, course });
    if (!newUser) throw new Error("Couldn't create user bro");
    req.session.user = newUser._id;
    res.json({ newUser });


  } catch (error) { next(error); }


});

const multerMiddleware = require("./../middleware/multer-configuration");

router.post('/upload', multerMiddleware.single("image"), async (req, res, next) => {
  const fileUrl = req.file.url;
  const currentUserId = req.user._id;
  try {
    const updatedUser = await User.findOneAndUpdate({ _id: currentUserId }, { image: fileUrl });

  } catch (error) {
    next(error);

  }


});

router.post("/edit", async (req, res, next) => {
  const { username, course, campus } = req.body;
  const currentUserId = req.user._id;
  try {
    const updatedUser = await User.findOneAndUpdate({ _id: currentUserId }, { username: username, course: course, campus: campus }).exec();
    res.json({ updatedUser });

  } catch (error) { next(error); }



});



router.post('/logout', (req, res, next) => {
  req.session.destroy();

  res.json({});
});

/*
router.get('/loggedin', async (req, res, next) => {



});
 */





module.exports = router;
