"use client";
import { useParams } from "next/navigation";
import { useContext, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import FacultiesContext from "../../../contexts/facultiesContext";
import { reviewFaculty } from "../../../utils/backend-utils";
import "@smastrom/react-rating/style.css";

const FacultyPage = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const { faculties, updateFaculties } = useContext(FacultiesContext);
  const { id } = useParams();
  const facultyIndex = faculties.findIndex((fac) => fac.empId === +id);
  const faculty = faculties[facultyIndex];

  const handleReview = async () => {
    if (rating === 0 && comment.length === 0) {
      return;
    }
    const res = await reviewFaculty(id, {
      rating,
      comment,
    });
    if (res) {
      faculties[facultyIndex].reviews.push(res);
      updateFaculties(faculties);
      setRating(0);
      setComment("");
    }
  };

  return (
    <div className="w-full flex-1 flex justify-center items-center">
      <main className="container flex flex-col gap-6 rounded-xl bg-light py-5 px-8 text-primary font-medium">
        <div className="flex items-center gap-12">
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
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Rating
            style={{ maxWidth: 120 }}
            value={rating}
            onChange={setRating}
          />
          <div className="flex gap-1 items-center">
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your review here..."
              className="border-2 border-slate-400 rounded-lg py-2 px-3 text-slate-600"
            />
            <div
              className="bg-sky-600 rounded-lg p-2 py-2.5 text-white cursor-pointer"
              onClick={handleReview}
            >
              Submit
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse gap-3">
          {faculty?.reviews.map((review, idx) => {
            return (
              <div key={idx} className="py-3 px-4 rounded-xl bg-blue-100">
                <div className="flex items-start gap-3">
                  <Image
                    src={`/user.svg`}
                    alt={`user icon`}
                    width={30}
                    height={30}
                    className="rounded-xl mt-2"
                  />
                  <div className="flex flex-col">
                    <h3>{`${review.firstName} ${review.lastName}`}</h3>
                    <Rating
                      style={{ maxWidth: 120 }}
                      value={review.rating}
                      readOnly
                    />
                    <div className="text-sm text-slate-600 mt-4">
                      {review.comment}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default FacultyPage;
