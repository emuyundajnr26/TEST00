import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const stack = createNativeStackNavigator();

import Home from "./Screens/home";
import Login from "./Screens/login";
import SignUp from "./Screens/Signup";
import welcome from "./Screens/welcome";

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="welcome">
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="welcome" component={welcome} />
        <stack.Screen name="login" component={Login} />
        <stack.Screen name="Signup" component={SignUp} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
