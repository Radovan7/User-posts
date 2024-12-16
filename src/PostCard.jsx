import { Link } from "react-router-dom";
import { CommentCard } from "./components/CommentCard";

const PostCard = (props) => {
  const title = props.title;
  const description = props.description;
  const postId = props.postId;
  // to="/nekaPutanja" => localhost:5173/nekaPutanja
  // to="nekaPutanja" => trenutnaPutanja + "/" + nekaPutanja

  console.log(postId);

  return (
    <div
      style={{
        border: "1px solid red",
        padding: "14px 18px",
        borderRadius: "6px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ borderBottom: "1px solid red", fontSize: "18px" }}>
        {title}
      </div>
      <div style={{ fontStyle: "italic", fontSize: "12px", paddingTop: "8px" }}>
        {description}
      </div>
      <Link
        to={String(postId)}
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
          marginTop: "20px",
          alignSelf: "flex-end",
          cursor: "pointer",
        }}
      >
        Vidi komentare
      </Link>
      {/* <div style={{ paddingLeft: "16px", paddingTop: "12px" }}>
        <CommentCard />
      </div> */}
    </div>
  );
};
export default PostCard;
