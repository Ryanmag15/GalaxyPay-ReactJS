import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import putClientes from "../services/putClientes"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import updateUserAction from "../services/putClientes";


function ClientEdit() {

  const [myId, setMyId] = useState('pay-63cc82f2ab53c5.08366324');
  const [name, setName] = useState('');
  const [document, setDocument] = useState('84997791822');
  const [emails, setEmails] = useState([
    'teste8585email7890@galaxpay.com.br',
    'teste2993email8343@galaxpay.com.br',
  ]);
  const [phones, setPhones] = useState([3140201512, 31983890110]);
  const [zipCode, setZipCode] = useState('30411330');
  const [street, setStreet] = useState('Rua platina');
  const [number, setNumber] = useState('1330');
  const [complement, setComplement] = useState('2º andar');
  const [neighborhood, setNeighborhood] = useState('Prado');
  const [city, setCity] = useState('Belo Horizonte');
  const [state, setState] = useState('MG');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      myId,
      name,
      document,
      emails,
      phones,
      Address: {
        zipCode,
        street,
        number,
        complement,
        neighborhood,
        city,
        state,
      }
    });
    // Aqui você pode enviar os dados para a API ou fazer outras operações
    updateUserAction("2833");         
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="myId">
          <Form.Label>My ID:</Form.Label>
          <Form.Control type="text" value={myId} onChange={(e) => setMyId(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="document">
          <Form.Label>Document:</Form.Label>
          <Form.Control type="text" value={document} onChange={(e) => setDocument(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="emails">
          <Form.Label>Emails:</Form.Label>
          <Form.Control as="textarea" rows={3} value={emails.join('\n')} onChange={(e) => setEmails(e.target.value.split('\n'))} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="phones">
          <Form.Label>Phones:</Form.Label>
          <Form.Control as="textarea" rows={3} value={phones.join('\n')} onChange={(e) => setPhones(e.target.value.split('\n'))} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="zipCode">
          <Form.Label>Zip Code:</Form.Label>
          <Form.Control type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="street">
          <Form.Label>Street:</Form.Label>
          <Form.Control type="text" value={street} onChange={(e) => setStreet(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="number">
          <Form.Label>Number:</Form.Label>
          <Form.Control type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="complement">
          <Form.Label>Complement:</Form.Label>
          <Form.Control type="text" value={complement} onChange={(e) => setComplement(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="neighborhood">
          <Form.Label>Neighborhood:</Form.Label>
          <Form.Control type="text" value={neighborhood} onChange={(e) => setNeighborhood(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="city">
          <Form.Label>City:</Form.Label>
          <Form.Control type="text" value={city} onChange={(e) => setCity(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="state">
          <Form.Label>State:</Form.Label>
          <Form.Control type="text" value={state} onChange={(e) => setState(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ClientEdit;