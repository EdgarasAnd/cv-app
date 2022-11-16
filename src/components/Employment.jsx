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
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
            </svg>
          </div>
          <div>
            <button
              onClick={() => deleteEmployments(employment.id)}
              type="button"
              class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-small rounded-full text-sm px-2 py-0 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
              x
            </button>
          </div>
        </div>

        <Timeline.Content>
          <Timeline.Time>
            <strong>Start date:</strong> {employment.startDate}<br></br> <strong>End date:</strong> {employment.endDate}
          </Timeline.Time>
          <Timeline.Title>
            I worked with <strong>{employment.employer}</strong> as{" "}
            <strong>{employment.jobTitle}</strong> in <strong>{employment.jobCity}</strong> city.
          </Timeline.Title>
          <Timeline.Body>{employment.description}</Timeline.Body>
          <Button color="gray">Edit</Button>
        </Timeline.Content>
      </Timeline.Item>
    </>
  );
}
