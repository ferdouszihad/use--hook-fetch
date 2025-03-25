import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex py-10 justify-center items-center">
      <ClipLoader
        color="#422AD5"
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
