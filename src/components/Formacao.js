import React from "react";

import Table from 'react-bootstrap/Table'

export default class Formacao extends React.Component {

    state = {
        esquemas: [{
            id: 123,
            output: "3  -  5  -  2",
            zag: 3,
            mei: 5,
            ata: 2,
            xZag: {
                x1: 100,
                x2: 200,
                x3: 300,
            },
            yZag: {
                y1: 75,
                y2: 75,
                y3: 20
            }
        },
        {
            id: 132,
            output: "4  -  4  -  2",
            zag: 4,
            mei: 4,
            ata: 2,
            xZag: {
                x1: 90,
                x2: 140,
                x3: 170,
                x4: 200,
            },
            yZag: {
                y1: 75,
                y2: 75,
                y3: 20,
                y4: 30
            }
        }]
    }

    clica = (e) => {
        console.log(e.target.value)
    }

    render() {
        return (
            <Table striped hover responsive="sm">
                <thead>
                    <tr>
                        <th style={{ textAlign: "center" }}>Esquema</th>
                    </tr>
                </thead>
                <tbody>

                    {this.state.esquemas.map((esq) => (
                        <tr>
                            <td  key={esq.id} style={{ textAlign: "center" }}>
                            <li onClick={this.clica} key={esq.id} value={esq}>{esq.id} - {esq.output}</li>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </Table>
        )
    }
}
