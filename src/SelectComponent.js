import React from "react";
import Options from './Options'

class SelectComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
      return (
        <div>
          <form>
            <select id={this.props.name} defaultValue:  className="form-control">
              <Options data={this.props} />
            </select>
          </form>
        </div>
      );
  }
}

export default SelectComponent