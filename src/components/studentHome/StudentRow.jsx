const StudentRow = ({ student }) => {
  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.roll}</td>
      <td>{student.cgpa}</td>
    </tr>
  );
};

export default StudentRow;
