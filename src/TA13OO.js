import React from 'react';

class TA13OO extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tabooString: "",
    }
    this.handleChange = this.handleChange.bind(this);
    this.convert = this.convert.bind(this);

  }
  convert() {
    var tabooString = this.state.tabooString;
    tabooString = tabooString.toUpperCase();
    tabooString = tabooString.replace(/B/g, '13');
    tabooString = tabooString.replace(/I/g, '1');
    tabooString = tabooString.replace(/S/g, 'Z');
    this.setState({tabooString: tabooString});


  }

  handleChange(event) {
    this.setState({tabooString: event.target.value});
  }
  
  render() {
    return (
        <div>
          <h1>TA13OO GENERATOR</h1>
            <textarea name="original" id="" cols="30" rows="10" value={this.state.tabooString} onChange={this.handleChange}></textarea>
            <button onClick={this.convert}>Convert</button>
        </div>
    )
  }
}

export default TA13OO;