import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <>
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <Content />
        </main>
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
