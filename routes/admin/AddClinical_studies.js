const ClinicalStudies = require("../../models/clinical_studies");

module.exports = async (req, res) => {
     try {
       let {
        required_header,
        id_info,
        brief_title,
        official_title,
        sponsors,
        oversight_info,
        brief_summary,
        start_date,
        completion_date,
        primary_outcome,
        arm_group,
        reference,
        patient_data,
          } = req.body;
    // let { id } = req.params;
    // const employ = await Employer.findById(id);
    const newClinical_studies = new ClinicalStudies({
      required_header,
      id_info,
      brief_title,
      official_title,
      sponsors,
      oversight_info,
      brief_summary,
      start_date,
      completion_date,
      primary_outcome,
      arm_group,
      reference,
      patient_data,
    });
    const Clinical_studies = await newClinical_studies.save();
    res.status(200).json({
      message: "your Clinical_studies was created succefully",
      data: ClinicalStudies,
    });
  } catch (error) {
    if (error) throw error;
    res.status(403).json({ status: false, error });
  }
};

