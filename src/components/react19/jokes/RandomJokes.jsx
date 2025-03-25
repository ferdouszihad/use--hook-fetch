import { use } from "react";
// import { fetchRandomJokes } from "../../utilities/fetchers";
// {
//     "categories": [],
//     "created_at": "2020-01-05 13:42:27.496799",
//     "icon_url": "https://api.chucknorris.io/img/avatar/chuck-norris.png",
//     "id": "2958lD2rQ8KY6gBTFLbphQ",
//     "updated_at": "2020-01-05 13:42:27.496799",
//     "url": "https://api.chucknorris.io/jokes/2958lD2rQ8KY6gBTFLbphQ",
//     "value": "Chuck Norris beer-bongs tequila."
// }
// const promise = fetchRandomJokes();
const RandomJokes = ({ promise }) => {
  const jokes = use(promise);
  console.log(jokes);
  return (
    <div className="">
      <div className="p-5 flex items-center gap-2">
        <img src={jokes.icon_url} alt="" />
        <h2 className="text-lg">{jokes.value}</h2>
      </div>
    </div>
  );
};

export default RandomJokes;
