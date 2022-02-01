import Profile from "./Profile";
import s from "./Profile.module.css";

export default function ProfileRender({
  url,
  tag,
  location,
  username,
  views,
  followers,
  likes,
}) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={url} alt="User avatar" className={s.avatar} width="150" />
        <p className={s.name}>{username}</p>
        <p className={s.tag}>{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.list}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{followers}</span>
        </li>
        <li className={s.list}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{views}</span>
        </li>
        <li className={s.list}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
