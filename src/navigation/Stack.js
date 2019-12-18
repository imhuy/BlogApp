import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


// grab tabbed stacks
import TabNavigator from './TabNavigator';
import Content from '../screens/Content';

const StackNavigator = createStackNavigator(
  {
    Main: { screen: TabNavigator },
    Content: { screen: Content },
  },

  {
    headerMode: 'none',
    initialRouteName: 'Main',
  }
);

const App = createAppContainer(StackNavigator);

export default App;
