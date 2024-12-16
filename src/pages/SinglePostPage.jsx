import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CommentCard } from "../components/CommentCard";

export const SinglePostPage = () => {
  const [singlePost, setSinglePost] = useState({});
  const [comments, setComments] = useState([]);

  const title = singlePost.title;
  const body = singlePost.body;

  const params = useParams();
  const postId = params.postId;
  const userId = params.userId;

  useEffect(() => {
    if (postId) {
      fetch("https://jsonplaceholder.typicode.com/posts/" + postId, {
        method: "GET",
      })
        .then((response) => {
          console.log("preuzeto", response);
          response
            .json()
            .then((responseJson) => {
              console.log("preuzeto i jsonovano", responseJson);
              setSinglePost(responseJson);
            })
            .catch((error) => console.log("error", error));
        })
        .catch((error) => {
          console.log("error", error);
        });
      fetch(
        "https://jsonplaceholder.typicode.com/posts/" + postId + "/comments",
        {
          method: "GET",
        }
      )
        .then((response) => {
          console.log("preuzeto", response);
          response
            .json()
            .then((responseJson) => {
              console.log("preuzeto i jsonovano", responseJson);
              setComments(responseJson);
            })
            .catch((error) => console.log("error", error));
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  }, [params]);

  return (
    <div
      style={{
        border: "1px solid red",
        borderRadius: "12px",
        padding: "8px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <Link
        to={"/" + userId}
        style={{
          backgroundColor: "white",
          border: "1px solid red",
          borderRadius: "24px",
          textDecoration: "none",
          fontWeight: "bold",
          color: "red",
          textAlign: "center",
          height: "20px",
          width: "170px",
          cursor: "pointer",
        }}
      >
        Go back
      </Link>
      <div>
        <div
          style={{
            borderBottom: "1px solid red",
            fontSize: "20px",
            fontWeight: "bold",
            padding: "12px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            padding: "12px",
          }}
        >
          {body}
        </div>
      </div>
      <div
        style={{
          padding: "18px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {comments.map((singleComment) => (
          <CommentCard
            title={singleComment.name}
            body={singleComment.body}
            email={singleComment.email}
          />
        ))}
      </div>
    </div>
  );
};
