import Buttonlist from "./ButtonsLIst";
import VideoContainer from "./VideoContainer";

const Maincontainer = () => {
  return (
    <div className="flex-grow w-[calc(100vw-208px)] max-w-full pl-6">
      <Buttonlist />
      <VideoContainer />
    </div>
  );
};

export default Maincontainer;
