import "./App.css";
import { useState } from "react";
import UserDataForm from "./components/UserDataForm";
import EducationList from "./components/EducationList";
import EducationForm from "./components/EducationForm";
import Profile from "./components/Profile";
import EmploymentHistory from "./components/EmploymentHistory";
import EmploymentForm from "./components/EmploymentForm";

function App() {
  //Profile data
  const [userData, setUserData] = useState([]);
  // Employments
  const [employments, setEmployments] = useState([]);
  // Educations
  const [educations, setEducations] = useState([]);

  //Profile data add
  const handleChange = (e) => {
    const name = e.target.name;

    setUserData({
      ...userData,
      [name]: e.target.value,
    });
  };

  // Delete education
  const deleteEducation = (id) => {
    setEducations(educations.filter((education) => education.id !== id));
  };

  // Add Education
  const handleEducationAdd = (education) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newEducation = { id, ...education };
    setEducations([...educations, newEducation]);
    console.log("add", newEducation);
  };

  // Delete employment
  const deleteEmployments = (id) => {
    setEmployments(employments.filter((employment) => employment.id !== id));
    console.log('delet employmnt', id)
  };

  // Add Employment
  const handleEmploymentAdd = (employment) => {
    const id = Math.floor(Math.random() * 1000) + 2;
    const newEmployment = { id, ...employment };
    setEmployments([...employments, newEmployment]);
    console.log("add employment", newEmployment);
  };

  return (
    <>
      <UserDataForm handleChange={handleChange} userData={userData} />
      <Profile userData={userData} />

      <EducationForm
        handleEducationAdd={handleEducationAdd}
        educations={educations}
      />
      {educations.length > 0 ? (
        <EducationList
          deleteEducation={deleteEducation}
          handleEducationAdd={handleEducationAdd}
          educations={educations}
        />
      ) : (
        "No Education records"
      )}

      <EmploymentForm
        handleEmploymentAdd={handleEmploymentAdd}
        employments={employments}
      />
      {employments.length > 0 ? (
        <EmploymentHistory
          deleteEmployments={deleteEmployments}
          handleEmploymentAdd={handleEmploymentAdd}
          employments={employments}
        />
      ) : (
        "No Employment records"
      )}
    </>
  );
}

export default App;
