export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li key={friend.id}>
          <span className="status">{friend.isOnline}</span>
          <img src={friend.avatar} alt={friend.name} />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};
