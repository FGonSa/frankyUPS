
import { StyleSheet, Text, View } from 'react-native';
import {TailwindProvider} from 'tailwind-rn';       
import utilities from './tailwind.json';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigator/RootNavigator';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://dashboard.stepzen.com/explorer?endpoint=api%2Fhusky-data',
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
