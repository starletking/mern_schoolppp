import React from 'react';
import {
    Card, CardHeader, CardBody, Row, Col, Button, Form
} from 'reactstrap';
import { FormGroup, Input } from 'reactstrap';

import SchoolService from '../../services/SchoolService';

import { PanelHeader } from 'components';

class AddSchool extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '' };
        this.addSchoolService = new SchoolService();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ name: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.addSchoolService.sendSchoolName(this.state.name);
        window.location.reload();
        this.props.history.push('/index');
    }

    render() {
        return (
            <div>
                <PanelHeader size="sm" />
                <div className="content">
                    <Row>
                        <Col md={12}>
                            <Card>
                                <CardHeader>
                                    <h5 className="title">Add School</h5>
                                </CardHeader>
                                <CardBody>
                                    <Form onSubmit={this.handleSubmit}>
                                        <FormGroup>
                                            <Input
                                                type="text"
                                                name="school"
                                                placeholder="School name"
                                                value={this.state.name}
                                                onChange={this.handleChange}
                                            />
                                        </FormGroup>
                                        <Col md={12}>
                                            <Button type="submit" >Add</Button>
                                        </Col>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default AddSchool;
