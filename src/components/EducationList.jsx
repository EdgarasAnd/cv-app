import { Timeline } from "flowbite-react";
import Education from "./Education";

function EducationList({ educations, deleteEducation }) {
  return (
    <>
      {educations.map((education) => {
        return (
          <Timeline key={education.id}>
            <Education
              deleteEducation={deleteEducation}
              key={education.id}
              education={education}
            />
          </Timeline>
        );
      })}
    </>
  );
}

export default EducationList;
