const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clinical_studiesSchema = new Schema(
  {
    required_header: {
      type: String,
      required: true,
    },
    id_info: {
      type: String,
      required: true,
    },

    brief_title: {
      type: String,
      required: true,
    },
    official_title: {
      type: String,
      required: true,
    },
    sponsors: {
      type: String,
      required: true,
    },
    oversight_info: {
      type: String,
      required: true,
    },
    brief_summary: {
      type: String,
      required: true,
    },
    start_date: {
      type: String,
      required: true,
    },
    completion_date: {
      type: String,
      required: true,
    },
    primary_outcome: {
      type: String,
      required: true,
    },
    arm_group: {
      type: String,
      required: true,
    },
    reference: {
      type: String,
      required: true,
    },
    patient_data: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("clinical_studies", clinical_studiesSchema);
