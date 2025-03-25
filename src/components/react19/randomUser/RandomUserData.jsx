import { Suspense, useState } from "react";
import { fetchRandomUser } from "../../../utilities/fetchers";
import Loader from "../../shared/Loader";
import UserProfile from "./UserProfile";

const RandomUserData = () => {
  const [randomUserPromise, setRandomUserPromise] = useState(null);
  const [count, setCount] = useState(1);
  const handleFetch = () => {
    setRandomUserPromise(fetchRandomUser());
  };
  return (
    <div>
      {randomUserPromise && (
        <Suspense fallback={<Loader></Loader>}>
          <UserProfile promise={randomUserPromise}></UserProfile>
        </Suspense>
      )}

      <button className="btn btn-primary my-5" onClick={handleFetch}>
        Get User
      </button>
      <button
        className="btn btn-primary my-5 mx-5"
        onClick={() => setCount(count + 1)}
      >
        Count {count}
      </button>
    </div>
  );
};

export default RandomUserData;
