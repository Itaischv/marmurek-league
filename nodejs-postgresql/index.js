import express from 'express';
const app = express();

import postgresql from './psql.js';
import { getFixtures, getRoundFixtures } from './api.js';

postgresql(async (connection) => {
//
});
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/teams', async (req, res) => {
    const teams = await process.postgresql.query('SELECT id, name FROM teams');
    res.json({ teams: teams });
});

app.get('/fixtures', async (req, res) => {
    const fixtures = await getFixtures();
    console.log("itai")
    res.json({ fixtures: fixtures });
});

app.get('/fixtures/:id', async (req, res) => {
    const fixtures = await getRoundFixtures(req.params.id);
    res.json({ fixtures: fixtures });
});

app.listen(3000, () => {
    console.log('App running at http://localhost:3000');
});