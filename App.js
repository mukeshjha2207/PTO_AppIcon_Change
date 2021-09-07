import React, { Component } from 'react';
import { StyleSheet, Text, View, NativeModules, Button } from 'react-native';
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { isOn: false };
    this.updateStatus();
  }
  turnOn = () => {
    NativeModules.AppIcon.turnOn();
    this.updateStatus()
  }
  turnOff = () => {
    NativeModules.AppIcon.turnOff();
    this.updateStatus()
  }
  updateStatus = () => {
    NativeModules.AppIcon.getStatus((error, isOn) => {
      this.setState({ isOn: isOn });
    })
  }



  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Light App!!</Text>
        <Text> Bulb is {this.state.isOn ? "ON" : "OFF"}</Text>
        {!this.state.isOn ? <Button
          onPress={this.turnOn}
          title="Turn ON "
          color="#FF6347"
        /> :
          <Button
            onPress={this.turnOff}
            title="Turn OFF "
            color="#FF6347"
          />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});