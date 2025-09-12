import { useState, useEffect } from "react";

const useCreateCustomer = (
  name: string,
  siret: string,
  address: string,
  email: string,
  submit: boolean,
) => {
  const [fetchedDatas, setFetchedDatas] = useState({
    name: name,
    siret: siret,
    address: address,
    email: email,
  });

  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [success, setSuccess] = useState(false);

  // si je l'utilise il y a top de re render. POURQUOI ?
  // setFetchedDatas((prevDatas) => ({
  //   ...prevDatas,
  //   name: name,
  //   siret: siret,
  //   address: address,
  //   email: email,
  // }));

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

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
          setIsError(true);
          setLoading(false);
        } else {
          setSuccess(true);
        }
        setLoading(false);
        return res.message;
      } catch (error) {
        setIsError(true);
        setLoading(false);
      }
    }
    if (submit) {
      fetchData();
    }
  }, [fetchedDatas, submit]);

  return {
    loading,
    fetchedDatas,
    isError,
    success,
  };
};

export default useCreateCustomer;
