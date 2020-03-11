import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components'
import AppTest from './src/test';


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      test: 'apps'
    }
  }
  render() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Hello, world!555</Text>
          <Text>222222</Text>
          <View></View>
          <AppTest text={this.state.test} />
          <Headertitle> header Title 222</Headertitle>
          <Headertitle> header Title </Headertitle>
          <LogoImageTitle>888</LogoImageTitle>
          <LogoImageTitle>888</LogoImageTitle>
        </View>
    );
  }
}

const Headertitle = styled.Text`
  font-size: 30px;
  color: red;
`
const LogoImageTitle = styled.Text`
  font-size: 40px;
  color: orange;
`

export default App