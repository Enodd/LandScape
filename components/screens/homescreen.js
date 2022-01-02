import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import styled from 'styled-components/native';
import Background from '../background';

const HomeScreen = ({navigation}) =>{

    const {width: viewportWidth, height: viewportHeight } = Dimensions.get("window")

    const ImageBox = styled.View`
      width: ${viewportWidth}px;
      height: 40%;
      background-color: red;
    `
  
    return (
      <Background navigation={navigation}>
        <ImageBox>
          <Text>
            Hello
          </Text>
        </ImageBox>
        <Text>
          Hello There
        </Text>
        <Text>
          How's going?
        </Text>
      </Background>
    )
  }

  export default HomeScreen
  