import Header from './components/header';
import Footer from './components/footer';
import AddStduent from './components/addStudent';
import ListStudent from './components/listStudent';
import UpdateStduent from './components/updateStudent';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<ListStudent />} />
        <Route path="/add" element={<AddStduent />} />
        <Route path="/update/:id" element={<UpdateStduent />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
