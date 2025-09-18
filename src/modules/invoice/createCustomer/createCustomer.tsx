import { useState, useRef, useEffect } from "react";
import useCreateCustomer from "./useCreateCustomer";

const CreateCustomer = () => {
  const name = useRef<HTMLInputElement>("");
  const siret = useRef<HTMLInputElement | null>("");
  const address = useRef<HTMLInputElement | null>("");
  const email = useRef<HTMLInputElement | null>("");

  const [dataToSubmission, setDataToSubmission] = useState(false);

  const { isLoading, isError, isSuccess } = useCreateCustomer(
    name.current.value,
    siret.current.value,
    address.current.value,
    email.current.value,
    dataToSubmission,
  );

  //réinitialise la soumission du formulaire
  useEffect(() => {
    if (dataToSubmission === true) {
      setDataToSubmission(false);
    }
  }, [dataToSubmission]);

  // #FACTURATION-US-1-AC-1 : création client validée
  const handleSubmit = (event) => {
    event.preventDefault();
    setDataToSubmission(true);
  };

  return (
    <>
      <h2>Nouveau Client</h2>
      {isSuccess && <span>{name.current.value} ajouté !</span>}
      {!isSuccess && (
        <form onSubmit={() => handleSubmit(event)}>
          <div>
            <label htmlFor="name">Nom</label>
            <br />
            <input name="name" type="text" ref={name} />
          </div>
          <div>
            <label htmlFor="siret">N° de Siret</label>
            <br />
            <input name="siret" type="number" ref={siret} />
          </div>
          <div>
            <label htmlFor="address">Adresse, CP, Ville</label>
            <br />
            <input name="address" type="text" ref={address} />
          </div>
          <div>
            <label htmlFor="email">eMail</label>
            <br />
            <input name="email" type="email" ref={email} />
          </div>
          <div>
            <br />
            <input type="submit" value="save" />

            {isLoading && <span>Enregistrement en cours</span>}
            {isError && <span>{isError}</span>}
          </div>
        </form>
      )}
    </>
  );
};

export default CreateCustomer;
