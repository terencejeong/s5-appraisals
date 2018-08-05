const mongoose = require("../db/index.js");
const Appraisal = require("../models/appraisal");

exports.newAppraisal = async (req, res) => {
    
    try {
        const appraisal = req.body.appraisal

        const newAppraisal = new Appraisal({
            appraisal: appraisal
        })

        await newAppraisal.save()

        res.status(200).send(newAppraisal)
    } catch (e) {
        res.status(400).send(e);
    }
    
}

exports.getAppraisals = async (req, res) => {

    try {
        const appraisalList = await Appraisal.find();
        res.send(appraisalList)
    } catch(e) {
        res.status(400).send(e);
    }
}