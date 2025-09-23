import { useState } from "react";
import { isEmail, isNotEmpty, isSiret } from "../../../utilities/validation";

const useCreateCustomer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  async function fetchCreateCustomer(
    name: string,
    siret: string,
    address: string,
    email: string,
  ) {
    setIsLoading(true);

    //on test si tous les champs sont conforments
    if (!isSiret(siret)) {
      setError("Le siret doit contenir 14 chiffres");
      return;
    } else if (!isEmail(email)) {
      setError("L'email est invalide");
      return;
    } else if (!isNotEmpty(name)) {
      setError("Le nom est vide");
      return;
    } else if (!isNotEmpty(address)) {
      setError("L'adresse est vide");
      return;
    }

    const customerDatas = { name, siret, address, email };

    try {
      const response = await fetch("https://example.org/post", {
        method: "POST",
        body: JSON.stringify(customerDatas),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const res = await response.json();

      if (!response.ok) {
        //const error = new Error("Failde to create customer");
        //throw error;
        setError("l'enregistrement n'est pas possible");
        setIsLoading(false);
      } else {
        setIsSuccess(true);
      }
      setIsLoading(false);
      return res.message;
    } catch (e) {
      setError(e.message);
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    error,
    isSuccess,
    fetchCreateCustomer,
  };
};

export default useCreateCustomer;
