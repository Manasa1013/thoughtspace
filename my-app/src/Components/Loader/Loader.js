import ClipLoader from "react-spinners/ClipLoader";

import { usePost } from "../../Contexts/PostContext";
import "./Loader.css";

export function Loader() {
  const { isLoading } = usePost();
  const override = {
    margin: "0 auto",
    borderColor: "var(--secondary-background)",
  };
  return (
    <>
      <div className="container">
        <ClipLoader
          color="var(--light-emerald)"
          cssOverride={override}
          size={150}
          aria-label="Loading.."
        />
      </div>
    </>
  );
}
