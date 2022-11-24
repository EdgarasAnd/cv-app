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
  const [userData, setUserData] = useState(
    { firstName: "FirstName", lastName: "LastName", age: "2022-11-12", email: "your@email.com" },
  );
  // Employments
  const [employments, setEmployments] = useState([]
    );
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

  // Add Education
  const handleEducationAdd = (education) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newEducation = { id, ...education };
    setEducations([...educations, newEducation]);
    console.log("add", newEducation);
  };

  // Delete education
  const deleteEducation = (id) => {
    setEducations(educations.filter((education) => education.id !== id));
  };

  // Add Employment
  const handleEmploymentAdd = (theJob) => {
    const id = Math.floor(Math.random() * 1000) + 2;
    const newEmployment = { id, ...theJob };
    setEmployments([...employments, newEmployment]);
    console.log("handleEmploymentAdd", newEmployment, id);
  };

  // Delete employment
  const deleteEmployments = (id) => {
    setEmployments(employments.filter((theJob) => theJob.id !== id));
    console.log("delete employment", id);
  };

  // Update Employment
  const handleEmploymentEdit = (id, updateEmployment) => {
    setEmployments(employments.map((theJob) => theJob.id === id ? updateEmployment : theJob))
  }
  return (
    <>
      <div className="p-5 dark:bg-gradient-to-r from-slate-900 to-slate-700">
        <div className="container">
          <Navigation />
          <ProfileAccordion className="" userData={userData} handleChange={handleChange} />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h3 className="mb-5 pb-5 my-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
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
                <div className="m-4 dark:text-gray-100">
                  No Education records
                </div>
              )}
              <EducationForm
                handleEducationAdd={handleEducationAdd}
                educations={educations}
              />
            </div>
            <div>
              <h3 className="my-4 mb-5 pb-5 text-2xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
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
                <div className="m-4 dark:text-gray-100">No Job records</div>
              )}
              <EmploymentForm
                handleEmploymentAdd={handleEmploymentAdd}
                handleEmploymentEdit={handleEmploymentEdit}
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
