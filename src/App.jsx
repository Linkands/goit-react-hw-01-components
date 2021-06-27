import FriendList from "./components/FriendList/FriendList";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import "./App.css";

function App() {
  return (
    <div className="App">
      <FriendList></FriendList>
      <Profile></Profile>
      <Statistics></Statistics>
      <TransactionHistory></TransactionHistory>
    </div>
  );
}

export default App;
