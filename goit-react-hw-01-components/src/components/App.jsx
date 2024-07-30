import React from 'react';
import Profile from './Profile/Profile.jsx';
import user from './data/user.json';
import Statistics from './Statistics/Statistics.jsx';
import statisticsData from './data/statisticsData.json';
import FriendList from './FriendList/FriendList.jsx';
import friendsData from './data/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx';
import transactionsData from './data/transactionsData.json';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // fontSize: 40,
        color: '#010101',
        backgroundColor: '#E7ECF2',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="UPLOAD STATS" stats={statisticsData} />

      <FriendList friends={friendsData} />

      <TransactionHistory items={transactionsData} />
    </div>
  );
};

export default App;
