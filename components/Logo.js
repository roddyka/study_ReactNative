import React from "react";
import styled from "styled-components";

const Logo = (props) => (
  <Container>
    <Image source={props.image} />
    <Text>{props.text}</Text>
  </Container>
);

export default Logo;

const Container = styled.View`
  flex-direction: row;
  height: 50px;
  background: transparent;
  padding: 5px 11px 5px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  align-items: center;
  margin: 0 8px;
`;
const Image = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 10px;
`;
const Text = styled.Text`
  font-weight: 600;
  font-size: 17px;
  margin-left: 8px;
  display: none;
`;
