import Profile from "./component/profile/Profile";
import Statistics from "./component/statistics/Statistics";
import Friends from "./component/friends/Friends";
import Transactions from "./component/transactions/Transactions";
import user from "./user.json";
import data from "./data.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Profile users={user} />
      <Statistics title={"Upload stats"} stats={data} />
      <Friends friend={friends} />
      <Transactions data={transactions} />
    </div>
  );
}

export default App;
