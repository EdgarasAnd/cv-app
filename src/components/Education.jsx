import { Button, Timeline } from "flowbite-react";
import React from "react";

export default function Education({ education, deleteEducation }) {
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
            <button
              onClick={() => deleteEducation(education.id)}
              type="button"
              class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-small rounded-full text-sm px-2 py-0 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
              x
            </button>
          </div>
        </div>

        <Timeline.Content>
          <Timeline.Time>{education.date}</Timeline.Time>
          <Timeline.Title>
            I finished <strong>{education.school}</strong> with{" "}
            {education.degree} degree in {education.city} city.
          </Timeline.Title>
          <Timeline.Body>{education.description}</Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </>
  );
}
