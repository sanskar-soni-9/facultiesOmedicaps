import { Schema, SchemaTypes, model } from "mongoose";

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
});

const Faculties = model("FacsShema", facsSchema);

export default Faculties;
