import FriendListItem from './FriendListItem/FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={css.list}>
    {friends.map(({ id, isOnline, avatar, name }) => (
      <FriendListItem
        key={id}
        isOnline={isOnline}
        avatar={avatar}
        name={name}
      />
    ))}
  </ul>
);

export default FriendList;
