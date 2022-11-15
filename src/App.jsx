import "./App.css";
import { useState } from "react";
import UserDataForm from "./components/UserDataForm";
import EducationTimeLine from "./components/EducationTimeLine";

function App() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    image: "",
  });

  const [userEducation, setUserEducation] = useState([]);

  const handleEducationAdd = (e) => {
    const name = e.target.name;

    setUserEducation({
      ...userEducation,
      [name]: e.target.value,
    });
  };

  const handleChange = (e) => {
    const name = e.target.name;

    setUserData({
      ...userData,
      [name]: e.target.value,
    });
  };
  return (
    <>
      <UserDataForm handleChange={handleChange} userData={userData} />
      <h1>Profile</h1>
      <p>First name: {userData.firstName} </p>
      <p>Last name: {userData.lastName} </p>
      <p>Age: {userData.age} </p>
      <p>Email: {userData.email} </p>
      <img
        style={{ maxWidth: "100px" }}
        src={userData.image}
        alt={userData.firstName}></img>
      <EducationTimeLine handleEducationAdd={handleEducationAdd} userEducation={userEducation}/>
      <h1>Education</h1>
      <p>School: {userEducation.school} </p>
      <p>Degree: {userEducation.degree} </p>
      <p>Date: {userEducation.date} </p>
      <p>City: {userEducation.city} </p>
      <p>Description: {userEducation.description} </p>
    </>
  );
}

export default App;
