import CreateCustomer from "./modules/invoice/createCustomer/createCustomer";
import CreateQuotation from "./modules/invoice/createQuotation/createQuotation";

function App() {
  return (
    <>
      <CreateCustomer />
      <hr />
      <CreateQuotation />
    </>
  );
}

export default App;
