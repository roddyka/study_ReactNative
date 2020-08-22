import React from "react";
import styled from "styled-components";
import { Button } from "react-native";
import { TouchableOpacity, StatusBar } from "react-native";
import { Icon } from "expo";
import { Ionicons } from "@expo/vector-icons";
import { WebView } from "react-native-webview";

class SectionScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    StatusBar.setBarStyle("light-content", true);
  }

  componentWillUnmount() {
    StatusBar.setBarStyle("dark-content", true);
  }

  render() {
    const { navigation } = this.props;
    const section = navigation.getParam("section");

    return (
      <Container>
        <StatusBar hidden />
        <Cover>
          <Image source={section.image} />
          <Wrapper>
            <Logo source={section.logo} />
            <Subtitle>{section.subtitle}</Subtitle>
          </Wrapper>
          <Title>{section.title}</Title>
          <Caption>{section.caption}</Caption>
        </Cover>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.goBack();
          }}
          style={{
            position: "absolute",
            top: 20,
            right: 20,
          }}
        >
          <CloseView>
            <Ionicons
              name="ios-close"
              size={36}
              style={{ marginTop: -2 }}
              color="#4775f2"
            />
          </CloseView>
        </TouchableOpacity>
        <DivCard>
          <WebView
            source={{
              html:
                '<iframe allowfullscreen="false" frameborder="0" scrolling="no" src="https://player.twitch.tv/?channel=masteerxd&parent=www.example.com&autoplay=false" height="100%" width="100%"> </iframe>',
            }}
            style={{ marginTop: 0 }}
          />
        </DivCard>
      </Container>
    );
  }
}

export default SectionScreen;
const DivCard = styled.View`
  background: white;
  width: 90%;
  height: 280px;
  border-radius: 14px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Container = styled.View`
  flex: 1;
`;

const Cover = styled.View`
  height: 375px;
`;

const Image = styled.Image`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  background: #3c4560;
`;

const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: bold;
  width: 170px;
  position: absolute;
  top: 78px;
  left: 20px;
`;

const Caption = styled.Text`
  color: white;
  font-size: 17;
  position: absolute;
  bottom: 20px;
  left: 20px;
  max-width: 300px;
`;

const CloseView = styled.View`
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 22px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Wrapper = styled.View`
  flex-direction: row;
  position: absolute;
  top: 40px;
  left: 20px;
  align-items: center;
`;

const Logo = styled.Image`
  width: 24px;
  height: 24px;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  margin-left: 5px;
  text-transform: uppercase;
`;
