import { Accordion, Avatar } from "flowbite-react";
import React from "react";
import ProfileForm from "./ProfileForm";
export default function ProfileAccordion({ userData, handleChange }) {
  return (
    <>
      <Accordion alwaysOpen={true}>
        <Accordion.Panel className="px-0">
          <Accordion.Title>
            <div className="flex items-center justify-between">
              <div className="m-2">
                <Avatar
                  img={userData.image}
                  rounded={true}
                  bordered={true}
                />
              </div>
              <div>
                <h5 className="text-center mb-1 text-xl font-medium text-gray-900 dark:text-white ">
                  {userData.firstName} {userData.lastName}
                  <br></br>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Date of birth {userData.age}
                  </span>
                </h5>
              </div>
              <div>
                <div className="flex flex-col text-center p-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {userData.phoneNumber}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {userData.email}
                  </span>
                </div>
              </div>
            </div>
          </Accordion.Title>
          <Accordion.Content>
            <ProfileForm handleChange={handleChange} userData={userData} />
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </>
  );
}
