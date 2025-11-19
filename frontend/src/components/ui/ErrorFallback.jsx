import Button from "./Button";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <section className="bg-background text-text mx-auto max-w-md p-6 text-center">
      <h2 className="text-primary text-lg font-semibold">Something went wrong.</h2>

      <p className="mt-2 text-sm text-gray-600">{error?.message || "Unexpected error occurred."}</p>

      <div className="mt-4 flex justify-center">
        <Button onClick={resetErrorBoundary}>Try Again</Button>
      </div>
    </section>
  );
}

export default ErrorFallback;
