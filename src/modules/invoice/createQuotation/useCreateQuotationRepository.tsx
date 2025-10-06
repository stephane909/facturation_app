export async function addQuotation(datas: object) {
  // const response = await fetch("https://example.org/post", {
  //   method: "POST",
  //   body: JSON.stringify(datas),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });

  return {
    ok: true,
    message: "Quotation successfully added",
    datas: datas,
    status: false,
  };
}
