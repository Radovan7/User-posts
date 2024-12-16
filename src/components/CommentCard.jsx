import React from "react";

export const CommentCard = (props) => {
  const title = props.title;
  const body = props.body;
  const email = props.email;

  return (
    <div
      style={{
        padding: "8px",
        border: "1px dotted gray",
        borderRadius: "12px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          borderBottom: "1px dotted gray",
          padding: "8px",
        }}
      >
        <div style={{ fontWeight: "bold" }}>{title}</div>
        <div style={{ fontStyle: "italic" }}>{email}</div>
      </div>
      <div style={{ padding: "8px" }}>{body}</div>
    </div>
  );
};
