import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    StatusBar,
} from 'react-native';
import Products from './pages/products';
import ProductDetails from './pages/productDetails';
import ShoppingCard from './pages/shoppingCard';
import HomeHeader from './components/homeHeader';
import Header from './components/header';
import MyCartButtonAnimated from './components/myCartButtonAnimated';

export default function App() {

    const { Navigator, Screen } = createNativeStackNavigator();

    useEffect(() => {
        StatusBar.setHidden(true);
    }, []);

    return (
        <NavigationContainer>
            <Navigator>
                <Screen
                    name='Products'
                    component={Products}
                    options={{
                        headerShown: true,
                        header: () => <HomeHeader />
                    }}
                />
                <Screen
                    name='ProductDetails'
                    component={ProductDetails}
                    options={{
                        header: () => <Header name={'detalhes do produto'} />
                    }}
                />
                <Screen
                    name='ShoppingCard'
                    component={ShoppingCard}
                    options={{
                        header: () => <Header name={'carrinho de compras'} />,
                    }}
                />

            </Navigator>
        </NavigationContainer>
    );
}