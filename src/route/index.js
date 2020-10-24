const express = require('express');
const route = express.Router();

const controller = require('../controller/index');

route.get('/', (req, res) => {
    res.send({
        greet : 'Hello there 👋',
        message : 'visit link on bellow for documentation about masak apa hari ini 👇',
        documentation : 'https://github.com/tomorisakura/unofficial-masakapahariini-api'
    });
});

route.get('/api', (req, res) => {
    res.send({
        method : req.method,
        message : 'Hello there 🌹',
        status : 'On Progress 🚀',
        lets_connected : {
            github : 'https://github.com/tomorisakura',
            dribbble : 'https://dribbble.com/grevimsx',
            deviantart : 'https://deviantart.com/hakureix'
        }
    });
});

route.get('/api/recipes', controller.newRecipes);
route.get('/api/recipes/:page', controller.newRecipesByPage);
route.get('/api/categorys/recipes', controller.category);
route.get('/api/articles/new', controller.article);
route.get('/api/categorys/recipes/:key', controller.recipesByCategory);
route.get('/api/categorys/recipes/:key/:page', controller.recipesCategoryByPage);
route.get('/api/recipe/:key', controller.recipesDetail);
route.get('/api/search/', controller.searchRecipes);
route.get('/api/categorys/article', controller.articleCategory);
route.get('/api/categorys/article/:key', controller.articleByCategory);
route.get('/api/article/:tag/:key', controller.articleDetails);

route.get('*', (req, res) => {
    res.status(404).json({
        method : req.method,
        message : 'cant find spesific endpoint',
        status : false,
        code : 404,
    });
});

module.exports = route;
