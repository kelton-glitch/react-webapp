import React, {Component} from 'react';
import axios from 'axios';

export default class Edit extends Component {
    constructor(props){
        super(props);
        this.onChangeEmployeeID = this.onChangeEmployeeID.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePosition = this.onChangePosition.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            first_name: '',
            last_name: '',
            employee_id: '',
            position: '',
            email: ''
        } 
    }


    componentDidMount() {
        axios.get('http://localhost:3000/edit/'+ this.props.match.params.id)
            .then(response => {
                this.setState ({
                    person_name: response.data.person_name,
                    business_name: response.data.business_name,
                    business_gst_number: response.data.business_gst_number
                });
            }
                )
     }
}