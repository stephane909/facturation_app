import { useState } from "react";

interface Prestation {
  id: number;
  name: string;
}

type Prestations = Array<Prestation>;

const CreatePrestation = () => {
  const [prestationsList, setPrestationsList] = useState<Prestations>([
    {
      id: 1,
      name: "default",
    },
  ]);

  const getNextId = (list: Prestations) => {
    const lastlistLenght: number = list.length;
    const lastItem: Prestation = list[lastlistLenght - 1];
    const lastItemID: number = lastItem.id;

    return lastItemID + 1;
  };

  // Ajoute une nouvelle ligne de prestation vierge
  const handleAddNewPrestation = () => {
    const nextId: number = getNextId(prestationsList);

    //créer une copie de la liste
    const updatedList: Prestations = [
      // copie le state de la liste actuelle
      ...prestationsList,
      // ajoute une nouvelle ligne vierge de prestation
      {
        id: nextId,
        name: "default",
      },
    ];
    // on mets à jour le state avec la nouvelle liste
    setPrestationsList(updatedList);
  };

  const handleRemovePrestation = (id: number) => {
    console.log(prestationsList.length);
    //un devis contient au moins une prestation
    if (prestationsList.length >= 2) {
      setPrestationsList((prevList) =>
        //on garder toutes les lignes qui on un id != de celui passé en paramètre
        prevList.filter((item) => id !== item.id),
      );
    } else {
      alert("votre devis doit contenir au moins une prestation");
    }
  };

  return (
    <>
      <form>
        <hr />
        <h3>Prestations : </h3>
        <div>
          {prestationsList.map((item: Prestation) => {
            return (
              <li key={item.id}>
                <span>{item.id}</span>
                <label htmlFor={"prestationName" + item.id}>
                  Nom de la prestation
                  <input
                    id={"prestationName" + item.id}
                    type="text"
                    name="name"
                  ></input>
                </label>

                <label htmlFor={"description" + item.id}>
                  Nature de la prestation
                  <input
                    id={"description" + item.id}
                    type="text"
                    name="description"
                  ></input>
                </label>
                <label htmlFor={"quantity" + item.id}>
                  Quantité
                  <input
                    id={"quantity" + item.id}
                    type="text"
                    name="quantity"
                  ></input>
                </label>
                <label htmlFor={"pice" + item.id}>
                  Prix unitaire
                  <input
                    id={"price" + item.id}
                    type="text"
                    name="price"
                  ></input>
                </label>
                <button
                  onClick={() => handleRemovePrestation(item.id)}
                  type="button"
                >
                  -
                </button>
              </li>
            );
          })}
        </div>
        <p>
          <input
            type="button"
            onClick={handleAddNewPrestation}
            value="Ajouter une prestation"
          ></input>
        </p>
        <hr />
      </form>
    </>
  );
};
export default CreatePrestation;
