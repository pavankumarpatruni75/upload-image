var mongoose = require('mongoose');
var fs = require('fs');
var db = require('../db/db.js');
var resHandler = require('../utils/responseHandler.js');

exports.uploadImages = function(req, res){
	var images = req.body.image;
	var base64Data = images.replace(/^data:image\/png;base64,/, "");
	
	console.log(base64Data);
	fs.readFile(base64Data, function (err, data) {
	console.log("err" + err);
    var imageName = "csadsads_"+images.length;
    // If there's an error
    if(!imageName){
      console.log("There was an error")
      res.redirect("/");
      res.end();
    } else {
      var newPath = __dirname + "/uploads/fullsize/" + imageName;
      // write file to uploads/fullsize folder
      fs.writeFile(newPath, data, function (err) {
        // let's see it
        //res.redirect("/uploads/fullsize/" + imageName);
      });
    }
  });	
};