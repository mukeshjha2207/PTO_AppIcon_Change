import React, { Component } from 'react';
import { StyleSheet, Text, View, NativeModules, Button } from 'react-native';
//https://medium.com/hackernoon/react-native-bridge-for-ios-and-android-43feb9712fcb
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { icon: '' };
    this.updateStatus();
  }
  toggleIcon = () => {
    NativeModules.AppIcon.setAppIcon(this.state.icon == 'K2Bank' ? "BeyondBank" : "K2Bank");
    this.updateStatus()
  }

  updateStatus = () => {
    NativeModules.AppIcon.getStatus((error, icon) => {
      this.setState({ icon: icon });
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Current Icon is {this.state.icon}</Text>
        <Button
          onPress={this.toggleIcon}
          title="Toggle App Icon "
          color="#FF6347"
        />
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