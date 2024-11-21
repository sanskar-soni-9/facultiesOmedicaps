import Users from "../models/users.model.js";
import { hash, compare } from "bcrypt";

const addUser = async (user) => {
  try {
    const isUserExists = await getUser(user.email);
    if (!!isUserExists) return false;
    const hashedPass = await hash(user.password, 9);
    const res = await Users.create({ ...user, password: hashedPass });
    return res;
  } catch (err) {
    console.error(err);
    return false;
  }
};

const getUser = async (email) => {
  try {
    const user = await Users.findOne({ email });
    return user;
  } catch (err) {
    console.error(err);
    return false;
  }
};

const validateUser = async (userCreds) => {
  try {
    const user = await Users.findOne({
      email: userCreds.email,
    });
    if (!user || !(await compare(userCreds.password, user.password)))
      return false;
    return user;
  } catch (err) {
    console.error(err);
    return false;
  }
};

export { addUser, getUser, validateUser };
