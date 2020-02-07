import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Main from './pages/main';
import Product from './pages/product';

const RootStack = createStackNavigator(
  {
    Main,
    Product,
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#DA552F',
      },
      headerTintColor: '#fff',
    },
  },
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
