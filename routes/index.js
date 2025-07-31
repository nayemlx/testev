var express = require('express');
const connectDB = require('../lib/db');
const Post = require('../lib/models/Post');
var router = express.Router();


connectDB()
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/test', function(req, res) {
  res.render('test');
});



router.post('/post', async(req, res) => {
  const { title, content } = req.body;
  const post = new Post({ title, content });
  await post.save();
  res.redirect('/test');
})


router.get('/posts', async(req, res) => {
  const posts = await Post.find({});
  res.render('posts', { posts });
})
module.exports = router;
