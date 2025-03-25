import Container from "./components/shared/Container";
import Header from "./components/shared/Header";
import Title from "./components/shared/Title";
import StudentList from "./components/studentHome/StudentList";

const FormAction = () => {
  return (
    <div>
      <header>
        <nav>
          <Header></Header>
        </nav>
      </header>
      <main>
        <Container>
          <Title>Student-Home</Title>
          <StudentList></StudentList>
        </Container>
      </main>
    </div>
  );
};

export default FormAction;
