import React, {Component} from 'react';
import SanicProfileItem from './SanicProfileItem';

class SanicProfile extends Component {
componentWillMount(){
console.log('CURRENT',this.props.currentSanic);
}
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
