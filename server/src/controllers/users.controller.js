import jwt from "jsonwebtoken";
import { addFacultyReview } from "../utils/faculties.utils.js";
import { getUser } from "../utils/users.utils.js";

const handleReview = async (req, res) => {
  try {
    const userMail = jwt.verify(
      req.headers.authorization.split(" ")[1],
      process.env.JWT_KEY,
    );
    const user = await getUser(userMail);
    await addFacultyReview(req.params.id, {
      user: user.email,
      rating: req.body.rating,
      comment: req.body.comment,
    });
    res.json({
      isError: false,
      status: "success",
      body: {
        firstName: user.firstName,
        lastName: user.lastName,
        rating: req.body.rating,
        comment: req.body.comment,
      },
    });
  } catch (error) {
    res.json({
      isError: true,
      status: "error",
      body: { msg: "Error occured while adding review." },
    });
  }
};

export { handleReview };
