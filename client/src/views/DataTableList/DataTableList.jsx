import React from 'react';
import {
    Card, CardBody, CardHeader, CardTitle, Table, Row, Col
} from 'reactstrap';

import { PanelHeader } from 'components';

import { data_thead, data_tbody } from 'variables/general';

class RegularTables extends React.Component{
    render(){
        return (
            <div>
                <PanelHeader size="sm"/>
                <div className="content">
                    <Row>
                        <Col xs={12}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Data Table</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Table responsive>
                                        <thead className="text-primary">
                                            <tr>
                                                {
                                                    data_thead.map((prop, key) => {
                                                        if(key === data_thead.length-1)
                                                            return (
                                                                <th  key={key} className="text-right">{prop}</th>
                                                            );
                                                        return (
                                                            <th  key={key}>{prop}</th>
                                                        );
                                                    })
                                                }
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                data_tbody.map((prop,key) => {
                                                    return (
                                                        <tr key={key}>
                                                            {
                                                                prop.data.map((prop,key)=> {
                                                                    if(key === data_thead.length-1)
                                                                        return (
                                                                            <td  key={key} className="text-right">{prop}</td>
                                                                        );
                                                                    return (
                                                                        <td  key={key}>{prop}</td>
                                                                    );
                                                                })
                                                            }
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </Table>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default RegularTables;
