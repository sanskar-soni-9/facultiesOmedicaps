"use client";

import { useContext, useState } from "react";
import FacultiesContext from "../../contexts/facultiesContext";
import Image from "next/image";
import Link from "next/link";

const FacultiesPage = () => {
  const [seachQuery, setSearchQuery] = useState("");
  const { faculties } = useContext(FacultiesContext);

  return (
    <div className="w-full flex-1 flex justify-center">
      <main className="container flex flex-col gap-7 p-3">
        <div className="flex justify-end">
          <input
            type="text"
            className="w-[300px] border-border ring-offset-primary placeholder:text-muted-foreground focus:none flex h-10 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-md border bg-primary px-4 py-2"
            placeholder="search"
            value={seachQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex justify-center gap-3 flex-wrap">
          {faculties
            .filter((faculty) =>
              faculty.name.toLowerCase().includes(seachQuery.toLowerCase()),
            )
            .map((faculty, index) => (
              <Link
                key={index}
                href={`/faculties/${faculty.empId}`}
                className="bg-light flex flex-col gap-2 p-2 text-primary w-[310px]"
              >
                <div>
                  <Image
                    src={`/faculties/${faculty.empId}.jpeg`}
                    alt={`${faculty.name} image`}
                    width={300}
                    height={400}
                  />
                </div>
                <div className="text-wrap flex flex-col gap-0.5 text-center">
                  <h2 className="font-semibold">{faculty.name}</h2>
                  <p className="font-medium text-sm">{faculty.designation}</p>
                  <p className="font-medium text-sm">{faculty.department}</p>
                </div>
              </Link>
            ))}
        </div>
      </main>
    </div>
  );
};

export default FacultiesPage;
