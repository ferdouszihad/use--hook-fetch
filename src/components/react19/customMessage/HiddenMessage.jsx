import { Suspense, useState } from "react";
import MessageText from "./MessageText";
import { messagePromise } from "../../../utilities/fetchers";

const HiddenMessage = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [myMessagePromise, setMyMessagePromise] = useState(null);
  console.log(myMessagePromise);

  const download = () => {
    setMyMessagePromise(messagePromise());
    setShowMessage(true);
  };

  if (showMessage) {
    return (
      <Suspense fallback={"⏳ Wait for some second...."}>
        <MessageText promise={myMessagePromise}></MessageText>
      </Suspense>
    );
  } else {
    return (
      <button onClick={download} className="btn btn-primary my-10">
        Show a Message
      </button>
    );
  }
};

export default HiddenMessage;
