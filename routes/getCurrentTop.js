const router = require('express').Router();
const groupsDB = require('./../database/models/groups.js')

router.get('/', async (req, res) => {
    if(!req.query.limit) {
        return res.json({Error: "No query param limit", Fix: "Add ?limit= with a number of max docs to the url"})
    }
    let top = await groupsDB.find({isTime: true}).limit(req.query.limit)
    res.json(top.sort((a, b) => a.timeToFinish - b.timeToFinish))
})

/*
groupName
countryCode
timeToFinish
*/

module.exports = router