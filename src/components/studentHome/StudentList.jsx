import { useState } from "react";
import StudentRow from "./StudentRow";

const StudentList = () => {
  const [students, setStudent] = useState(
    JSON.parse(localStorage.getItem("students")) || []
  );

  const addStudent = (student) => {
    localStorage.setItem("students", JSON.stringify([student, ...students]));
    setStudent([student, ...students]);
  };

  const handleNewStudent = (formData) => {
    const newStudent = {
      name: formData.get("name"),
      roll: formData.get("roll"),
      cgpa: formData.get("cgpa"),
    };
    addStudent(newStudent);
  };

  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 p-5 my-5 w-11/12 mx-auto">
      <h2 className="text-lg font-bold">Add New Student</h2>
      <form action={handleNewStudent} className="flex gap-5 items-baseline">
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Student name?</legend>
          <input
            name="name"
            type="text"
            className="input"
            placeholder="Ex.  Ferdous Zihad"
            required
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Student Rol?</legend>
          <input
            name="roll"
            type="number"
            className="input"
            placeholder="Ex.  19"
            required
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Student CGPA?</legend>
          <input
            name="cgpa"
            type="text"
            className="input"
            placeholder="Ex.  3.45"
            required
          />
        </fieldset>
        <input type="submit" className="btn btn-primary " value="Add Student" />
      </form>
      <table className="table border">
        <thead>
          <tr>
            <th>ROll</th>
            <th>Name</th>
            <th>GPA</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <StudentRow key={student.roll} student={student}></StudentRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
