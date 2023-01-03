const express = require("express");
const router = express.Router();

const idLength = 8;

router.get('/getInfo', (req, res) => {

    const people = req.app.db.get('users').value();

    return res.send({ status: "200", data: people });

});

module.exports = router;