import { useState } from "react";
import getCustomersRepository from "./getCustomersRepository";

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
    try {
      const getCustomers = new getCustomersRepository();
      const response = await getCustomers.execute();

      //const response = await getCustomers();

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
