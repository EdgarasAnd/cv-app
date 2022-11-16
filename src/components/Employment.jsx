import React from "react";

export default function Employment({ employment, deleteEmployments }) {
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
          Employment {employment.id}
          <button
            style={{
              color: "red",
              borderRadius: "55px",
              borderWidth: "0px",
              fontSize: "30px",
              cursor: "pointer",
            }}
            onClick={() => deleteEmployments(employment.id)}>
            X{" "}
          </button>
        </h1>
        <p>Job title: {employment.jobTitle} </p>
        <p>Employer: {employment.employer} </p>
        <p>Start Date: {employment.startDate} </p>
        <p>End Date: {employment.endDate} </p>
        <p>Job city: {employment.jobCity} </p>
        <p>Description: {employment.description} </p>
      </div>
    </>
  );
}
