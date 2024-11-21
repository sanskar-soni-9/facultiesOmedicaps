"use client";
import FacultiesContext from "../contexts/facultiesContext";
import { useCallback, useState } from "react";

const ContextWrapper = ({ children }) => {
  const [faculties, setFaculties] = useState([]);
  const updateFaculties = useCallback((faculties) => {
    setFaculties([...faculties]);
  }, []);

  const value = { faculties, updateFaculties };

  return (
    <FacultiesContext.Provider value={value}>
      {children}
    </FacultiesContext.Provider>
  );
};

export default ContextWrapper;
