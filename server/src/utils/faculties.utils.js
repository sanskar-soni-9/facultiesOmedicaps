import Faculties from "../models/faculties.model.js";

const getFacultiesData = async () => {
  try {
    const data = await Faculties.find(
      {},
      {
        name: true,
        about: true,
        designation: true,
        empId: true,
        qualification: true,
        image: true,
        email: true,
        phoneNo: true,
        department: true,
        reviews: true,
      },
    );
    return data;
  } catch (error) {
    throw error;
  }
};

const addFacultyReview = async (facId, review) => {
  try {
    const res = await Faculties.findOneAndUpdate(
      { empId: facId },
      { $push: { reviews: review } },
      { upsert: true },
    );
    return res;
  } catch (error) {
    throw error;
  }
};

export { getFacultiesData, addFacultyReview };
