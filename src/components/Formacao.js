import React from "react";

import Table from 'react-bootstrap/Table'

export default class Formacao extends React.Component {

    state = {
        esquemas: []
    }

    componentDidMount() {
        fetch('http://localhost:8080/football/schemas', {
            method: 'get'
        }).then((response) => response.json())
            .then(schemas => {
                console.log(schemas);
                this.setState({ esquemas: schemas });
            });
    }



    render() {
        return (
            <>
                <center><h5>Esquema</h5></center>

                <div style={{ height: this.props.height, overflowY: 'scroll' }} className="card-body">
                    {this.state.esquemas.map((esq) => (

                        <div class="card">
                            <div class="card-body">
                                <center>
                                <h6 class="card-title">
                                    {esq.schema}
                                </h6>
                                </center>

                            </div>
                        </div>
                    ))}
                </div>
            </>
        )
    }
}
