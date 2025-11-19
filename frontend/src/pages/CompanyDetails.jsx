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
  const { id } = useParams();
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch company details
  useEffect(() => {
    fetchCompanyDetailsById(id)
      .then((company) => dispatch({ type: "FETCH_SUCCESS", payload: company }))
      .catch(() => dispatch({ type: "FETCH_ERROR", payload: "Failed to load company details." }));
  }, [id]);

  const { company, loading, error } = state;

  // Conditional rendering
  if (loading) return <Loader />;

  if (error || !company) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center sm:px-6 lg:px-8">
        <p className="text-lg text-red-500">{error || "Company not found."}</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-4 text-center sm:px-6 lg:px-8">
      <img
        src={company.logo}
        alt={company.name}
        className="h-24 w-24 rounded-full object-contain sm:h-32 sm:w-32 md:h-40 md:w-40"
      />
      <h1 className="text-2xl font-bold text-gray-700 sm:text-3xl md:text-4xl">{company.name}</h1>
      <p className="max-w-xs text-sm text-gray-600 sm:max-w-md sm:text-base md:max-w-lg md:text-lg lg:max-w-xl">
        This page is currently under construction. We're working hard to bring you the full details
        of <span className="text-primary font-semibold">{company.name}</span> soon. Stay tuned!
      </p>
    </div>
  );
}

export default CompanyDetails;
