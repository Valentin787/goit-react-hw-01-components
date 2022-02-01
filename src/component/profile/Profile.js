import ProfileRender from "./ProfileRender";
import PropTypes from "prop-types";
import s from "./Profile.module.css";

export default function Profile({ users }) {
  return (
    <>
      <ProfileRender
        url={users.avatar}
        username={users.username}
        tag={users.tag}
        location={users.location}
        followers={users.stats.followers}
        views={users.stats.views}
        likes={users.stats.likes}
      />
    </>
  );
}

Profile.propTypes = {
  url: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
