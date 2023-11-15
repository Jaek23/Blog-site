const router = require('express').Router();
const {User, Post, Comment} = require('../models');
const withAuth = require('../utils/auth');

// Route to render homepage
router.get("/", async (req, res) => {
    try {
      const postData = await Post.findAll({
        include: [{ model: User, attributes: ["name"] }],
      });
      const posts = postData.map((post) => post.get({ plain: true }));
      // Render homepage template with posts and login status
      res.render("homepage", {
        posts,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

   router.get('/login', (req, res) => {
     //If the user is already logged in, redirect the request to another route
     if (req.session.logged_in) {
       res.redirect('/dashboard');
       return;
     }
  
     res.render('login');
   });

   router.get('/dashboard', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Post }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('dashboard', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //Route to get single post 
  router.get("/post/:id", withAuth, async (req, res) => {
    try {
          // Find post by ID with associated username and comments with associated usernames
      const postData = await Post.findByPk(req.params.id, {
        include: [
          { model: User, attributes: ["name"] },
          {
            model: Comment,
            include: [{ model: User, attributes: ["name"] }],
          },
        ],
      });
      // Convert post data to plain JavaScript object
      const post = postData.get({ plain: true });
      // Render post template with post data and login status
      res.render("post", {
        ...post,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
          // If there is an error, return 500 status code and error message
      res.status(500).json(err);
    }
  });

//route to go to newPostForm handlebar 
router.get("/newpost", withAuth, (req, res) => {
  if (req.session.logged_in) {
    res.render("newPostForm", {
      logged_in: req.session.logged_in,
    });
    return;
  }
  //res.redirect("/logout");
});

  module.exports = router;