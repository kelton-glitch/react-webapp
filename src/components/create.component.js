import React, {Component} from 'react';

export default class CreateEmployee extends Component {
    return (){
        <div style={{margin: 10}}>
            <h3>Add New Employee</h3>
            <form>
                <div className="mb-3">
                    <label>Employee ID:</label>
                    <input type ="text" class="form-control" placeholder="Enter your ID"/>
                </div>

                <div className="mb-3">
                    <label>First Name</label>
                    <input type ="text" class="form-control" placeholder="First Name" />
                </div>

                <div className="mb-3">
                    <label>Last Name</label>
                    <input type ="text" class="form-control" placeholder="Last Name"/>
                </div>

                <div className="mb-3">
                    <label>Email</label>
                    <input type ="email" class="form-control" placeholder="Enter email"/>
                </div>

                <div className="mb-3">
                    <label>Position</label>
                    <input type ="text" class="form-control" placeholder="Enter position"/>
                </div>

                <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Add Emplyee
                </button>
            </div>
            </form>
        </div>
    }
}