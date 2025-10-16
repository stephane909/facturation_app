class createQuotationRepository {
  async execute(datas: object) {
    return {
      ok: true,
      message: "Quotation successfully added",
    };
  }
}

export default createQuotationRepository;
