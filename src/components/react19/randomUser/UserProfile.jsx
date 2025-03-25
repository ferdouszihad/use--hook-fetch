import { use } from "react";

// {
//     "gender": "male",
//     "name": {
//         "title": "Mr",
//         "first": "Josef",
//         "last": "Collins"
//     },
//     "location": {
//         "street": {
//             "number": 8060,
//             "name": "Springfield Road"
//         },
//         "city": "Leicester",
//         "state": "Tyne and Wear",
//         "country": "United Kingdom",
//         "postcode": "C0Y 3FF",
//         "coordinates": {
//             "latitude": "-9.9699",
//             "longitude": "-176.8803"
//         },
//         "timezone": {
//             "offset": "-5:00",
//             "description": "Eastern Time (US & Canada), Bogota, Lima"
//         }
//     },
//     "email": "josef.collins@example.com",
//     "login": {
//         "uuid": "823cc7e3-9bad-449c-a6f4-80ec4cc7e691",
//         "username": "whitefish587",
//         "password": "gogo",
//         "salt": "MTOZpJWA",
//         "md5": "2d45ad9b37569ee175f633e3b436b08f",
//         "sha1": "64558822a52edfbd73052026157c4d9bfcdc99e0",
//         "sha256": "84e24b9bbae5090999996fbf17ad62139b821c84675c7a691ee2ecf02cbc14f0"
//     },
//     "dob": {
//         "date": "1948-01-25T20:16:00.862Z",
//         "age": 77
//     },
//     "registered": {
//         "date": "2020-02-20T03:36:41.139Z",
//         "age": 5
//     },
//     "phone": "025 7862 2638",
//     "cell": "07483 690221",
//     "id": {
//         "name": "NINO",
//         "value": "NW 16 46 44 I"
//     },
//     "picture": {
//         "large": "https://randomuser.me/api/portraits/men/77.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/men/77.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/men/77.jpg"
//     },
//     "nat": "GB"
// }
const UserProfile = ({ promise }) => {
  const user = use(promise).results[0];

  console.log(user);

  return (
    <div>
      <div className="card bg-base-100 max-w-96  shadow-sm">
        <figure className="px-10 pt-10">
          <img src={user?.picture?.large} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">
            {user?.name.title} {user?.name.first} {user?.name.last}
          </h2>
          <div className="badge badge-secondary">{user?.gender}</div>
          <p>
            {user?.location.city} ,{user?.location.state} ,
            {user?.location.country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
