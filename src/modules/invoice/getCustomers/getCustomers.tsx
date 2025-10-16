import { useState, useEffect } from "react";
import useGetCustomers from "./useGetCustomers";

interface Customer {
  id: number;
  name: string;
  siret: number;
  address: string;
  email: string;
}

type Customers = Array<Customer>;

const GetCustomers = () => {
  const { isLoading, error, isSuccess, fetchGetCustomers } = useGetCustomers();
  const [customers, setCustomers] = useState<Customers>([]);

  //Chargement du select customers
  useEffect(() => {
    async function getCustomersList() {
      const customersList = await fetchGetCustomers();
      setCustomers(customersList);
    }

    getCustomersList();
  }, [fetchGetCustomers]);

  let message: string = "";

  if (isLoading && !error) {
    message = "Enregistrement en cours";
  } else if (error) {
    message = error;
  }

  return (
    <>
      {!isSuccess && <span>{message}</span>}
      {isSuccess && (
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
      )}
    </>
  );
};

export default GetCustomers;
