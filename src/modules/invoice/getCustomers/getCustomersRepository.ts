class getCustomersRepository {
  async execute() {
    return {
      ok: true,
      customers: [
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
      ],
    };
  }
}

export default getCustomersRepository;
