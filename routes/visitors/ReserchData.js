const clinical_studies = require("../../models/clinical_studies");


module.exports = async (req, res) => {
    const searchQuery = req.query.q;      
  try {
    // Find movies that match search query
    const clinicalStudie = await clinical_studie.find({
      $text: { $search: searchQuery },
    });
    res.json(clinicalStudie);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
    };