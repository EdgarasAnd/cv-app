import { useState } from "react";

export default function EmploymentForm({ handleEmploymentAdd }) {
  const [jobTitle, setJobTitle] = useState("");
  const [employer, setEmployer] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [jobCity, setJobCity] = useState("");
  const [description, setDescription] = useState("");

  const onSubmitEmpl = (event) => {
    event.preventDefault();

    handleEmploymentAdd({ jobTitle, employer, startDate, endDate, jobCity, description });

    setJobCity("");
    setStartDate("");
    setEmployer("");
    setEndDate("");
    setDescription("");
    setJobTitle("");
  };

  return (
    <>
      <form onSubmit={onSubmitEmpl}>
        <div>
          <h1>Employment form</h1>
        </div>
        <div>
          <label>
            Job Title:
            <input
              name="jobTitle"
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}></input>
          </label>
        </div>
        <div>
          <label>
            Employer:
            <input
              name="employer"
              type="text"
              value={employer}
              onChange={(e) => setEmployer(e.target.value)}></input>
          </label>
        </div>
        <div>
          <label>
            Start Date:
            <input
              name="startDate"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}></input>
          </label>
        </div>
        <div>
          <label>
            End Date:
            <input
              name="endDate"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}></input>
          </label>
        </div>
        <div>
          <label>
            City:
            <input
              name="jobCity"
              type="text"
              value={jobCity}
              onChange={(e) => setJobCity(e.target.value)}></input>
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
