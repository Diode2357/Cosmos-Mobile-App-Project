import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  ScrollView,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { WebView } from "react-native-webview";

const Info = [
  {
    filePath: require("./assets/planet_CANCRI.png"),
    name: "55 Cancri e",
    type: "Exoplanet",
    date: "30 August 2004",
    distance: "40 light years",
    info: `55 Cancri e is a solid planet made of carbon-rich material rather than the oxygen-rich material that makes up the terrestrial planets in the Solar System. In this case,
      roughly a third of the planet's mass would be carbon, much of which may be in the form of diamond as a result of the temperatures and pressures in the planet's interior.
    
`,
  },
  {
    filePath: require("./assets/planet_DENIS_P.png"),
    name: "HR 2562 b",
    type: "Substellar Companion",
    date: "23 August 2016",
    distance: "109.7 light years",
    info: `According to NASA Exoplanet Archive, with a mass of
      30 MJ, it is listed as the most massive planet.is a substellar companion of debris disk host star HR 2562.
      Initially categorised as brown dwarf, its exact mass is unknown, and is thought to be 30 ± 15 Jupiter masses,and its luminosity is about two one-thousandths of a percent of a solar luminosity.
      If classified as a brown dwarf, its spectral type would be L7±3.It was first observed in 2016 using the Gemini Planet Imager.`,
  },
  {
    filePath: require("./assets/planet_KELP9B.png"),
    name: "KELT-9B",
    type: "Exoplanet",
    date: "2017",
    distance: "670 light years from eart",
    info: `As of January 2020, KELT-9b is one of the hottest known exoplanets, with dayside temperatures approaching 4,600 K, warmer than many low-mass stars.
    As of January 2020, KELT-9b is one of the hottest known exoplanets, with dayside temperatures approaching 4,600 K, warmer than many low-mass stars.
    Molecules on the day side are broken into their component atoms, such that normally sequestered refractory elements can exist as atomic species, including neutral and singly ionized atomic iron (Fe and Fe+) and
    singly ionized titanium (Ti+),only to temporarily reform once they reach the cooler night side.`,
  },
  {
    filePath: require("./assets/planet_OGLE.png"),
    name: "OGLE-2005-BLG-390Lb",
    type: "Super-Earth Exoplanet",
    date: "10 August 2005",
    distance: "21,500 ± 3,300 light years from Earth",
    info: `AIts distance from the star, and the star's relatively low temperature, means that the planet's likely surface temperature is around 50 K (−220 °C; −370 °F), making it one of the coldest known.
      If it is a rocky world, this temperature would make it likely that the surface would be made of frozen volatiles, substances which would be liquids or gases on Earth: water, ammonia, methane
      and nitrogen would all be frozen solid.`,
  },
  {
    filePath: require("./assets/planet_WASP12b.png"),
    name: "WASP-12b",
    type: "Extrasolar Planet",
    date: "April 1, 2008",
    distance: "870.8 light years",
    info: `WASP-12b absorbs 94% of the light shining on its surface, resulting in a very low albedo, the amount of light the exoplanet reflects.
    In September 2017, researchers, working on the HST, announced that WASP-12b absorbs, instead of reflects, at least 94% of the light that shines on its surface.
    As a result, the exoplanet has been described as "black as asphalt", and as "pitch black" and is a type of planet known as a hot Jupiter.`,
  },

  {
    filePath: require("./assets/planet_DENIS_P.png"),
    name: "Kepler-186f",
    type: "Exoplanet",
    date: "2014",
    distance: "561 light yearss",
    info: `Kepler-186f was the first rocky planet to be found within the habitable zone -- the region around the host star where the temperature is right for liquid water. This planet is also very close in size to Earth.
Even though we may not find out what's going on at the surface of this planet anytime soon, it's a strong reminder of why new technologies are being developed that will enable scientists to get a closer look at distant worlds.
`,
  },

  {
    filePath: require("./assets/planet_KELP9B.png"),
    name: "HD 209458 b ",
    type: "Hot Jupiter",
    date: "1999",
    distance: "158 light years",
    info: `The first planet to be seen in transit (crossing its star) and the first planet to have it light directly detected. The HD 209458 b transit discovery showed that transit observations were feasible and opened up an entire new realm of exoplanet characterization.
      It is an extrasolar planet with an astounding list of firsts: the first extrasolar planet discovered transiting its sun, the first with an atmosphere,
      the first observed to have an evaporating hydrogen atmosphere (in 2003 by the same team of scientists)
      and now the first to have an atmosphere containing oxygen and carbon.
      Furthermore the 'blow-off' effect observed by the team during their October and November 2003 observations with Hubble had never been seen before.
`,
  },

  {
    filePath: require("./assets/planet_earth.png"),
    name: "KEPLER-10b",
    type: "Super Earth",
    date: "2011",
    distance: "608 light yearss",
    info: `Info Kepler's first rocky planet discovery is a scorched, Earth-size world that scientists believe may have a lava ocean on its surface.
      Kepler-10, the star that hosts Kepler-10b, is located 560 light-years from the Solar System in the Draco constellation.
      It is approximately the same size as the Sun, with an estimated age of 12 billion years.
      Planet Kepler-10b was the first planet to be discovered in the orbit of its star. For this, it was designated the star's b planet.
      The star, in turn, was named for the Kepler Mission, a NASA-led operation aimed at discovering terrestrial planets that transit, or cross in front of, their host stars with respect to Earth.
      The planet's discovery was announced to the public on January 10, 2011.`,
  },
];

const Terms = [
  {
    term: "Absolute Zero",
    defintion:
      "The temperature at which the motion of all atoms and molecules stops and no heat is given off. Absolute zero is reached at 0 degrees Kelvin or -273.16 degrees Celsius.",
  },
  {
    term: "Ablation",
    defintion:
      "A process by where the atmosphere melts away and removes the surface material of an incoming meteorite",
  },
  {
    term: "Albedo",
    defintion:
      "The reflective property of a non-luminous object. A perfect mirror would have an albedo of 100% while a black hole would have an albedo of 0%.",
  },
  {
    term: "Big Bang ",
    defintion:
      "The theory that suggests that the universe was formed from a single point in space during a cataclysmic explosion about 13.7 billion years ago. This is the current accepted theory for the origin of the universe and is supported by measurements of background radiation and the observed expansion of space.",
  },
  {
    term: "Black Hole",
    defintion:
      "The collapsed core of a massive star. Stars that are very massive will collapse under their own gravity when their fuel is exhausted. The collapse continues until all matter is crushed out of existence into what is known as a singularity. The gravitational pull is so strong that not even light can escape.",
  },
  {
    term: "Bolide",
    defintion:
      "A term used to describe an exceptionally bright meteor. Bolides typically will produce a sonic boom.",
  },
  {
    term: "Cosmogony",
    defintion:
      "The study of celestial systems, including the Solar System, stars, galaxies, and galactic clusters.",
  },
  {
    term: "Dark Matter",
    defintion:
      "A term used to describe matter in the universe that cannot be seen, but can be detected by its gravitational effects on other bodies.",
  },
  {
    term: "Doppler Effect",
    defintion:
      "The apparent change in wavelength of sound or light emitted by an object in relation to an observer's position. An object approaching the observer will have a shorter wavelength (blue) while an object moving away will have a longer (red) wavelength.",
  },
];

const videos = [
  {
    url: "https://www.youtube.com/embed/ijFm6DxNVyI",
    thumbnail: require("./assets/videosImage_vacuum.jpg"),
    title: "The Most Efficient Way to Destroy the Universe – False Vacuum",
    courtesy: "Kurzgesagt - in a nutshell",
  },
  {
    url: "https://www.youtube.com/embed/wNDGgL73ihY",
    thumbnail: require("./assets/videosImage_bigBang.jpg"),
    title: "The Beginning of Everything -- The Big Bang",
    courtesy: "Kurzgesagt - in a nutshell",
  },
  {
    url: "https://www.youtube.com/embed/p_8yK2kmxoo",
    thumbnail: require("./assets/videosImage_stars.jpg"),
    title: "The Most Dangerous Stuff in the Universe - Strange Stars Explained",
    courtesy: "Kurzgesagt - in a nutshell",
  },
];

//Start Screen
function screenStart({ navigation }) {
  return (
    <View style={styles.mainViewStyle}>
      <ImageBackground
        source={require("./assets/bg_final.png")}
        style={styles.backgroundImage}
      >
        <Image
          source={require("./assets/icon_app.png")}
          style={styles.appIcon}
        />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Menu");
          }}
        >
          <Image
            source={require("./assets/button_explore.png")}
            style={styles.menuButtons}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Terms");
          }}
        >
          <Image
            source={require("./assets/button_terms.png")}
            style={styles.menuButtons}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Videos");
          }}
        >
          <Image
            source={require("./assets/button_videos.png")}
            style={styles.menuButtons}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("About");
          }}
        >
          <Image
            source={require("./assets/button_about.png")}
            style={styles.menuButtons}
          />
        </TouchableOpacity>

        <View></View>
      </ImageBackground>
    </View>
  );
}

function screenPlanets({ navigation }) {
  const [keyword, setKeyword] = useState("");
  return (
    <ImageBackground
      source={require("./assets/bg_final.png")}
      style={styles.backgroundImage}
    >
      <View style={{ marginRight: 20 }}>
        <Text
          style={{
            marginTop: 15,
            fontSize: 16,
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          SEARCH
        </Text>
      </View>

      <TextInput
        style={styles.inputStyle}
        onChangeText={(text) => setKeyword(text)}
      />

      <ScrollView horizontal={true}>
        {Info.map((info, key) => {
          if (info.name.toLowerCase().includes(keyword.toLowerCase())) {
            return (
              <View key={key} style={styles.mainViewStyle}>
                <View style={styles.itemView}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate(info.name)}
                  >
                    <Image
                      source={info.filePath}
                      style={styles.planetStyle}
                    ></Image>
                  </TouchableOpacity>
                  <Text style={styles.headerStyle}>{info.name}</Text>
                  <Text
                    style={styles.paragStyle}
                  >{`Click for more info.`}</Text>
                </View>
              </View>
            );
          }
        })}
      </ScrollView>
    </ImageBackground>
  );
}

function screenTerms(navigation) {
  const [keyword, setKeyword] = useState("");
  return (
    <ImageBackground
      source={require("./assets/bg_final.png")}
      style={styles.backgroundImage}
    >
      <Text
        style={{
          marginTop: 15,
          fontSize: 16,
          color: "white",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        SEARCH
      </Text>
      <TextInput
        style={styles.inputStyle}
        onChangeText={(text) => setKeyword(text)}
      />
      <ScrollView>
        {Terms.map((term, key) => {
          if (term.term.toLowerCase().includes(keyword.toLowerCase())) {
            return (
              <View key={key}>
                <View
                  style={{
                    marginTop: 30,
                    padding: 10,
                    backgroundColor: "#1b0e3d",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      color: "#aaedff",
                      fontWeight: "bold",
                    }}
                  >
                    {term.term}
                  </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 12, color: "white" }}>
                    {term.defintion}
                  </Text>
                </View>
              </View>
            );
          }
        })}
      </ScrollView>
    </ImageBackground>
  );
}

function screenVideosMenu({ navigation }) {
  const [keyword, setKeyword] = useState("");
  return (
    <ImageBackground
      source={require("./assets/bg_final.png")}
      style={styles.backgroundImage}
    >
      <Text
        style={{
          marginTop: 15,
          fontSize: 16,
          color: "white",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        SEARCH
      </Text>
      <TextInput
        style={styles.inputStyle}
        onChangeText={(text) => setKeyword(text)}
      />
      <ScrollView>
        {videos.map((video, key) => {
          if (video.title.toLowerCase().includes(keyword.toLowerCase())) {
            return (
              <View key={key}>
                <View style={{ marginTop: 15 }}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate(video.title)}
                  >
                    <Image
                      source={video.thumbnail}
                      style={{
                        alignSelf: "center",
                        width: 400,
                        height: 200,
                        marginTop: 50,
                      }}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 14,
                      color: "#aaedff",
                      textAlign: "center",
                    }}
                  >
                    {video.title}
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 12,
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    {video.courtesy}
                  </Text>
                </View>
              </View>
            );
          }
        })}
      </ScrollView>
    </ImageBackground>
  );
}

function screenVideo(props) {
  return (
    <ImageBackground
      source={require("./assets/bg_final.png")}
      style={styles.backgroundImage}
    >
      <WebView
        allowsFullscreenVideo
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction
        style={{ width: 400, height: 210, alignSelf: "center" }}
        source={{ uri: props.route.params.url }}
      />
    </ImageBackground>
  );
}

function screenAbout(navigation) {
  return (
    <ImageBackground
      source={require("./assets/bg_final.png")}
      style={styles.backgroundImage}
    >
      <View style={{ flex: 2, backgroundColor: "" }}>
        <Image
          source={require("./assets/pic_about.png")}
          style={{ width: 350, height: 250, alignSelf: "center" }}
        ></Image>
      </View>
      <View style={{ flex: 4 }}>
        <Text style={{ color: "white", fontSize: 12, textAlign: "center" }}>
          Cosmos aims to provide you information about our vast and mysterious
          universe, Get ready to learn different planets and terms about
          Astronomy
        </Text>

        <Text
          style={{
            color: "white",
            fontSize: 12,
            textAlign: "center",
            marginTop: 10,
          }}
        >
          Regards, Team Dolomite.
        </Text>
      </View>
    </ImageBackground>
  );
}

function InfoDetail(props) {
  return (
    <ImageBackground
      source={require("./assets/bg_final.png")}
      style={styles.backgroundImage}
    >
      <Text style={styles.headerStyle}>{props.route.params.name}</Text>
      <Text style={styles.paragStyle}>Type: {props.route.params.type}</Text>
      <Text style={styles.paragStyle}>
        Date Discovered: {props.route.params.date}
      </Text>
      <Text style={styles.paragStyle}>
        Distance from Earth: {props.route.params.distance}
      </Text>
      <Text style={styles.paragStyle}>{props.route.params.info}</Text>
    </ImageBackground>
  );
}
//Main function
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#1b0e3d",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="Home" component={screenStart} />
        <Stack.Screen name="Menu" component={screenPlanets} />
        <Stack.Screen name="Terms" component={screenTerms} />
        <Stack.Screen name="Videos" component={screenVideosMenu} />
        <Stack.Screen name="About" component={screenAbout} />

        {Info.map((info, key) => (
          <Stack.Screen
            key={key}
            initialParams={{
              name: info.name,
              type: info.type,
              date: info.date,
              distance: info.distance,
              info: info.info,
            }}
            name={info.name}
            component={InfoDetail}
          />
        ))}

        {videos.map((video, key) => (
          <Stack.Screen
            key={key}
            initialParams={{
              url: video.url,
              title: video.title,
            }}
            name={video.title}
            component={screenVideo}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  appTitleText: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },

  appIcon: {
    alignSelf: "center",
    width: 150,
    height: 135,
    marginTop: 10,
    marginBottom: 50,
  },

  menuButtons: {
    alignSelf: "center",
    height: 50,
    width: 300,
    marginTop: 50,
  },

  headerStyle: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },

  paragStyle: {
    fontSize: 10,
    color: "white",
    textAlign: "center",
    marginTop: 10,
  },

  planetStyle: {
    width: 300,
    height: 300,
    alignSelf: "center",
    marginHorizontal: 45,
  },

  backgroundImage: {
    flex: 1,
    width: 420,
    height: 950,
    resizeMode: "stretch",
    justifyContent: "center",
  },

  itemView: {
    marginVertical: 8,
    marginHorizontal: 16,
  },

  itemTitle: {
    textAlign: "center",
  },

  inputStyle: {
    width: "90%",
    color: "white",
    height: 40,
    fontSize: 20,
    padding: 8,
    borderWidth: 2,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#aaedff",
    marginTop: 10,
    marginLeft: 30,
    marginRight: 50,
    alignSelf: "center",
  },
});
