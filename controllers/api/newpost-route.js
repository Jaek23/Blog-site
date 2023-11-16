const router = require('express').Router();
const {Post} = require('../../models');
const withAuth = require('../../utils/auth');

//Create new post route 
router.post("/", withAuth, async (req, res) => {
    try {
      const newPost = await Post.create({
        ...req.body,
        user_id: req.session.user_id,
      });
      res.status(200).json(newPost);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //update post route 
  router.put("/:id", withAuth, async (req, res) => {
    try {
      const updatedPost = await Post.update(req.body, {
        where: { id: req.params.id },
      });
  
      if (!updatedPost) {
        res.status(404).json({ message: "No post found with that id!" });
        return;
      }
      res.status(200).json(updatedPost);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//route to delete post by logged in user 
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const deletedPost = await Post.destroy({
      where: { id: req.params.id },
    });

    if (!deletedPost) {
      res.status(404).json({ message: "No post found with that id!" });
      return;
    }
    res.status(200).json(deletedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

  module.exports = router;