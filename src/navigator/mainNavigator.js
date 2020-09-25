import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignUp12110390Navigator from '../features/SignUp12110390/navigator';
import SignIn43110389Navigator from '../features/SignIn43110389/navigator';
import Dashboard13110388Navigator from '../features/Dashboard13110388/navigator';
import BlankScreen0110387Navigator from '../features/BlankScreen0110387/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignUp12110390: { screen: SignUp12110390Navigator },
SignIn43110389: { screen: SignIn43110389Navigator },
Dashboard13110388: { screen: Dashboard13110388Navigator },
BlankScreen0110387: { screen: BlankScreen0110387Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
