
import React, { Component } from 'react'
import './Style.css'


export class ClassHandson extends Component {
    state = {
        name: "",
        Department: "",
        Rating: "",
        data: []
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        this.setState({ [e.target.Department]: e.target.value })
        this.setState({ [e.target.Rating]: e.target.value })
    }

    formSubmit = () => {
        const ObjData = {
            name: this.state.name,
            Department: this.state.Department,
            Rating: this.state.Rating
        }
        const arr = this.state.data;
        arr.push(ObjData)
        this.setState({ [this.state.data]: arr })
    }
    render() {

        return (
            <div>
                <h1>EMPLOYEE FEEDBACK FORM</h1>
                <div className="listOfAdding">
                    <form>
                        <label id="size">Name : </label>
                        <input  id="moving"  type="text" placeholder="Enter Name" name="name" onChange={this.handleChange} />
                        <label>Department : </label>
                        <input  id="moving2"  type="text" placeholder="Enter Department" name="Department" onChange={this.handleChange} />
                        <label id="size2">Rating : </label>
                        <input  id="moving3"  type="number" placeholder="Enter Rating" name="Rating" onChange={this.handleChange} />
                    </form>
                </div>

                <div className="addBtn">
                    <button type="button" onClick={this.formSubmit}>
                        Submit
                    </button>
                </div>

                <div className="hideCssAdd">
                    {this.state.data.map((item, index) => {
                        return (

                            <span className="hideCssAd" key={index}> Name : {item.name} || Department : {item.Department} || Rating : {item.Rating}</span>

                        );
                    })}
                </div>
            </div>
        )
    }
}

export default ClassHandson


