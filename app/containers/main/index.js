import React, { Component, PropTypes} from 'react';

class MainContainer extends Component {
  render () {
    return <div>
      {this.props.children}
    </div>;
  }
}

MainContainer.propTypes = {
  children: PropTypes.object
};

export default MainContainer;