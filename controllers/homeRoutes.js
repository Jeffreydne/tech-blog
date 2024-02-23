// will change this. For now linking to index.html
const router = require('express').Router();
const path = require('path');

const { Blog } = require('../models');

// This is the GET route for the home page
router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll();

  const blogs = blogData.map((blog) =>
    blog.get({ plain: true })
  );

  res.render('homepage', {
    blogs,
  });
  } catch (err) {
    console.log('This is the error: ' + err);
    res.status(500).json(err);
  }
 
});

// This is the GET route for the login page
router.get('/login', async (req, res) => {

   // Here, login.handlebars is rendered- as the layout template is not needed
  res.sendFile(path.join(__dirname, '../views/login.html'));
});

module.exports = router;