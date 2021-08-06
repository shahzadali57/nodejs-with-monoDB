const mongoose = require("mongoose");
const postSchema = mongoose.Schema(
    {
        title: String,
        description: String    
    }
)

const postModel = mongoose.model("user", postSchema);
module.exports = postModel;