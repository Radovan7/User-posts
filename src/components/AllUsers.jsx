import { useEffect, useState } from "react";
import UserCard from "./UserCard";

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);

  console.log(allUsers);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    })
      .then((res) => {
        console.log(res);
        res
          .json()
          .then((resJson) => {
            console.log(resJson);
            setAllUsers(resJson);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        position: "relative",
      }}
    >
      {allUsers.map((singleUser) => (
        <UserCard
          username={singleUser.username}
          name={singleUser.name}
          email={singleUser.email}
          phone={singleUser.phone}
          address={singleUser.address}
          company={singleUser.company}
          website={singleUser.website}
          userId={singleUser.id}
        />
      ))}
    </div>
  );
};

export default AllUsers;
