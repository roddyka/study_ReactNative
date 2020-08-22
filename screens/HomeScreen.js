import React from "react";
import {
  Text,
  ScrollView,
  SafeAreaView,
  Animated,
  Easing,
  StatusBar,
} from "react-native";
import styled from "styled-components";
import Card from "../components/Card";
import { Icon } from "expo";
import { Ionicons } from "@expo/vector-icons";
import { NotificationIcon } from "../components/Icons";
import Logo from "../components/Logo";
import Course from "../components/Course";
import Menu from "../components/Menu";
import { TouchableOpacity, Dimensions } from "react-native";
import { connect } from "react-redux";
import Avatar from "../components/Avatar";

function mapStateToProps(state) {
  return { action: state.action, name: state.name };
}

function mapDispatchToProps(dispatch) {
  return {
    openMenu: () =>
      dispatch({
        type: "OPEN_MENU",
      }),
  };
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    scale: new Animated.Value(1),
    opacity: new Animated.Value(1),
  };

  componentDidMount() {
    StatusBar.setBarStyle("dark-content", true);
  }
  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    if ((this.props.action = "openMenu")) {
      Animated.timing(this.state.scale, {
        toValue: 0.9,
        duration: 300,
        easing: Easing.in(),
      }).start();
      Animated.spring(this.state.opacity, {
        toValue: 0.5,
      }).start();

      StatusBar.setBarStyle("light-content", true);
    }

    if (this.props.action == "closeMenu") {
      Animated.timing(this.state.scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.in(),
      }).start();
      Animated.spring(this.state.opacity, {
        toValue: 1,
      }).start();

      StatusBar.setBarStyle("dark-content", true);
    }
  };

  render() {
    return (
      <RootView>
        <Menu />
        <AnimatedContainer
          style={{
            transform: [{ scale: this.state.scale }],
            opacity: this.state.opacity,
          }}
        >
          <SafeAreaView>
            <ScrollView style={{ height: "100%" }}>
              <TitleBar>
                <TouchableOpacity
                  onPress={this.props.openMenu}
                  style={{ position: "absolute", top: 0, left: 0 }}
                >
                  <Avatar />
                </TouchableOpacity>
                <Title>Well come, back</Title>

                <Name>{this.props.name}</Name>
                <NotificationIcon
                  style={{ position: "absolute", right: 20, top: 5 }}
                />
              </TitleBar>
              <Subtitle>Games</Subtitle>
              <ScrollView
                style={{
                  flexDirection: "row",
                  padding: 20,
                  paddingLeft: 15,
                  paddingTop: 20,
                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {logos.map((logo, index) => (
                  <Logo key={index} image={logo.image} text={logo.text} />
                ))}
              </ScrollView>
              <Subtitle>Live Tournaments</Subtitle>
              <ScrollView
                horizontal={true}
                style={{ paddingBottom: 30 }}
                showsHorizontalScrollIndicator={false}
              >
                {cards.map((card, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      this.props.navigation.push("Section", {
                        section: card,
                      });
                    }}
                  >
                    <Card
                      title={card.title}
                      image={card.image}
                      logo={card.logo}
                      caption={card.caption}
                      subtitle={card.subtitle}
                    />
                  </TouchableOpacity>
                ))}
              </ScrollView>
              <Subtitle>Courses</Subtitle>
              {courses.map((course, index) => (
                <Course
                  key={index}
                  image={course.image}
                  title={course.title}
                  subtitle={course.subtitle}
                  logo={course.logo}
                  author={course.author}
                  avatar={course.avatar}
                  caption={course.caption}
                />
              ))}
            </ScrollView>
          </SafeAreaView>
        </AnimatedContainer>
      </RootView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const RootView = styled.View`
  background: black;
  flex: 1;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 50px;
  text-transform: uppercase;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Title = styled.Text`
  font-size: 16px;
  color: black;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const logos = [
  {
    image: require("../assets/logo-pubg.png"),
    text: "PUBG",
  },
  {
    image: require("../assets/logo-fortinite.jpeg"),
    text: "Fortinite",
  },
  {
    image: require("../assets/logo-csgo.png"),
    text: "CS:GO",
  },
  {
    image: require("../assets/logo-minecraft.png"),
    text: "Minecraft",
  },
  {
    image: require("../assets/logo-fifa.png"),
    text: "FIFA",
  },
  {
    image: require("../assets/logo-heartstone.png"),
    text: "Heartstone",
  },
];

const cards = [
  {
    title: "LIVE NOW",
    image: require("../assets/wallpaper-fortinite-fog.png"),
    subtitle: "Fortnite",
    caption: "1 Tournaments",
    logo: require("../assets/logo-fortinite.jpeg"),
  },
  {
    title: "LIVE NOW",
    image: require("../assets/wallpaper-csgo-fog.png"),
    subtitle: "CS:GO",
    caption: "55 Tournaments",
    logo: require("../assets/logo-csgo.png"),
  },
];

const courses = [
  {
    title: "How to create your first streaming on Twitch",
    subtitle: "3 Videos",
    image: require("../assets/wallpaper-fortinite-fog.png"),
    logo: require("../assets/logo-twitch.png"),
    author: "Rod Antunes",
    avatar: require("../assets/img-rod.jpg"),
    caption: "Creating you channel to streaming",
  },
  {
    title: "Why Facebook Gaming is the best to you now?",
    subtitle: "12 Videos",
    image: require("../assets/wallpaper-fortinite-fog.png"),
    logo: require("../assets/logo-facebook.png"),
    author: "Rod Antunes",
    avatar: require("../assets/img-rod.jpg"),
    caption: "Let's create your Gaming Page",
  },
];
