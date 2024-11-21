import { addUser, validateUser } from "../utils/users.utils.js";
import jwt from "jsonwebtoken";

const registerUser = async ({ body }, res) => {
  try {
    if (!body.firstName || !body.email || !body.password)
      return res.status(500).json({
        err: true,
        msg: "Required fields are not provided.",
      });

    if (!body.email.match("^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$"))
      return res.status(500).json({
        err: true,
        msg: "Email is not valid.",
      });

    const { firstName, lastName = "", email, password } = body;
    const user = await addUser({ firstName, lastName, email, password });
    if (user)
      return res.json({
        isError: false,
        msg: "User added successfully.",
        status: "ok",
        body: { token: jwt.sign(user.email, process.env.JWT_KEY) },
      });
    throw new Error("Error occured while registering user.");
  } catch (err) {
    console.error(err);
    res.json({
      isError: true,
      msg: err,
      status: "error",
    });
  }
};

const loginUser = async ({ body }, res) => {
  try {
    if (!body.password || !body.email)
      return res.status(500).json({
        err: true,
        msg: "Required fields are not provided.",
      });

    if (!body.email.match("^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$"))
      return res.status(500).json({
        err: true,
        msg: "Email is not valid.",
      });

    const { email, password } = body;
    const user = await validateUser({ email, password });
    if (user)
      return res.json({
        isError: false,
        msg: "User logged in successfully.",
        status: "ok",
        body: { token: jwt.sign(user.email, process.env.JWT_KEY) },
      });
    throw new Error("Error occured while user login.");
  } catch (err) {
    console.error(err);
    res.json({
      isError: true,
      msg: err,
      status: "error",
    });
  }
};

export { registerUser, loginUser };
