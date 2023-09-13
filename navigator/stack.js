import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import About from '../screens/About';
import Review from '../screens/review';

const screens={
    Home:{
        screen: Home
    } ,
    About:{
        screen: About
    },
    Review:{
        screen: Review
    } ,
   
}

const homestack= createStackNavigator(screens);

export default createAppContainer(homestack);