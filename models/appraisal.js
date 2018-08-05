const mongoose = require('mongoose');
const { Schema } = mongoose

const appraisalSchema = new Schema ({
    appraisal: {
        type: String,
        required: true
    }
})

// Create model class - need to make use of mongoose
const ModelClass = mongoose.model('appraisal', appraisalSchema)

// export the Model
module.exports = ModelClass
