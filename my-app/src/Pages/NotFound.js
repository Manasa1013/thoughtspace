import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <>
      <section className="flex flex-col justify-center w-full h-full gap-4">
        <h1 className="text-3xl font-bold text-teal-700">
          No Page Found with the route
        </h1>
        <div className="flex flex-col items-center">
          <Link to="/">Home</Link>
        </div>
      </section>
    </>
  );
}
