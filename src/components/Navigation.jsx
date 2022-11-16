import { Navbar, DarkThemeToggle, Flowbite } from "flowbite-react";
// import AddUserModal from "./AddUserModal";

export default function Navigation() {
  return (
    <>
      <Navbar className="flex">
        <div className="flex ">
          <Navbar.Brand href="https://flowbite.com/">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              CV App
            </span>
          </Navbar.Brand>
        </div>
        <div className="flex float-right">
          {/* <AddUserModal /> */}
          <Flowbite
            theme={{
              theme: {
                alert: {
                  color: {
                    primary: "bg-primary",
                  },
                },
              },
            }}>
            <DarkThemeToggle />
          </Flowbite>
        </div>
      </Navbar>
    </>
  );
}
