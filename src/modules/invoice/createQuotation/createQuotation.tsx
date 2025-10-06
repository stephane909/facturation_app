import { useState, useEffect } from "react";
import useCreateQuotation from "./useCreateQuotation";
import CreatePrestation from "../createPrestation/createPrestation";
import { getCustomer } from "../createCustomer/useCreateCustomerRepository";

interface Customer {
  id: number;
  name: string;
  siret: number;
  address: string;
  email: string;
}

type Customers = Array<Customer>;

const CreateQuotation = () => {
  const [customers, setCustomers] = useState<Customers>([]);
  const { isLoading, error, isSuccess, fetchCreateQuotation } =
    useCreateQuotation();

  //Chargement du select customers
  useEffect(() => {
    async function getCustomersList() {
      try {
        const response = await getCustomer();
        setCustomers(response);
      } catch (e) {
        throw e.message;
      }
    }
    getCustomersList();
  }, []);

  //envoie les datas pour la creation du devis
  const handleSubmit = (event) => {
    event.preventDefault();
    const clientValue: number = event.target.client.value;
    const dateValue: string = event.target.date.value;
    const nameValue: string = event.target.name.value;
    fetchCreateQuotation(clientValue, dateValue, nameValue, false);
  };

  //gestion des messages d'erreur et loading
  let message = "";
  if (isLoading && !error) {
    message = "Enregistrement en cours";
  } else {
    message = error;
  }

  return (
    <>
      <div>
        <h2>Nouveau Devis</h2>
        <form onSubmit={() => handleSubmit(event)}>
          <p>
            <label htmlFor="client">
              Client :
              <select id="client" name="client" defaultValue="0">
                <option key={0} value="0">
                  Sélectionnez un client
                </option>
                {customers.map((customer) => {
                  return (
                    <option key={customer.id} value={customer.id}>
                      {customer.name}
                    </option>
                  );
                })}
              </select>
            </label>
          </p>
          <p>
            <label htmlFor="date">
              Date du devis :<input id="date" type="date" name="date"></input>
            </label>
          </p>
          <p>
            <label htmlFor="quotationName">
              Nom du devis :
              <input id="quotationName" type="text" name="name"></input>
            </label>
          </p>
          <input type="submit" value="Créer le devis" />
        </form>
        {message && <span>{message}</span>}
        {isSuccess && <span>Le devis est créé</span>}
      </div>

      {isSuccess && <CreatePrestation />}
    </>
  );
};

export default CreateQuotation;
