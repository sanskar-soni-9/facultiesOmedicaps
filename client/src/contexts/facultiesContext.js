import { createContext } from "react";

const value = { faculties: [], updateFaculties: () => {} };
const FacultiesContext = createContext(value);

export default FacultiesContext;
