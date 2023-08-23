module.exports = {
    multipleMongooseToObject: function (mongooseArrays) {
      const arrayHasChanged = mongooseArrays.map(mongoose => mongoose.toObject());
      return arrayHasChanged;
    },
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
}