"use client";
import { useRouter } from "next/navigation";
import { useCallback, useContext, useEffect } from "react";
import FacultiesContext from "../../contexts/facultiesContext";
import { getFaculties } from "../../utils/backend-utils";

const FacultiesLayout = ({ children }) => {
  const { updateFaculties } = useContext(FacultiesContext);
  const router = useRouter();

  const getAndSetFaculties = useCallback(async () => {
    const faculties = await getFaculties();
    updateFaculties(faculties);
  }, [updateFaculties]);

  useEffect(() => {
    const authToken = localStorage.getItem("token");
    if (!authToken) router.push("/login");
  }, [router]);

  useEffect(() => {
    getAndSetFaculties();
  }, [getAndSetFaculties]);

  return children;
};

export default FacultiesLayout;
