import React, {Component} from 'react';

export default class CreateEmployee extends Component {
    return (){
        <div style={{margin: 10}}>
            <h3>Add New Employee</h3>
            <form>
                <div className="form-group">
                    <label>Employee ID:  </label>
                    <input type ="text" class="form-control" />
                </div>

                <div className="form-group">
                    <label>First Name:  </label>
                    <input type ="text" class="form-control" />
                </div>

                <div className="form-group">
                    <label>Last Name:  </label>
                    <input type ="text" class="form-control" />
                </div>

                <div className="form-group">
                    <label>Email:  </label>
                    <input type ="email" class="form-control" />
                </div>

                <div className="form-group">
                    <label>Position:  </label>
                    <input type ="text" class="form-control" />
                </div>
            </form>
        </div>
    }
}