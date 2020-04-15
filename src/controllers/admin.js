const express = require('express');
const router = express.Router();
const ModelAdmin = require('../models/admin/admin')

router.get('/notes/add-note', function(req,res){
	res.render('admin/add_note');
});

router.post('/notes/add-note',async function(req,res){
	var {title,description} = req.body;
	var errors = [];
	if (!title) {
		errors.push({text: 'Escribe un Titulo'});
	}
	if (!description) {
		errors.push({text: 'Escribe una Descripcion'});
	}
	if (errors.length > 0) {
		res.render('notes/add_note',{
			errors,
			title,
			description
		});
	}else {
		const newNote = new ModelAdmin({title,description});
		await newNote.save();
		res.redirect('/notes');
	}
});

router.get('/notes',async function(req,res){
	const data = await ModelAdmin.find().sort({createAd: "desc"});
	console.log('data ' + data)
	res.render('admin/list_notes',{data});
});

router.get('/notes/edit-note/:objectId',async function(req,res){
	const data = await ModelAdmin.findById(req.params.objectId);
	console.log('id' + data)
	res.render('admin/edit_note',{data});
})

router.post('/notes/edit-note/:objectId', async function(req,res){
	
})

module.exports = router;