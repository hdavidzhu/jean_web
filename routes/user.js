
/*
 * GET users listing.
 */

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
	var kittens = req.body.text;
	res.redirect('/');
}