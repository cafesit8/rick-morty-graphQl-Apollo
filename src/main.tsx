import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client'
import App from './App.tsx'
import './index.css'
import Context from './context/Context.tsx'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Context>
        <App />
      </Context>
    </ApolloProvider>
  </BrowserRouter>
)
