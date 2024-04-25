"use client";
import { useParams } from "next/navigation";
import { useContext, useRef } from "react";
import FacultiesContext from "../../../contexts/facultiesContext";
import Image from "next/image";

const FacultyPage = () => {
  const { faculties } = useContext(FacultiesContext);
  const { id } = useParams();
  const facultyIndex = faculties.findIndex((fac) => fac.empId === +id);
  const faculty = faculties[facultyIndex];

  return (
    <div className="w-full flex-1 flex justify-center items-center">
      <main className="container flex items-center gap-16 rounded-xl bg-light py-5 px-8 text-primary font-medium">
        <Image
          src={`/faculties/${id}.jpeg`}
          alt={`${faculty?.name} image`}
          width={300}
          height={300}
          className="rounded-xl"
        />
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold">{faculty?.name}</h1>
          <p>{faculty?.designation}</p>
          <p className="font-semibold">{faculty?.department}</p>
          <p className="mt-8">
            <span className="font-bold">Qualification: </span>
            {faculty?.qualification}
          </p>
          <p>
            <span className="font-bold">Email: </span>
            {faculty?.email}
          </p>
          <p>
            <span className="font-bold">Contact No.: </span>
            {faculty?.phoneNo}
          </p>
          <p className="mt-8">{faculty?.about}</p>
        </div>
      </main>
    </div>
  );
};

export default FacultyPage;
