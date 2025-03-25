import { useFormStatus } from "react-dom";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  //   console.log(data);
  return (
    <input
      type="submit"
      className="btn btn-primary "
      disabled={pending}
      value={`${pending ? "adding" : "Add Student"}`}
    />
  );
};

export default SubmitBtn;
