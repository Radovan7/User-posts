import { Link } from "react-router-dom";

const UserCard = (props) => {
  const username = props.username;
  const name = props.name;
  const email = props.email;
  const phone = props.phone;
  const company = props.company.name;
  const address =
    props.address.city +
    ", " +
    props.address.street +
    ", " +
    props.address.suite;
  const website = props.website;
  const userId = props.userId;

  const handleSeePostsClick = () => {
    console.log("handle see posts");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        border: "1px solid black",
        borderRadius: "12px",
        padding: "14px 18px",
        position: "relative",
      }}
    >
      <div>
        <strong>Username: </strong>
        <span>{username}</span>
      </div>
      <hr />
      <div>
        <strong>Name: </strong>
        <span>{name}</span>
      </div>
      <hr />
      <div>
        <strong>Email: </strong>
        <span>{email}</span>
      </div>
      <hr />
      <div>
        <strong>Phone: </strong>
        <span>{phone}</span>
      </div>
      <hr />
      <div>
        <strong>Company: </strong>
        <span>{company}</span>
      </div>
      <hr />
      <div>
        <strong>Address: </strong>
        <span>{address}</span>
      </div>
      <hr />
      <div>
        <strong>Website: </strong>
        <span>{website}</span>
      </div>
      <hr />
      <Link to={"/" + userId}>
        <button
          onClick={handleSeePostsClick}
          style={{
            position: "absolute",
            bottom: "15px",
            right: "15px",
            height: "60px",
            width: "300px",
            fontSize: "24px",
          }}
        >
          See posts
        </button>
      </Link>
    </div>
  );
};

export default UserCard;
