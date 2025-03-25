import { Suspense, useState } from "react";
import RandomJokes from "./components/react19/jokes/RandomJokes";
import Container from "./components/shared/Container";
import Header from "./components/shared/Header";
import Loader from "./components/shared/Loader";
import Title from "./components/shared/Title";
import { fetchRandomJokes } from "./utilities/fetchers";
import Note from "./components/shared/Note";
import Posts from "./components/react19/posts/Posts";
import HiddenMessage from "./components/react19/customMessage/HiddenMessage";
import RandomUserData from "./components/react19/randomUser/RandomUserData";
// import { fetchRandomJokes } from "./utilities/fetchers";

function App() {
  const [refetch, setRefetch] = useState(false);
  return (
    <>
      <header>
        <nav>
          <Header></Header>
        </nav>
      </header>
      <main>
        <Container>
          <Title>fetch a Random User Data on clicking a Button</Title>
          <RandomUserData></RandomUserData>
        </Container>
        {/* fetch some custom promise using useHook  */}
        <Container>
          <Title>fetch some custom promise using use()</Title>
          <HiddenMessage></HiddenMessage>
        </Container>
        {/* fetch a random jokes  */}
        <Container>
          <Title>
            Fetch a random jokes using Use() Hook . will render data on any
            state changes of the APP
          </Title>
          <Suspense fallback={<Loader></Loader>}>
            <RandomJokes promise={fetchRandomJokes()}></RandomJokes>
            <button
              onClick={() => setRefetch(!refetch)}
              className="btn btn-sm btn-primary"
            >
              Fetch-Another
            </button>
          </Suspense>

          <Note>
            The `use()` hook is a new React feature for handling asynchronous
            data fetching. It allows components to suspend rendering until a
            promise resolves, simplifying the process of working with async
            data. In this example, `use()` is used internally by the
            `RandomJokes` component to fetch and display random jokes. When the
            `Fetch-Another` button is clicked, the `refetch` state changes,
            triggering a re-render. However, since the `fetchRandomJokes()`
            function is called directly in the `promise` prop, it fetches new
            data on every render. To optimize, you could memoize the promise or
            use a dependency array to control when the data is refetched.
            <br />
            If any state change of the parent function , data will be re-render.
            if you want to controll re-render process then you can use eseEffect
            Hook.
          </Note>
        </Container>
        {/* fetch posts */}
        <Container>
          <Title>
            Fetch Some Post from JSON Place Holder for Once. It wilol not load
            data on change of any state{" "}
          </Title>
          <Suspense fallback={<Loader></Loader>}>
            <Posts></Posts>
          </Suspense>
          <Note>
            The `use()` hook is a powerful feature in React for handling
            asynchronous data fetching. When you want to load data only once,
            you can use `use()` in combination with a promise that resolves the
            data. This ensures that the data is fetched only during the initial
            render and not on subsequent renders. In this example, the `Posts`
            component uses the `use()` hook to fetch posts from an API. Since
            the promise is created outside of the component and does not depend
            on any state or props, it is resolved only once. This approach is
            efficient for scenarios where the data does not need to be refetched
            or updated dynamically.
            <br />
            As we load Data outside of the component , Data will not re-render
            on any state change
          </Note>
        </Container>
      </main>
    </>
  );
}

export default App;
