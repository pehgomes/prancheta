import React from "react";
import Table from "react-bootstrap/Table"
import Image from "react-bootstrap/Image"
import TableScrollbar from "react-bootstrap/"

import './ListaJogadores.css'

export default class ListaJogadores extends React.Component {

    state = {
        teamResource: []
    }

    constructor() {
        super();
    }


    // fetch('https://api.football-data.org/v2/teams/3984', {
    //     method: 'get',
    //     headers: new Headers({
    //         'X-Auth-Token': 'f8cf1e7bc2a94f1d899c8d090f1c070b'
    //     })
    // }).then((response) => response.json())
    //     .then(team => {
    //         console.log(team)
    //         this.setState({ teamResource: team.squad });
    //     });

    componentDidMount() {
        fetch('https://617745359c328300175f5821.mockapi.io/api/v1/teams/times', {
            method: 'get'
        }).then((response) => response.json())
            .then(team => {
                console.log(team)
                this.setState({ teamResource: team[0].squad });
            });
    }


    render() {
        return (
            <div className="Teste">
                <Table striped>
                    <thead>
                        <tr >
                            <th style={{ textAlign: "center" }}>
                                <output name="" for="" style={{ alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>Elenco</output>
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.teamResource.map((squad) => (
                            <tr key={squad.id}>
                                <td >
                                    <Image src="https://i.pinimg.com/originals/82/a0/c0/82a0c08f08e799ae8c0e4745598d0bf4.png" style={{ width: 47, height: 47, marginRight: 47 }} roundedCircle />
                                    <output name="Tinga" for="Tinga">{squad.name}</output>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            </div>
        )
    }
}