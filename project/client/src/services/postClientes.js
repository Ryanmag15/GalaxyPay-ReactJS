async function getToken() {
  const galaxId = "5473";
  const galaxHash = "83Mw5u8988Qj6fZqS4Z8K7LzOo1j28S706R0BeFe";
  const url = "https://api.sandbox.cloud.galaxpay.com.br/v2/token";
  const headers = {
    'Authorization': 'Basic ' + btoa(galaxId + ':' + galaxHash),
    'Content-Type': 'application/json'
  };
  const body = JSON.stringify({
    "grant_type": "authorization_code",
    "scope": "customers.read customers.write plans.read plans.write transactions.read transactions.write webhooks.write cards.read cards.write card-brands.read subscriptions.read subscriptions.write charges.read charges.write boletos.read"
  });
  const response = await fetch(url, {
    method: 'POST',
    headers,
    body
  });
  const data = await response.json();
  return data
}

export async function createUserAction(name) {
  const urlPostClient = "https://api.sandbox.cloud.galaxpay.com.br/v2/customers";
  const chaves = await getToken();
  const headerPostClient = {
    "Authorization": `${chaves.token_type} ${chaves.access_token}`,
    "Content-Type": "application/json"
  };
  const body = JSON.stringify({
    myId: "pay-63cac82687f301.98640401",
    name: name,
    document: "88914963756",
    emails: [
      "chimbinha@galaxpay.com.br",
      "teste3724email2130@galaxpay.com.br"
    ],
    phones: [
      3140201512,
      31983890110
    ],
    Address: {
      zipCode: "30411330",
      street: "Rua platina",
      number: "1330",
      complement: "2º andar",
      neighborhood: "Prado",
      city: "Belo Horizonte",
      state: "MG"
    }
  });

  const response = await fetch(urlPostClient, {
    method: "PATCH",
    headers: headerPostClient,
    body: body
  });

  const respostaPost = await response.json();

  return respostaPost;
}

