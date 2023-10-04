module.exports = mongoose => {
    
    const Schema = new mongoose.Schema ({
        username : String,
        uniword : String,
        cookieId : String,
        password : String
    } , {timestamps: true})

    return mongoose.model("Admin" , Schema);
}