import React, {Component} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Icon extends Component {
  render() {
    return (
      <MaterialCommunityIcons
        name={this.props.name}
        size={this.props.size}
        color={this.props.color}
      />
    );
  }
}
