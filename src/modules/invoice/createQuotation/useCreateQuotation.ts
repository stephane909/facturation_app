import { useState } from "react";
import { isNotEmpty } from "../../../utilities/validation";
import createQuotationRepository from "./createQuotationRepository";

const useCreateQuotation = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const fetchCreateQuotation = async (
    customer: number,
    date: string,
    name: string,
    status: boolean,
  ) => {
    setIsLoading(true);

    if (customer == 0) {
      setError("Veuillez sélectionner un client");
      return;
    } else if (date === "" || date === "jj/mm/aaaa") {
      setError("Veuillez saisir une date valide");
      return;
    } else if (!isNotEmpty(name)) {
      setError("Veuillez ajouter nom");
      return;
    }

    const quotationDatas = { customer, date, name, status };

    try {
      const newQuotation = new createQuotationRepository();

      const response = await newQuotation.execute(quotationDatas);

      if (!response.ok) {
        setError("l'enregistrement n'est pas possible");
        setIsLoading(false);
      } else {
        setIsSuccess(true);
      }

      setIsLoading(false);
      return response.message;
    } catch (e) {
      setError(e.message);
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    isSuccess,
    fetchCreateQuotation,
  };
};

export default useCreateQuotation;
