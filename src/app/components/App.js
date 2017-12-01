import React from 'react';
import '../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

const App = () => {
  return(
    <div className="container">
      {this.props.children}
    </div>
  );
}

export default App;