import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Products from './Products';
import store from '../store';


class App extends React.Component {

  render() {
   

    return (
      <div className="App">
        <Header />
          <div className="content">
            <div className="inner">
              <Products store={store}/>
            </div>
          </div>
        <Footer />
      </div>
    );
  }
}

export default App;