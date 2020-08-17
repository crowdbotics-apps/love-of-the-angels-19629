import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps91658Navigator from '../features/Maps91658/navigator';
import Add-Item91657Navigator from '../features/Add-Item91657/navigator';
import Maps91653Navigator from '../features/Maps91653/navigator';
import UserProfile91649Navigator from '../features/UserProfile91649/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps91658: { screen: Maps91658Navigator },
Add-Item91657: { screen: Add-Item91657Navigator },
Maps91653: { screen: Maps91653Navigator },
UserProfile91649: { screen: UserProfile91649Navigator },

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
