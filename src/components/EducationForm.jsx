import { Button, Label, Modal, Textarea, TextInput } from "flowbite-react";
import React, { useState } from "react";

export default function EducationForm({ handleEducationAdd }) {
  const [showModal, setShowModal] = useState(false);
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    handleEducationAdd({ school, degree, date, city, description });
    setShowModal(false);
    setCity("");
    setDate("");
    setDegree("");
    setDescription("");
    setSchool("");
  };

  return (
    <>
      <React.Fragment>
        <Button
          className="mx-2"
          outline={true}
          gradientDuoTone="greenToBlue"
          onClick={() => setShowModal(true)}>
          + Add your Education
        </Button>
        {showModal ? (
          <Modal
            show={true}
            size="xl"
            popup={true}
            onClose={() => setShowModal(false)}>
            <Modal.Header />
            <Modal.Body>
              <form onSubmit={onSubmit}>
                <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                  <h3 className="text-4xl font-medium text-gray-900 dark:text-white">
                    Add you Education
                  </h3>
                  <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="firstName" value="" />
                      </div>
                      <TextInput
                        name="school"
                        type="text"
                        value={school}
                        onChange={(e) => setSchool(e.target.value)}
                        placeholder="School"
                        required={false}
                      />
                    </div>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="lastName" value="" />
                      </div>
                      <TextInput
                        name="degree"
                        type="text"
                        value={degree}
                        onChange={(e) => setDegree(e.target.value)}
                        placeholder="Degree"
                        required={false}
                      />
                    </div>
                  </div>
                  <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="occupation" value="" />
                      </div>
                      <TextInput
                        name="date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required={false}
                      />
                    </div>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="email" value="" />
                      </div>
                      <TextInput
                        name="city"
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="City"
                        required={false}
                      />
                    </div>
                  </div>
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
                  </Button>
                </div>
              </form>
            </Modal.Body>
          </Modal>
        ) : null}
      </React.Fragment>
    </>
  );
}
