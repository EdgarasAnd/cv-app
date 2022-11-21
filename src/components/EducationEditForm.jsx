import React, { useState } from "react";
import { Button, Label, Modal, Textarea, TextInput } from "flowbite-react";

export default function EmploymentForm({ handleEmploymentEdit, id, employment }) {
  const [jobTitle, setJobTitle] = useState("");
  const [employer, setEmployer] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [jobCity, setJobCity] = useState("");
  const [description, setDescription] = useState("");
  const [showModal, setShowModal] = useState(false);

  const onSubmitEmpl = (event) => {
    event.preventDefault();

    handleEmploymentEdit({
      jobTitle,
      employer,
      startDate,
      endDate,
      jobCity,
      description,
    });
    setShowModal(false);

    setJobCity("");
    setStartDate("");
    setEmployer("");
    setEndDate("");
    setDescription("");
    setJobTitle("");
  };

  return (
    <>
      <React.Fragment>
      <p
            onClick={() => setShowModal(true)}
            className="block py-2 px-4 text-sm text-black hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Edit
          </p>

        {showModal ? (
          <Modal
            show={true}
            size="xl"
            popup={true}
            onClose={() => setShowModal(false)}>
            <Modal.Header />
            <Modal.Body>
              <form onSubmit={onSubmitEmpl}>
                <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                  <h3 className="text-4xl font-medium text-gray-900 dark:text-white">
                    Edit this Education Item
                  </h3>
                  <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="jobTitle" value="" />
                      </div>
                      <TextInput
                        name="jobTitle"
                        type="text"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        placeholder="Job title"
                        required={false}
                      />
                    </div>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="employer" value="" />
                      </div>
                      <TextInput
                        name="employer"
                        type="text"
                        value={employer}
                        onChange={(e) => setEmployer(e.target.value)}
                        placeholder="Employer"
                        required={false}
                      />
                    </div>
                  </div>
                  <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="startDate" value="Starting date" />
                      </div>
                      <TextInput
                        className="dark:text-white"
                        name="startDate"
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required={false}
                      />
                    </div>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="endDate" value="End date" />
                      </div>
                      <TextInput
                        name="endDate"
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required={false}
                      />
                    </div>
                  </div>
                  <div className="mb-2 block">
                    <Label htmlFor="endDate" value=" " />
                  </div>
                  <TextInput
                    name="jobCity"
                    type="text"
                    value={jobCity}
                    onChange={(e) => setJobCity(e.target.value)}
                    placeholder="City"
                    required={false}
                  />
                
                <div>
                  <Label value="Description" />
                </div>
                <Textarea
                  name="description"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Leave a comment..."
                  required={false}
                  rows={4}
                />
                <Button
                  className="w-full"
                  type="submit"
                  outline={false}
                  gradientDuoTone="greenToBlue">
                  Submit
                </Button></div>
              </form>
            </Modal.Body>
          </Modal>
        ) : null}
      </React.Fragment>
    </>
  );
}
