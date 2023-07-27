import { UserProvider } from './UserContext';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.scss'

function App() {

  return (
    <>
      <div className='App'>
        <UserProvider>
          <Header />
          <Main />
          <Footer />
        </UserProvider>
      </div>
    </>
  )
}

export default App
