import { createFileRoute } from "@tanstack/react-router";
import { Balance } from "../components/balance";
 
export const Route = createFileRoute("/")({
  component: Index,
})
 
function Index() {
  return <Balance />;
}
