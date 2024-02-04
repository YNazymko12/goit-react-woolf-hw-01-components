import css from './Profile.module.css';
import defaultImage from './avatar.jpg';

const Profile = ({
  username = 'User Name',
  tag,
  location,
  avatar = defaultImage,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img className={css.avatar} src={avatar} alt={username} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.item}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
