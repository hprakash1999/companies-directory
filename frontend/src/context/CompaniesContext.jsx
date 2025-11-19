import { createContext, useEffect, useReducer } from "react";
import { fetchCompaniesDirectory } from "../api/company.api";

const CompaniesContext = createContext();

// Initial state
const initialState = {
  companies: [],
  query: "",
};

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case "SET_COMPANIES":
      return { ...state, companies: action.payload };
    case "SET_QUERY":
      return { ...state, query: action.payload };
    default:
      return state;
  }
}

// Context provider
function CompaniesProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch companies on mount
  useEffect(() => {
    fetchCompaniesDirectory().then((data) => {
      dispatch({ type: "SET_COMPANIES", payload: data });
    });
  }, []);

  return (
    <CompaniesContext.Provider value={{ state, dispatch }}>{children}</CompaniesContext.Provider>
  );
}

export { CompaniesContext, CompaniesProvider };
