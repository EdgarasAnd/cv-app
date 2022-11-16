import React from "react";

export default function Profile({ userData }) {
  return (
    <>
      <h1>Profile</h1>
      <p>First name: {userData.firstName} </p>
      <p>Last name: {userData.lastName} </p>
      <p>Age: {userData.age} </p>
      <p>Email: {userData.email} </p>
      <img
        style={{ maxWidth: "100px" }}
        src={userData.image}
        alt={userData.firstName}></img>
    </>
  );
}
