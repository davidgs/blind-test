import React from "react";

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }
  render() {
    const data = this.props.data
    if(data.data.length > 0) {
      return (
        data.data.map((item, index) => {
          if (item._id === '') {
            return (
              <option key={index} value={item._id} selected disabled>{item.Name}</option>
            )
          } else {
            return (
              <option key={index} value={item._id}>{item.Name}</option>
            )
          }
        })
      )
    }
    else {
      return (
        <option value="">No {this.props.name}</option>
      )
    }
  }
}

export default Options;