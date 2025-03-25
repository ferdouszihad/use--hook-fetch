export const fetchRandomJokes = async () => {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  return res.json();
};
export const fetchAllPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

export const messagePromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("👮‍♀️ You are Arrested");
    }, 4000);
  });
};

export const fetchRandomUser = async () => {
  const res = await fetch("https://randomuser.me/api/");
  return res.json();
};
