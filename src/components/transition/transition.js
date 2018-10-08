import React, { PureComponent } from 'react';
import posed, { PoseGroup } from 'react-pose';
import Head from 'components/head';
import Header from 'components/header';
const timeout = 150;

class Transition extends PureComponent {
  render() {
    const { children, location } = this.props;

    const RoutesContainer = posed.div({
      enter: { opacity: 1, delay: timeout, y:0, delayChildren: timeout },
      exit: { opacity: 0, y:50, },
    });

    // To enable page transitions on mount / initial load,
    // use the prop `animateOnMount={true}` on `PoseGroup`.
    return (
      <PoseGroup>
       <Head />
    <Header  />
        <RoutesContainer key={location.pathname}>{children}</RoutesContainer>
      </PoseGroup>
    );
  }
}

export default Transition;
