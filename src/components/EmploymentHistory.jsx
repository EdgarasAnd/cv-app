import TheJob from "./TheJob";

import { Timeline } from "flowbite-react";

function EmploymentHistory({ employments, deleteEmployments }) {

  return (
    <>
      {employments.map((theJob) => {
        return (
          <Timeline key={theJob.id}>
          
            <TheJob
              deleteEmployments={deleteEmployments}
              
              theJob={theJob} 
            >              
            </TheJob>
            
          </Timeline>
        );
      })}
    </>
  );
}

export default EmploymentHistory;
