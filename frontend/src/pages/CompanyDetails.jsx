import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { fetchCompanyDetailsById } from "../api/company.api";
import Loader from "../components/ui/Loader";

// Initial state
const initialState = {
  company: null,
  loading: true,
  error: null,
};

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { company: action.payload, loading: false, error: null };
    case "FETCH_ERROR":
      return { company: null, loading: false, error: action.payload };
    default:
      return state;
  }
}

function CompanyDetails() {
  const { id } = useParams(); // Get company ID
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch company details
  useEffect(() => {
    fetchCompanyDetailsById(id)
      .then((company) => dispatch({ type: "FETCH_SUCCESS", payload: company }))
      .catch(() => dispatch({ type: "FETCH_ERROR", payload: "Failed to load company details." }));
  }, [id]);

  const { company, loading, error } = state;

  // Conditional rendering
  if (loading) {
    return <Loader />;
  }

  if (error || !company) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
        <p className="text-lg text-red-500">{error || "Company not found."}</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 p-6 text-center">
      <img
        src={company.logo}
        alt={company.name}
        className="h-24 w-24 rounded-full object-contain"
      />
      <h1 className="text-3xl font-bold text-gray-700">{company.name}</h1>
      <p className="max-w-xl text-gray-600">
        This page is currently under construction. We're working hard to bring you the full details
        of <span className="text-primary font-semibold">{company.name}</span> soon. Stay tuned!
      </p>
    </div>
  );
}

export default CompanyDetails;
