const express = require("express");
const router = express.Router();



//add clinicalStudies : /api/admin/addclinicalStudies
router.post("/AddClinical_studies", require("./AddClinical_studies"));





module.exports = router;