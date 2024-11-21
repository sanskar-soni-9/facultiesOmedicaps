import { model, Schema, SchemaTypes } from "mongoose";

const usersSchema = new Schema({
  firstName: { type: SchemaTypes.String, required: true },
  lastName: { type: SchemaTypes.String, required: true },
  email: { type: SchemaTypes.String, required: true, unique: true },
  password: { type: SchemaTypes.String, required: true },
});

const Users = model("UsersSchema", usersSchema);

export default Users;
