const router = require('express').Router();
const groupsDB = require('../../database/models/groups.js')

router.post('/', async (req, res) => {
    const { name, mate1, mate2, mate3, mate4, mate5, mate6, time } = req.body;
    console.log(req.body);
    if (!name || !req.body || Object.keys(req.body).length === 0) return res.json({ "groupName": name, "code": "400", "success": "no", "info": "Body is empty" });

    let isOnDB = await groupsDB.findOne({ groupName: name });

    if (!isOnDB) {  //Save to db
        await groupsDB.create({
            groupName: name,
            timeToFinish: 900000 - time,
            isTime: true,
            mate1: mate1,
            mate2: mate2,
            mate3: mate3,
            mate4: mate4,
            mate5: mate5,
            mate6: mate6
        });
        res.json({ "groupName": name, "code": "201", "success": "yes", "info": "Successfully created" });
    } else { // No save bcs is on db
        res.json({ "groupName": name, "code": "400", "success": "no", "info": "Group Already Exist" });
    }
})

/*
groupName
countryCode
timeToFinish
*/

module.exports = router