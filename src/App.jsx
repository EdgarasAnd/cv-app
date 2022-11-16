import "./App.css";
import { useState } from "react";
import EducationList from "./components/EducationList";
import EducationForm from "./components/EducationForm";
import EmploymentHistory from "./components/EmploymentHistory";
import EmploymentForm from "./components/EmploymentForm";
import Navigation from "./components/Navigation";
import ProfileAccordion from "./components/ProfileAccordion";

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
    console.log("delet employmnt", id);
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
      <div className="h-screen	 dark:bg-gray-800">
        <div className="container h-screen	 dark:bg-gray-800">
          <Navigation />
          <ProfileAccordion userData={userData} handleChange={handleChange} />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h3 className="my-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                  Your Education
                </span>{" "}
              </h3>

              {educations.length > 0 ? (
                <EducationList
                  deleteEducation={deleteEducation}
                  handleEducationAdd={handleEducationAdd}
                  educations={educations}
                />
              ) : (
                <div className="m-4">No Education records</div>
              )}
              <EducationForm
                handleEducationAdd={handleEducationAdd}
                educations={educations}
              />
            </div>
            <div>
            <h3 className="my-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                  Your Job History
                </span>{" "}
              </h3>
              {employments.length > 0 ? (
                <EmploymentHistory
                  deleteEmployments={deleteEmployments}
                  handleEmploymentAdd={handleEmploymentAdd}
                  employments={employments}
                />
              ) : (
                <div className="m-4">No Job records</div>
              )}
              <EmploymentForm
                handleEmploymentAdd={handleEmploymentAdd}
                employments={employments}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
