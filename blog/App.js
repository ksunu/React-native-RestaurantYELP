import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Provider } from "./src/context/Blog-context";
import IndexScreen from "./src/screens/Index-screen";
import ShowScreen from "./src/screens/Show-screen";
import CreateScreen from "./src/screens/Create-screen";
import EditScreen from "./src/screens/Edit-screen";

const navigator = createStackNavigator({
  Index: IndexScreen,
  Show: ShowScreen,
  Create: CreateScreen,
  Edit: EditScreen
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
});

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};