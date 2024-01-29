//import logo from './logo.svg';
import './App.css';
import BasicExample from './components/item';


function App() {
  return (
    <div className="App">

      <BasicExample
        title='Card Title'
        imageSrc='https://picsum.photos/300/200'
        description=' Some quick example text to build on the card title and make up the
          bulk of the cards content.'
        price='$99' />
      <BasicExample
        title='Card Title'
        imageSrc='https://picsum.photos/300/200'
        description=' Some quick example text to build on the card title and make up the
          bulk of the cards content.'
        price='$99' />
      <BasicExample
        title='Card Title'
        imageSrc='https://picsum.photos/300/200'
        description=' Some quick example text to build on the card title and make up the
          bulk of the cards content.'
        price='$99' />
      <BasicExample
        title='Card Title'
        imageSrc='https://picsum.photos/300/200'
        description=' Some quick example text to build on the card title and make up the
          bulk of the cards content.'
        price='$99' />



    </div>
  );
}

export default App;
