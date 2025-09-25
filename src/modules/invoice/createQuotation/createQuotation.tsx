import { useState } from "react";
import useCreateQuotation from "./useCreateQuotation";

const CreateQuotation = () => {
  //On stockl ici toutes les Prestations, Le devis comporte au moins une prestation,
  // donc on en crée d'office une par défaut
  const [prestationsList, setPrestationsList] = useState([
    {
      id: 1,
      name: "default",
    },
  ]);

  //J'ai mis un useState pour anticiper le changement d'état du devis.
  // False = brouillon - True = Enregistré
  // A voir si on garde ça, je pense qu'il y aua d'autres états, comme "validé"
  const [status, setStatus] = useState<boolean>(false);

  const { isLoading, error, isSuccess, fetchCreateQuotation } =
    useCreateQuotation();

  const handleSubmit = (event) => {
    event.preventDefault();
    const clientValue: number = event.target.client.value;
    const dateValue: string = event.target.date.value;
    const nameValue: string = event.target.name.value;

    fetchCreateQuotation(clientValue, dateValue, nameValue, status);
  };

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
              <select name="client" defaultValue="0">
                <option key={0} value="0">
                  Sélectionnez un client
                </option>
                <option key={1} value="1">
                  Arkeys
                </option>
                <option key={2} value="2">
                  Roberto
                </option>
                <option key={3} value="3">
                  Stefano
                </option>
              </select>
            </label>
          </p>
          <p>
            <label htmlFor="">
              Date du devis :<input type="date" name="date"></input>
            </label>
          </p>
          <p>
            <label htmlFor="">
              Nom du devis :<input type="text" name="name"></input>
            </label>
          </p>

          <input type="submit" value="Créer le devis" />
        </form>

        {message && <span>{message}</span>}
        {isSuccess && <span>Le devis est créé</span>}
      </div>
    </>
  );
};

export default CreateQuotation;
