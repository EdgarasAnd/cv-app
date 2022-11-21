import { Timeline, Dropdown } from "flowbite-react";
import EmploymentEditForm from "./EmploymentEditForm";
import React from "react";

export default function Employment({
  employment,
  deleteEmployments,
  handleEmploymentEdit,
}) {
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
            <div className="flex justify-end px-4 pt-4">
              <Dropdown
                inline={true}
                label="Edit"
                className="">
                <Dropdown.Item>
                  <EmploymentEditForm />
                </Dropdown.Item>
                <Dropdown.Item>
                  <p
                    onClick={() => deleteEmployments(employment.id)}
                    className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                    Delete
                  </p>
                </Dropdown.Item>
              </Dropdown>
            </div>
          </div>
        </div>

        <Timeline.Content>
          <Timeline.Time>
            <strong>Start date:</strong> {employment.startDate}
            <br></br> <strong>End date:</strong> {employment.endDate}
          </Timeline.Time>
          <Timeline.Title>
            I worked with <strong>{employment.employer}</strong> as{" "}
            <strong>{employment.jobTitle}</strong> in{" "}
            <strong>{employment.jobCity}</strong> city.
          </Timeline.Title>
          <Timeline.Body>{employment.description}</Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </>
  );
}
