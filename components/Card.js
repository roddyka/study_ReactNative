import React from "react";
import styled from "styled-components";
import { NotificationIcon, WatchLive } from "./Icons";

const Card = (props) => (
  <Container>
    <Cover>
      <Image source={props.image} />
      <TitleCard>
        <Title>{props.title}</Title>
      </TitleCard>
    </Cover>
    <Content>
      <Logo source={props.logo} />
      <Wrapper>
        <Caption>{props.caption}</Caption>
        <Subtitle>{props.subtitle}</Subtitle>
      </Wrapper>
      <Watch></Watch>
    </Content>
  </Container>
);

export default Card;

const Content = styled.View`
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
  height: 80px;
`;
const Logo = styled.Image`
  width: 42px;
  height: 42px;
`;
const Caption = styled.Text`
  color: #3c4560;
  font-size: 20px;
  font-weight: bold;
`;
const Subtitle = styled.Text`
  color: #9ca1ad;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  margin-top: 4px;
`;

const Wrapper = styled.View`
  margin-left: 10px;
`;

const Container = styled.View`
  background: white;
  width: 315px;
  height: 280px;
  border-radius: 14px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
  width: 100%;
  height: 200px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const TitleCard = styled.View`
  background-color: red;
  padding: 10px;
  border-radius: 10px;
  margin-top: 20px;
  margin-left: 20px;
  width: 100px;
`;

const Title = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
  font-style: italic;
`;

const Watch = styled.View``;
