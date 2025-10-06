interface Customer {
  id: number;
  name: string;
  siret: number;
  address: string;
  email: string;
}

type Customers = Array<Customer>;

const customersList: Customers = [
  {
    id: 1,
    name: "Arkeys",
    siret: 11111111111111,
    address: "3 chemin de la poste, 33300 Bordeaux",
    email: "contact@arkeys.fr",
  },
  {
    id: 2,
    name: "Roberto",
    siret: 11111111111112,
    address: "3 route de la poste, 33300 Bordeaux",
    email: "contact@roberto.fr",
  },
  {
    id: 3,
    name: "Stefano",
    siret: 11111111111113,
    address: "3 allée de la poste, 33300 Bordeaux",
    email: "contact@stefano.fr",
  },
];

export async function addCustomer(datas: object) {
  // const response = await fetch("https://example.org/post", {
  //   method: "POST",
  //   body: JSON.stringify(datas),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });

  return {
    ok: true,
    message: "customer successfully added",
    datas: datas,
  };
}

export async function getCustomer() {
  return customersList;
}
