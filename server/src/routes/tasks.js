const { Router } = require('express');
const router = new Router();

const Task = require('../models/Task');

const { verifyToken } = require('../helpers/verifyToken');

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

router.get('/special', verifyToken, async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

module.exports = router;