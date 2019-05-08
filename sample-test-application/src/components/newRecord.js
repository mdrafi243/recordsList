import React, { Component } from "react";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton/FlatButton";

class NewRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      sex: ""
    };
  }
  handleNameUpdate = e => {
    console.log(e.target.value);
    this.setState({ name: e.target.value });
  };
  handleAgeUpdate = e => {
    console.log(e.target.value);
    this.setState({ age: e.target.value });
  };
  handleSexUpdate = e => {
    console.log(e.target.value);
    this.setState({ sex: e.target.value });
  };
  updateDataList = () => {
    let formData = {
      name: this.state.name,
      age: this.state.age,
      sex: this.state.sex
    };
    //this.props.updateDataList(formData);
    this.props.history.push({
      pathname: "/",
      state: {
        form: true,
        formData
      }
    });
  };
  render() {
    return (
      <div style={{ margin: "12px" }}>
        <div>
          <TextField
            placeholder="Name"
            style={{ backgroundColor: "black" }}
            name="name"
            value={this.state.name}
            onChange={this.handleNameUpdate}
          />
        </div>
        <div>
          <TextField
            placeholder="Age"
            style={{ backgroundColor: "black" }}
            name="age"
            value={this.state.age}
            onChange={this.handleAgeUpdate}
          />
        </div>
        <div>
          <TextField
            placeholder="Sex"
            style={{ backgroundColor: "black" }}
            name="sex"
            value={this.state.sex}
            onChange={this.handleSexUpdate}
          />
        </div>
        <div>
          <FlatButton
            style={{ backgroundColor: "black", marginTop: "12px" }}
            onClick={this.updateDataList}
          >
            SubmitRecord
          </FlatButton>
        </div>
      </div>
    );
  }
}

export default NewRecord;
