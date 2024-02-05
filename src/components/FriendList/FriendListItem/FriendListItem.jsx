import css from './FriendListItem.module.css';

const FriendListItem = ({ isOnline, avatar, name }) => (
  <li className={css.item}>
    <span className={isOnline ? css.status__true : css.status__false}></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width={48} />
    <p className={css.name}>{name}</p>
  </li>
);

export default FriendListItem;
