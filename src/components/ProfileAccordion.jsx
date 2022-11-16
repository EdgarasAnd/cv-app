import { Accordion } from "flowbite-react";
import React from "react";
import Profile from "./Profile";
import ProfileForm from "./ProfileForm";
export default function ProfileAccordion({ userData, handleChange }) {
  return (
    <>
      <Accordion alwaysOpen={true}>
        <Accordion.Panel>
          <Accordion.Title>Profile form</Accordion.Title>
          <Accordion.Content>
            <ProfileForm handleChange={handleChange} userData={userData} />

          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </>
  );
}
