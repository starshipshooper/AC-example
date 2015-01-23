var express = require('express');
var request = require('request');
var async = require('async');
var router = express.Router();
var obfuscate = require('../test/obfsucate');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('carSearcher');
});

/*POST to search */
router.post('/', function(req, res) {
  if (req.body.registrationplate && req.body.stocknumber) {
  var badImage;
  var availableImages = [];
  request('http://vcache.arnoldclark.com/imageserver/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      badImage = body; // Print the google web page.
    }
  })
   var uri = "http://vcache.arnoldclark.com/imageserver/"+obfuscate(req.body.stocknumber,req.body.registrationplate);
   var images = [uri+"/350/f",uri+"/350/i",uri+"/350/r",uri+"/350/4",uri+"/350/5",uri+"/350/6" ];
    async.eachSeries(images, function(item, mycallback){
      request(item, function (error, response, body) {
        console.log(uri);
        console.log(item);
        if (!error && response.statusCode == 200) {
          if (body!==badImage) {
                  availableImages.push(item)
                  mycallback();
                }
                else{mycallback();}
                }
        })
      },
      function(err){
        if(err){}
        else {
          if (availableImages.length === 0) {
            res.render('carSearcher', {nophotos: "No photos available for with these details."})
          }
          res.render('carSearcher', {photos: availableImages});
        }
      });
  }
  else {
    res.redirect('/search');
  }
});


module.exports = router;
