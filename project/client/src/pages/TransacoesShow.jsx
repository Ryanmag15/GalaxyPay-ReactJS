import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { getTransacoes } from "../services/getTransacoes";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";


export default function Transacoes() {
    const [contas, setContas] = useState([]);

    async function clientes() {
        const accounts = await getTransacoes();
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
                            Valor
                        </th>
                        <th className="col-2" scope="col">
                            Dia
                        </th>
                        <th className="col-2" scope="col">
                            Status
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
                            <td>{conta.value}</td>
                            <td>{conta.value}</td>
                            <td>{conta.payday}</td>
                            <td>{conta.status}</td>
                            <td className="text-center">
                                <Link
                                    to={`../clientEdit`}
                                    className="btn btn-outline-warning"
                                >
                                    Editar
                                </Link>
                                <Button variant="outline-danger">Deletar</Button>{' '}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}