import Employment from "./Employment";

import { Timeline } from "flowbite-react";

function EmploymentHistory({ employments, deleteEmployments }) {
  return (
    <>
      {employments.map((employment) => {
        return (
          <Timeline>
          
            <Employment
              deleteEmployments={deleteEmployments}
              key={employment.id}
              employment={employment}
            >              
            </Employment>
            
          </Timeline>
        );
      })}
    </>
  );
}

export default EmploymentHistory;
