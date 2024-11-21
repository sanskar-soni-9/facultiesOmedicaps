import jwt from "jsonwebtoken";
import { getFacultiesData } from "../utils/faculties.utils.js";
import { getUser } from "../utils/users.utils.js";

const handleGetFaculties = async (req, res) => {
  try {
    jwt.verify(req.headers.authorization.split(" ")[1], process.env.JWT_KEY);
    let faculties = await getFacultiesData();
    faculties = await Promise.all(
      faculties.map(async (faculty) => {
        const reviews = await Promise.all(
          faculty.reviews.map(async (review) => {
            const user = await getUser(review.user);
            return {
              firstName: user.firstName,
              lastName: user.lastName,
              rating: review.rating,
              comment: review.comment,
            };
          }),
        );
        const {
          name,
          designation,
          email,
          empId,
          qualification,
          department,
          phoneNo,
          about,
        } = faculty;
        return {
          name,
          designation,
          email,
          empId,
          qualification,
          department,
          phoneNo,
          about,
          reviews,
        };
      }),
    );
    res.json({
      isError: false,
      status: "success",
      body: faculties,
    });
  } catch (err) {
    res.json({
      isError: true,
      status: "error",
      body: { msg: "Error getting faculties." },
    });
  }
};

export { handleGetFaculties };
