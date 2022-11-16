import Education from "./Education";

function EducationList({ educations, deleteEducation }) {
  return (
    <>
      {educations.map((education) => {
        return (
          <Education
            deleteEducation={deleteEducation}
            key={education.id}
            education={education}
          />
        );
      })}
    </>
  );
}

export default EducationList;
