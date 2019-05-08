import React, { Component } from "react";
import DataList from "./dataList";
import FlatButton from "material-ui/FlatButton/FlatButton";

const appData = [
  {
    name: "Mohammad",
    age: 31,
    sex: "Male"
  },
  {
    name: "Ravish",
    age: 32,
    sex: "Male"
  },
  {
    name: "Sif",
    age: 28,
    sex: "Female"
  }
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      data: appData
    };
  }
  componentDidMount = () => {
    if (
      this.props.location.state !== undefined &&
      this.props.location.state.form
    ) {
      let data = [...this.state.data, this.props.location.state.formData];
      this.setState({ data });
    }
  };
  showAddRecord = () => {
    this.props.history.push("./newrecord");
  };

  updateDataList = formData => {};
  render() {
    return (
      <div>
        <FlatButton
          style={{ backgroundColor: "green", marginTop: "12px" }}
          onClick={this.showAddRecord}
        >
          Add a Record
        </FlatButton>
        <DataList appData={this.state.data} />
      </div>
    );
  }
}

export default Home;
