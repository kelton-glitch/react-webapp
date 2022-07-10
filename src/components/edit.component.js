import React, {Component} from 'react';
import axios from 'axios';

export default class Edit extends Component {
    constructor(props){
        super(props);
        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
        this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            person_name: '',
            business_name: '',
            business_gst_number: ''

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