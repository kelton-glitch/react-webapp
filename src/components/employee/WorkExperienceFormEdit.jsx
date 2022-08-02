import React, {Component} from "react";
import {Form, Button, Col, Row} from "react-bootstrap";

class WorkExperienceForm extends Component {
    state={

        CompanyNameData: this.props.editDate["CompanyName"],
        DesignationData: this.props.editData["Designation"],
        FromDateData: this.props.editData["FromDate"].slice(0,10),
        ToDateData: this.props.editData["ToDate"].slice(0,10),
    };
    onCompanyNameDataChange(e) {
        this.setState({ CompanyNameData: e.target.value});
    }

    onDesignationDataChange(e) {
        this.setState({ DesignationData: e.target.value});
    }

    onFromDateDataChange(e) {
        this.setState({ FromDateData: e.target.value});
    }

    onToDateDataChange(e) {
        this.setState({ToDateData: e.target.value});
    }

    componentDidMount() {

    }

    render() {
      return (
        <div>
          <h2 id="role-form-title">Edit Work Experience Details</h2>

          <div id="role-form-outer-div">
            <Form
            id="form"
            onSubmit={e=>
            this.props.onWorkExperinceEditUpdate(this.props.editData, e)
                }
            >
                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                        Company Name
                    </Form.Label>
                    <Col sm={10} className="form-input">
                        <Form.Control 
                        type="Text"
                        placeholder="Company Name"
                        required
                        value={this.state.CompanyNameData}
                        onChange={value=> this.onCompanyNameDataChange(value)}
                        />
                    </Col>

                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                        Designation
                    </Form.Label>
                    <Col sm={10} className="form-input">
                        <Form.Control 
                        type="Text"
                        placeholder="Designation"
                        required
                        value={this.state.DesignationData}
                        onChange={value=> this.onDesignationDataChange(value)}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                        FromDate
                    </Form.Label>
                    <Col sm={10} className="form-input">
                        <Form.Control 
                        type="date"
                        required
                        value={this.state.FromDateData}
                        onChange={value=> this.onFromDateDataChange(value)}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                        ToDate
                    </Form.Label>
                    <Col sm={10} className="form-input">
                        <Form.Contol 
                        type="date"
                        required
                        value={this.state.ToDateData}
                        onChange={value => this.onToDateChangeDataChange(value)}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} id="form-submit-button">
                    <Col sm={{span:10, offset: 2}}>
                        <Button type="submit">Update</Button>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} id="form-cancel-button">
                    <Col sm={{span: 10, offset: 2}} id="form-cancel-button-inner">
                        <Button type="reste" onClick={this.props.onFormEditClose}>
                            Cancel
                        </Button>
                    </Col>
                </Form.Group>
            </Form>

          </div>
        </div>
      )
    }
}

export default WorkExperienceForm;