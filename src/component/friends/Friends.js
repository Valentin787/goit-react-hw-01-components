import FriendList from "./FriendsList";
import PropTypes from "prop-types";
import s from "./Friends.module.css";

export default function Friends({ friend }) {
  return (
    <ul className={s.friendList}>
      {friend.map(({ id, name, avatar, isOnline }) => (
        <li key={id} className={s.item}>
          <FriendList url={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
}

Friends.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      avatar: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};
