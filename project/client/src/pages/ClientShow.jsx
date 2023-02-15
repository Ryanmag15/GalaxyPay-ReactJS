import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { getClientes } from "../services/getClientes";
import { deleteUserAction } from "../services/deleteClientes";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import updateUserAction from "../services/putClientes";


export default function ClientShow() {
    const [contas, setContas] = useState([]);

    async function clientes() {
        const accounts = await getClientes();
        setContas(accounts);
    }

    useEffect(() => {
        clientes();
    }, []);

    console.log(contas)

    return (
        <div className="d-grid gap-2">
            <Table hover className="">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th className="col-2" scope="col">
                            Nome
                        </th>
                        <th className="col-2" scope="col">
                            Documento
                        </th>
                        <th className="text-center" scope="col">
                            Ações
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {contas.map((conta) => (
                        <tr key={conta.galaxPayId}>
                            <th>{conta.galaxPayId}</th>
                            <td>{conta.name}</td>
                            <td>{conta.document}</td>
                            <td className="text-center">
                                <Link
                                    to={{
                                        pathname: '../clientEdit',
                                        state: { id: conta.galaxPayId }
                                    }}
                                    className="btn btn-outline-warning"
                                >
                                    Editar
                                </Link>
                                <Button variant="outline-danger" onClick={() => deleteUserAction(conta.galaxPayId)}>
                                    Deletar
                                </Button>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}