
/*
 * GET users listing.
 */

var models = require('../models');
var TextBlock = models.TextBlock;

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.index = function(req, res){
  res.render('index', { title: 'Huang Lab | Olin College' });
};

exports.research = function(req, res){
  res.render('research', { title: 'Research | Huang Lab' });
};

exports.lab_members = function(req, res){
  res.render('lab_members', { title: 'Lab Members | Huang Lab' });
};

exports.biocast = function(req, res){
  res.render('biocast', { title: 'BioCast | Huang Lab' });
};

exports.easter_egg = function(req, res){
  res.render('easter_egg', { title: 'Easter Egg! | Huang Lab' });
};

exports.render_edit_about = function(req, res) {
	res.render('edit_about', { title: 'Edit About Text'});
}

exports.edit_about = function(req, res) {
	console.log("Post request!");
  var about = new TextBlock({'name': 'about', 'text': req.body.text});
  about.save( function (err) {
    if (err) {
      consloe.log(err);
    } else {
      console.log("Save successful.");
    }
  })
	res.redirect('/');
}