import { Schema, SchemaTypes, model } from "mongoose";

const reviewSchema = new Schema({
  user: { type: SchemaTypes.String, required: true },
  rating: { type: SchemaTypes.Number, required: true },
  comment: { type: SchemaTypes.String, required: true },
});

const facsSchema = new Schema({
  name: { type: SchemaTypes.String, required: true },
  designation: { type: SchemaTypes.String, required: true },
  email: { type: SchemaTypes.String, required: false },
  empId: { type: SchemaTypes.Number, required: false },
  qualification: { type: SchemaTypes.String, required: false },
  department: { type: SchemaTypes.String, required: false },
  phoneNo: { type: SchemaTypes.Number, required: false },
  about: { type: SchemaTypes.String, required: false },
  image: { type: SchemaTypes.String, required: false },
  reviews: [reviewSchema],
});

const Faculties = model("FacsShema", facsSchema);

export default Faculties;
