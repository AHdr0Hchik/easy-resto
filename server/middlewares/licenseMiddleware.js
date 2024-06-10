const Model = require('../models');

module.exports = async (req, res, next) => {
    try {
        const license = await Model.customers.findAll({
            where: {
                sid: req.headers.serialid
            }
        });
        if(!req.headers.serialid || !(license.length == 1)|| !(license[0].sid == req.headers.serialid) ) {
            return res.json({"Error" : "1.В доступе отказано по причине: Нелицензионная копия"});
        }
        next();
    } catch(e) {
        console.log(e);
        return res.json({"Error" : "2. В доступе отказано по причине: Нелицензионная копия"});
    }
}