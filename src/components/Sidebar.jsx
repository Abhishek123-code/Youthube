import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //Early return pattern
  if (!isMenuOpen) return null;

  return (
    <div className="flex-shrink-0 p-5 w-52 shadow-2xl ">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Subscription</li>
        <li>Youtube Music</li>
      </ul>
      <h1 className="font-bold pt-5">You</h1>
      <ul>
        <li>History</li>
        <li>Playlist</li>
        <li>Your videos</li>
        <li>Your courses</li>
        <li>Watch later</li>
        <li>Liked videos</li>
        <li>Downloads</li>
      </ul>
      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
      </ul>
    </div>
  );
};
export default Sidebar;
