import { createFileRoute } from "@tanstack/react-router";
import NavBar from "../modules/nav/nav";
import CreateCustomer from "../modules/invoice/createCustomer/createCustomer";

export const Route = createFileRoute("/newcustomer")({
  component: NewCustomer,
});

function NewCustomer() {
  return (
    <>
      <NavBar />
      <CreateCustomer />
    </>
  );
}
