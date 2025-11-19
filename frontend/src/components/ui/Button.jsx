import clsx from "clsx";

function Button({ children, variant = "primary", className = "", ...props }) {
  // Base classes
  const base =
    "inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md transition focus:outline-none";

  // Variants classes
  const variants = {
    primary: "bg-[#696FC7] text-white hover:bg-[#585EB5]",
    outline: "border border-[#696FC7] text-[#696FC7] bg-white hover:bg-[#f5f5ff]",
    subtle: "bg-gray-100 text-gray-700 hover:bg-gray-200",
  };

  return (
    <button className={clsx(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}

export default Button;
