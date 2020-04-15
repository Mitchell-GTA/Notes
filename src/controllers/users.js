const express = require('express');
const router = express.Router();

router.get('/user/signin', function(req,res){
	res.render('admin/signin')
});

router.get('/user/signup', function(req,res){
	res.render('admin/signup')
});

router.post('/user/signup', function(req,res){

});

module.exports = router;