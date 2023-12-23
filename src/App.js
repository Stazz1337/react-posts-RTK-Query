import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Posts from './pages/Posts';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts/:id' element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;
