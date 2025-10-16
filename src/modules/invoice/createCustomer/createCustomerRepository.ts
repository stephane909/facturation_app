class createCustomerRepository {
  async execute(datas: object) {
    return {
      ok: true,
      message: "customer successfully added",
    };
  }
}

export default createCustomerRepository;
