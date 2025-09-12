import { useState } from "react";
import useCreateCustomer from "./useCreateCustomer";
import { isEmail, isSiret, isNotEmpty } from "../../../utilities/validation";

const CreateCustomer = () => {
  // State de stockage des champs
  const [enteredName, setEnteredName] = useState("");
  const [enteredSiret, setEnteredSiret] = useState("");
  const [enteredAddress, setEnteredAddress] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [dataToSubmission, setDataToSubmission] = useState(false);
  const [dataError, setDataError] = useState(false);
  const { loading, fetchedDatas, isError, success } = useCreateCustomer(
    enteredName,
    enteredSiret,
    enteredAddress,
    enteredEmail,
    dataToSubmission,
  );

  function handleNameChange(value) {
    setEnteredName(value);
  }

  function handleSiretChange(value) {
    setEnteredSiret(value);
  }

  function handleAddressChange(value) {
    setEnteredAddress(value);
  }

  function handleEmailChange(value) {
    setEnteredEmail(value);
  }

  // #FACTURATION-US-1-AC-1 : création client validée
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      isSiret(enteredSiret) &&
      isEmail(enteredEmail) &&
      isNotEmpty(enteredName) &&
      isNotEmpty(enteredAddress)
    ) {
      setDataToSubmission(true);
      setDataError(false);
    } else {
      setDataToSubmission(false);
      setDataError(true);
    }
  };

  return (
    <>
      <p>Nouveau Client</p>
      {success && <span>{fetchedDatas.name} ajouté !</span>}
      {!success && (
        <form onSubmit={() => handleSubmit(event)}>
          <div>
            <label htmlFor="name">Nom</label>
            <br />
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="none"
              onBlur={(event) => handleNameChange(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="siret">N° de Siret</label>
            <br />
            <input
              id="siret"
              name="siret"
              type="number"
              autoComplete="none"
              onBlur={(event) => handleSiretChange(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="address">Adresse, CP, Ville</label>
            <br />
            <input
              id="address"
              name="address"
              type="text"
              autoComplete="none"
              onBlur={(event) => handleAddressChange(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">eMail</label>
            <br />
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="none"
              onBlur={(event) => handleEmailChange(event.target.value)}
            />
          </div>
          <div>
            <br />
            <input type="submit" value="save" />
            {dataError && (
              <span>veuillez vérifier la confirmité de votre saisie</span>
            )}
            {loading && <span>Enregistrement en cours</span>}
            {isError && (
              <span>Une erreur sn'est produite lors de l'enregistrement </span>
            )}
          </div>
        </form>
      )}
    </>
  );
};

export default CreateCustomer;
