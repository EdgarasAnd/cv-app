import { Timeline, Dropdown } from "flowbite-react";
import React from "react";
import EducationEditForm from "./EducationEditForm"

export default function Education({ education, deleteEducation }) {
  return (
    <>
      <Timeline.Item className="time-line-item mb-0 py-5">
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
            </svg>
          </div>
          <div>
            <div className="flex justify-end px-4 pt-4 dark:text-white">
              <Dropdown
                inline={true}
                label="Change"
                className="dark:text-white">
                <Dropdown.Item>
                  <EducationEditForm />
                </Dropdown.Item>
                <Dropdown.Item>
                  <p
                    onClick={() => deleteEducation(education.id)}
                    className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:text-red-600 dark:hover:bg-gray-600 dark:hover:text-red-500">
                    Delete
                  </p>
                </Dropdown.Item>
              </Dropdown>
            </div>
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
