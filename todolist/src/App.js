import React, { Component } from 'react';

/**
 * {component}  ------- > 
 * import React from 'react';
 * class App extends React.component { ... }
 * 
 * 等价于
 * 
 * import { Component } from 'react';
 * const Component = React.Component;
 */

class App extends Component {
  render() {
    return (
      <div>
        hello world
      </div>
    );
  }
}

export default App;
