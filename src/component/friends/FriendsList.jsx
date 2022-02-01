import PropTypes from "prop-types";
import s from "./Friends.module.css";

export default function FriendList({ url, isOnline, name }) {
  return (
    <>
      {isOnline ? (
        <span className={s.statusOnline}>{isOnline}</span>
      ) : (
        <span className={s.statusOfline}>{isOnline}</span>
      )}
      <img className={s.avatar} src={url} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </>
  );
}

FriendList.propTypes = {
  url: PropTypes.string,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
};
