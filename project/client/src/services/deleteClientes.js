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


export async function deleteUserAction(galaxPayId) {
  const urlDeleteClient = `https://api.sandbox.cloud.galaxpay.com.br/v2/customers/${galaxPayId}/galaxPayId`;

  const chaves = await getToken();
  const headerPutClient = {
    Authorization: `${chaves.token_type} ${chaves.access_token}`,
  };

  fetch(urlDeleteClient, {
    method: 'DELETE',
    headers: headerPutClient,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Usuario Deletado', data);
    })
    .catch((error) => {
      console.error('Erro ao deletar usuario', error);
    });
}