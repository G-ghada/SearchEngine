const clinical_studies = require("../../models/clinical_studies");
module.exports = async (req, res) => {
  try {
    // let { search } = req.body;
    const findClinicalStudies = await clinical_studies.find();
    res
      .status(200)
      .json({ status: true, message: "ok", data: findClinicalStudies });
  } catch (error) {
    if (error) throw error;
    res.status(403).json({ status: false, error });
  }
};
