import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { offsetLimitPagination } from "@apollo/client/utilities";
import './App.css';
import Header from './Components/Header';
import LaunchList from './Components/LaunchList';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          launchesPast: offsetLimitPagination()
        },
      },
    },
  }),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <LaunchList />
    </ApolloProvider>
  );
}

export default App;
