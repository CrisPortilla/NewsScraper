var express = require("express");
var mongoose = require("mongoose");
var request = require("request");
var cheerio = require("cheerio");

var router = express.Router();

var article = require("../models/article");
var comment = require("../models/comment");

//Routes that gets articles 

router.get("/", function(req, res) {
    request("http://www.nytimes.com", function(error, response, html) {

        var articles = [];

        var $ = cheerio.load(html);

        $(' div .result').each(function(i, element) {

            console.log($(this).find('span').html())
        })

    });
    res.send('Done');

});
