module.exports = mongoose => {
    
    const Schema = new mongoose.Schema ({
        username : String,
        uniword : String,
        password : String,
        cookie : String
    } , {timestamps: true})

    return mongoose.model("Client" , Schema);
}