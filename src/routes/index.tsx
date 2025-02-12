//import { createFileRoute } from "@tanstack/react-router";
import './index.css';
import { Balance } from "../components/balance/balance";
import SendNFC from '../components/SendNFC/SendNFC';
import ReceiveNFC from '../components/ReceiveNFC/ReceiveNFC';
 
/*export const Route = createFileRoute("/")({
  component: Index,
})
 
function Index() {
  return <Balance />;
}*/



const App: React.FC = () => {
  return (
    <div className="app-grid">
      <SendNFC />
      <ReceiveNFC />
      <Balance />
    </div>
  );
};

export default App;
