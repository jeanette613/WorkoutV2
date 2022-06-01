require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function () {

    await Category.deleteMany({});
    const categories = await Category.create([
        { name: 'Sandwiches', sortOrder: 10 },
        { name: 'Seafood', sortOrder: 20 },
        { name: 'Mexican', sortOrder: 30 },
        { name: 'Italian', sortOrder: 40 },
        { name: 'Sides', sortOrder: 50 },
        { name: 'Desserts', sortOrder: 60 },
        { name: 'Drinks', sortOrder: 70 },
    ]);

    await Item.deleteMany({});
    const items = await Item.create([
        { name: 'Hamburger', emoji: '🍔', category: categories[0], calories: 550 },
        { name: 'Turkey Sandwich', emoji: '🥪', category: categories[0], calories: 450 },
        { name: 'Hot Dog', emoji: '🌭', category: categories[0], calories: 590 },
        { name: 'Crab Plate', emoji: '🦀', category: categories[1], calories: 600 },
        { name: 'Fried Shrimp', emoji: '🍤', category: categories[1], calories: 750 },
        { name: 'Whole Lobster', emoji: '🦞', category: categories[1], calories: 490 },
        { name: 'Taco', emoji: '🌮', category: categories[2], calories: 350 },
        { name: 'Burrito', emoji: '🌯', category: categories[2], calories: 900 },
        { name: 'Custard', emoji: '🍮', category: categories[5], calories: 780 },
        { name: 'Strawberry Shortcake', emoji: '🍰', category: categories[5], calories: 570 },
        { name: 'Milk', emoji: '🥛', category: categories[6], calories: 180 },
        { name: 'Coffee', emoji: '☕', category: categories[6], calories: 40 },
        { name: 'Mai Tai', emoji: '🍹', category: categories[6], calories: 400 },
        { name: 'Beer', emoji: '🍺', category: categories[6], calories: 190 },
        { name: 'Wine', emoji: '🍷', category: categories[6], calories: 160 },
    ]);

    console.log(items)

    process.exit();

})();