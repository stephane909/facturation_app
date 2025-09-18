import { useState, useEffect } from "react";
import { isEmail, isNotEmpty, isSiret } from "../../../utilities/validation";

const useCreateCustomer = (
  name: string,
  siret: string,
  address: string,
  email: string,
  submit: boolean,
) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    const fetchedDatas = {
      name: name,
      siret: siret,
      address: address,
      email: email,
    };

    async function fetchData() {
      setIsLoading(true);

      try {
        const response = await fetch("https://example.org/post", {
          method: "POST",
          body: JSON.stringify(fetchedDatas),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const res = await response.json();

        if (!response.ok) {
          //const error = new Error("Failde to create customer");
          //throw error;
          setIsError("l'enregistrement n'est pas possible");
          setIsLoading(false);
        } else {
          setIsSuccess(true);
        }
        setIsLoading(false);
        return res.message;
      } catch (error) {
        setIsError(error.message);
        setIsLoading(false);
      }
    }

    if (submit) {
      if (
        isSiret(siret) &&
        isEmail(email) &&
        isNotEmpty(name) &&
        isNotEmpty(address)
      ) {
        fetchData();
      } else {
        console.log("pas ok ");
        setIsError("Vérifiez le contenu des champs ");
      }
    }
  }, [submit, address, email, name, siret]);

  return {
    isLoading,
    isError,
    isSuccess,
  };
};

export default useCreateCustomer;
