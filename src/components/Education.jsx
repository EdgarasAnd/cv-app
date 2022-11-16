import React from "react";

export default function Education({ education, deleteEducation }) {
  return (
    <>
      <div
        style={{
          borderRadius: "5px",
          borderWidth: "1px",
          borderStyle: "solid",
          margin: "1em",
          padding: "1em",
        }}>
        <h1>
          Education {education.id}
          <button
            style={{
              color: "red",
              borderRadius: "55px",
              borderWidth: "0px",
              fontSize: "30px",
              cursor: "pointer",
            }}
            onClick={() => deleteEducation(education.id)}>
            X{" "}
          </button>
        </h1>

        <p>School: {education.school} </p>
        <p>Degree: {education.degree} </p>
        <p>Date: {education.date} </p>
        <p>City: {education.city} </p>
        <p>Description: {education.description} </p>
      </div>
    </>
  );
}
