import React, { Component } from "react";
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableColumn,
  TableRowColumn,
  TableHeaderColumn
} from "material-ui/Table";

class DataList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {
    console.log(this.props.appData);
  };

  render() {
    return (
      <div>
        <h3>Data Table</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Age</TableHeaderColumn>
              <TableHeaderColumn>Sex</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.props.appData.map((record, i) => (
              <TableRow key={i}>
                <TableRowColumn key={2}>{record.name}</TableRowColumn>
                <TableRowColumn key={3}>{record.age}</TableRowColumn>
                <TableRowColumn key={4}>{record.sex}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default DataList;
