import React from 'react';

const WithLogging = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      console.log('Component is rendered:', WrappedComponent.name);
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default WithLogging;
