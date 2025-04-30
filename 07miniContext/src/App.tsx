import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import UserContextProvider from './context/UserContextProvider';

function App() {
  return (
    <UserContextProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 flex flex-col items-center justify-center px-20">
        
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 space-y-6">
          <Login />
          <Profile />
        </div>
      </div>
    </UserContextProvider>
  );
}

export default App;
