import logo from './logo.svg';
import './App.css';
import Gallery from './component/Gallery';
import Page from './component/Page';
import From from './component/Form';
import FeedbackForm from './component/FeedbackForm';
import Counter from './component/Counter';
import UseStateForm from './component/UseStateForm';
import UseStateFormSingleEvent from './component/UseStateFormSingleEvent';
import UpdateList from './component/UpdateList';
import FormManagingState from './component/managingState/FormManagingState';

function App() {
  return (
    <>
     {/* <From/> 
     <FeedbackForm/>

     
     <Counter/>

     <UseStateForm/>

     <UpdateList/>
*/}
     <FormManagingState/>
    </>
  );
}

export default App;
