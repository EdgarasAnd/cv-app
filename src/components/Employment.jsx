import { Button, Timeline } from "flowbite-react";

import React from "react";

export default function Employment({ employment, deleteEmployments }) {
  return (
    <>
      
      <Timeline.Item className="mb-0 py-2">
        <Timeline.Point />        
          <div className="flex justify-between">
            <div>
              <svg
                className="w-10 h-10 dark:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth="1"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
              </svg>
            </div>
            <div>
              <Button
                onClick={() => deleteEmployments(employment.id)}                
                className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm  text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                X
              </Button>
            </div>
          </div>
       
        <Timeline.Content>
          <Timeline.Time>Start {employment.startDate} End {employment.endDate}</Timeline.Time>
          <Timeline.Title>
            I worked with <strong>{employment.employer}</strong> as{" "}
            {employment.jobTitle} in {employment.city} city.
          </Timeline.Title>
          <Timeline.Body>{employment.description}</Timeline.Body>
          <Button color="gray">Edit</Button>
        </Timeline.Content>
      </Timeline.Item>
    </>
  );
}
