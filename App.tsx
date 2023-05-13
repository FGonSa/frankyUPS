
import { StyleSheet, Text, View } from 'react-native';
import {TailwindProvider} from 'tailwind-rn';       
import utilities from './tailwind.json';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigator/RootNavigator';
import { ApolloClient, InMemoryCache, ApolloProvider, } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://teeli.stepzen.net/api/husky-data/__graphql',
  headers: {'Authorization':'apikey teeli::stepzen.io+1000::f2cb9dbd65f1256a9eaf7e52c9706d614b1bbdb2a0af2d4d616bc16537688587'},
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    // @ts-ignore - TailwindProvider
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
      <NavigationContainer>
        <RootNavigator />
     </NavigationContainer>
     </ApolloProvider>
   </TailwindProvider>
    
  );
}
