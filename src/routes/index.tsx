import { createFileRoute } from "@tanstack/react-router";
import NavBar from "../modules/nav/nav";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <span>What do you want to do ? </span>
      <NavBar />
    </div>
  );
}
