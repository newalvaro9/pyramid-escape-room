const router = require('express').Router();
const groupsDB = require('/../../database/models/groups.js')

router.get('/', async (req, res) => {
    console.log(req.query)
    let from = parseInt(req.query.from)
    let to = parseInt(req.query.to)
    
    if(!req.query.from || !req.query.to) {
        let top = await groupsDB.find({isTime: true})
        res.json(top.sort((a, b) => a.timeToFinish - b.timeToFinish))
        
    } else if(isNaN(from) || isNaN(to)){
        return res.json({statusCode: "400", Error: "Bad query param", Fix: "Insert a correct number for limiting the data or remove the query parameter"})
    } else {
        let top = await groupsDB.find({isTime: true})
        res.json(top.sort((a, b) => a.timeToFinish - b.timeToFinish).slice(from, to))
    }
     
})

/*
groupName
countryCode
timeToFinish
*/

module.exports = router        
