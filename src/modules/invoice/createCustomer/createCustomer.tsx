import useCreateCustomer from "./useCreateCustomer";

const CreateCustomer = () => {
  const { isLoading, error, isSuccess, fetchCreateCustomer } =
    useCreateCustomer();

  const handleSubmit = (event) => {
    event.preventDefault();

    const nameValue = event.target.name.value;
    const siretValue = event.target.siret.value;
    const addressValue = event.target.address.value;
    const emailValue = event.target.email.value;
    fetchCreateCustomer(nameValue, siretValue, addressValue, emailValue);
  };

  let message: string = "";

  if (isLoading && !error) {
    message = "Enregistrement en cours";
  } else if (error) {
    message = error;
  }

  return (
    <>
      <h2>Nouveau Client</h2>
      {isSuccess && <span>Client ajouté !</span>}
      {!isSuccess && (
        <form onSubmit={() => handleSubmit(event)}>
          <div>
            <label htmlFor="name">Nom</label>
            <br />
            <input name="name" type="text" />
          </div>
          <div>
            <label htmlFor="siret">N° de Siret</label>
            <br />
            <input name="siret" type="number" />
          </div>
          <div>
            <label htmlFor="address">Adresse, CP, Ville</label>
            <br />
            <input name="address" type="text" />
          </div>
          <div>
            <label htmlFor="email">eMail</label>
            <br />
            <input name="email" type="email" />
          </div>
          <div>
            <br />
            <input type="submit" value="save" />
            {message && <span>{message}</span>}
          </div>
        </form>
      )}
    </>
  );
};

export default CreateCustomer;
