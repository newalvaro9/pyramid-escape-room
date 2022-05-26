const router = require('express').Router();
const groupsDB = require('./../database/models/groups.js')

router.get('/:name', async (req, res) => {
    const { name } = req.params;
    let comprobacion = await groupsDB.findOne({ groupName: name })
    if (comprobacion) {
        res.json({ "user": name, "indb": "yes" })
    } else {
        res.json({ "user": name, "indb": "no" })
    }
})

/*
groupName
countryCode
timeToFinish
*/

module.exports = router