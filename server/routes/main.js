const router = require('express').Router();

router.get('/', (req, res) => {
    console.log("Someone viewed backend")
    res.send("API RUNNING OK")
});

module.exports = router