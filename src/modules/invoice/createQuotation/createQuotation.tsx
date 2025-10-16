import GetCustomers from "../getCustomers/getCustomers";
import useCreateQuotation from "./useCreateQuotation";
import CreatePrestation from "../createPrestation/createPrestation";

const CreateQuotation = () => {
  const { isLoading, error, isSuccess, fetchCreateQuotation } =
    useCreateQuotation();

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
              <GetCustomers />
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
