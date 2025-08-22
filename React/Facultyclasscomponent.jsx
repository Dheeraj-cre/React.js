import React from "react";

class Faculty extends React.Component {
  render() {
    return (
        <div>
            <h1>Faculty Component</h1>
            <h2>Faculty Name:{this.props.name}</h2>
            <h2>Course:{this.props.course}</h2>
            <h2>Duration:{this.props.duration}</h2>
        </div>
    );
  }
}
export default Faculty;