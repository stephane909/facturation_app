import { useState } from "react";
import getCustomers from "./getCustomersRepository";
//import getCustomersRepository from "./getCustomersRepository";

interface Customer {
  id: number;
  name: string;
  siret: number;
  address: string;
  email: string;
}

type Customers = Array<Customer>;

const useGetCustomers = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [customers, setCustomers] = useState<Customers>([]);

  const fetchGetCustomers = async () => {
    setIsLoading(true);
    try {
      //const response = await getCustomers();

      // const getCustomers = new getCustomersRepository();
      // const response = getCustomers.execute();

      const response = await getCustomers();

      if (!response.ok) {
        setError("l'enregistrement n'est pas possible");
        setIsLoading(false);
      } else {
        setCustomers(response.customers);
        setIsSuccess(true);
      }
      setIsLoading(false);
    } catch (e) {
      setError(e.message);
      setIsLoading(false);
    }
    setIsLoading(false);
    return customers;
  };

  return { isLoading, error, isSuccess, fetchGetCustomers };
};

export default useGetCustomers;
