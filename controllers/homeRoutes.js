// will change this. For now linking to index.html
const router = require('express').Router();
const path = require('path');

const { Blog } = require('../models');

// This is the 'get' route 
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
  // Here, index.html is rendered- commented out to instead use handlebars
  // res.sendFile(path.join(__dirname, '../views/index.html'));
});

module.exports = router;