import { useState } from "react";

export default function EducationForm({ handleEducationAdd }) {
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    handleEducationAdd({ school, degree, date, city, description });

    setCity("");
    setDate("");
    setDegree("");
    setDescription("");
    setSchool("");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <h1>Education form</h1>
        </div>
        <div>
          <label>
            School:
            <input
              name="school"
              type="text"
              value={school}
              onChange={(e) => setSchool(e.target.value)}></input>
          </label>
        </div>
        <div>
          <label>
            Degree:
            <input
              name="degree"
              type="text"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}></input>
          </label>
        </div>
        <div>
          <label>
            Date:
            <input
              name="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}></input>
          </label>
        </div>
        <div>
          <label>
            City:
            <input
              name="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}></input>
          </label>
        </div>
        <div>
          <label>
            Description:
            <input
              name="description"
              type="field"
              value={description}
              onChange={(e) => setDescription(e.target.value)}></input>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
