const express = require("express");
const router = express.Router();


//add clinicalStudies : /api/visitors/getClinical_studies
router.get("/getClinical_studies", require("./getClinical_studies"));

//add clinicalStudies : /api/visitors/getClinical_studies
router.get("/ReserchData", require("./ReserchData"));
module.exports = router;
