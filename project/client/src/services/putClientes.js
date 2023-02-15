import { useParams } from 'react-router-dom';
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

export default async function updateUserAction(galaxPayId, name, document, emails, phones, Address) {
  const urlPutClient = `https://api.sandbox.cloud.galaxpay.com.br/v2/customers/${galaxPayId}/galaxPayId`;

  const chaves = await getToken();
  const headerPutClient = {
    Authorization: `${chaves.token_type} ${chaves.access_token}`,
  };
  const body = {
    myId: 'pay-63cc82f2ab53c5.08366324',
    name: name,
    document: document,
    emails: emails,
    phones: phones,
    Address: Address,
  };
  const bodyJson = JSON.stringify(body);

  fetch(urlPutClient, {
    method: 'PUT',
    headers: headerPutClient,
    body: bodyJson,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Usuario Alterado', data);
    })
    .catch((error) => {
      console.error('Erro ao alterar usuario', error);
    });
}