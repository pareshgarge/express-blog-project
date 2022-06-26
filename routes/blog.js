const express=require('express');
const path = require('path');
const router = express.Router();
const blogs = require('../data/blogs')

router.get('/',(req, res) => {
    res.render('home')
});

router.get('/blog',(req, res) => {
    res.render('blogHome',{
        blogs:blogs
    });
});
router.get('/blogpost/:slug',(req, res) => {
    myblog = blogs.filter((e)=>{
        return e.slug==req.params.slug;
    });
    console.log(myblog)
    res.render('blogPage',{
        blog:myblog
    });
});
module.exports = router;