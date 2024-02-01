import {
  Routes,
  Route,
} from "react-router-dom";
import Users from './containers/Users/Users';
import Posts from './containers/Posts/Posts';
import Albums from './containers/Albums/Albums';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/user/:userId/posts" element={<Posts />} />
        <Route path="/user/:userId/albums" element={<Albums />} />
    </Routes>
    </div>
  );
}

export default App;
