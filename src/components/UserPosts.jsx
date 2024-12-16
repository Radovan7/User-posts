import { useEffect, useState } from "react";
import PostCard from "../PostCard";
import { Link, useParams } from "react-router-dom";

const UserPosts = () => {
  const [posts, setPosts] = useState([]);
  const [name, setName] = useState("");
  const params = useParams();
  const userId = params.userId; 

  useEffect(() => {
    if (params.userId) {
     
      fetch("https://jsonplaceholder.typicode.com/posts?userId=" + userId, {
        method: "GET",
      })
        .then((response) => {
          console.log("preuzeto", response);
          response
            .json()
            .then((responseJson) => {
              console.log("preuzeto i jsonovano", responseJson);
              setPosts(responseJson);
            })
            .catch((error) => console.log("error", error));
        })
        .catch((error) => {
          console.log("error", error);
        });

    
      fetch("https://jsonplaceholder.typicode.com/users/" + userId, {
        method: "GET",
      })
        .then((res) => {
          console.log(res);
          res
            .json()
            .then((resJson) => {
              console.log(resJson);
              setName(resJson.name);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [params]);

  const handleBack = () => {
    console.log("clicked back");
  };

  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "12px",
        padding: "14px 18px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        position: "relative",
      }}
    >
      <Link to="/">
        <button
          style={{
            position: "absolute",
            top: "15px",
            left: "15px",
            height: "40px",
            width: "150px",
          }}
          onClick={handleBack}
        >
          List all users
        </button>
      </Link>
      <div
        style={{
          fontWeight: "bold",
          fontSize: "24px",
          textAlign: "center",
        }}
      >
        POSTOVI OD KORISNIKA {name}
      </div>
      {posts.map((singlePost) => (
        <PostCard
          postId={singlePost.id}
          title={singlePost.title}
          description={singlePost.body}
        />
      ))}
    </div>
  );
};

export default UserPosts;
