import Button from './Button';
import Alert from './Alert'
import Heading from './Heading';
import Header from './Header';

function App() {
  const myStr = "Hello world!";
  return (
    <>
    <Header />
    <br />
    2 + 2 * 2 = { 2 + 2 * 2 }
    <br />
    React says: {myStr}
    <br />
    <Heading />
    <br />
    <Button />
    <br />
    <Alert />
    </>
  )
}

export default App
