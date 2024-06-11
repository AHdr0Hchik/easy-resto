const Model = require('../models');

module.exports = async (req, res, next) => {
    try {
        if(!req.headers.serialid) throw res.status(401).json({"Error" : "В доступе отказано по причине: Нелицензионная копия"});
        const license = await Model.customers.findAll({
            where: {
                sid: req.headers.serialid
            }
        });
        if(!req.headers.serialid || !(license.length == 1)|| !(license[0].sid == req.headers.serialid) ) {
            return res.status(401).json({ success: false, error: "В доступе отказано по причине: Нелицензионная копия" });
        }
        next();
    } catch(e) {
        console.log(e);
        throw res.status(500).json({"Error" : "В доступе отказано по причине: Неизвестная ошибка"});
    }
}