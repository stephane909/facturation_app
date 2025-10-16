import { createFileRoute } from "@tanstack/react-router";
import CreateQuotation from "../modules/invoice/createQuotation/createQuotation";
import NavBar from "../modules/nav/nav";

export const Route = createFileRoute("/quotation")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <NavBar />
      <CreateQuotation />
    </>
  );
}
