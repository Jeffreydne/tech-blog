const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req,res) => {
    try {
        const blogData = await Blog.findAll();
    
      const blogs = blogData.map((blog) =>
        blog.get({ plain: true })
      );
    const loggedIn = req.session.loggedIn
      res.render('homepage', {
        blogs, loggedIn
      });
      } catch (err) {
        console.log('This is the error: ' + err);
        res.status(500).json(err);
      }
});

router.post('/', withAuth, async (req, res) => {
    try{
        const newPost = await Blog.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;