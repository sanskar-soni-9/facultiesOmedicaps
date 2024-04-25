import Faculties from "../models/faculties.model.js";

const getFaculties = async (_, res) => {
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
    },
  );
  res.json({ isError: false, status: "success", body: data });
};

export { getFaculties };
