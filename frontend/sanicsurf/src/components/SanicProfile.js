import React, {Component} from 'react';
import SanicProfileItem from './SanicProfileItem';

class SanicProfile extends Component {

  render() {
    const isMobile = window.innerWidth <= 500;
    if (isMobile) {

    } else {

      return (
        <SanicProfileItem />
      )
    }
  }
}

export default SanicProfile;
