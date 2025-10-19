import Buttons from "./Buttons";

const Buttonlist = () => {
  const list = [
    "All",
    "Display Device",
    "Comedy Clubs",
    "podcasts",
    "Cricket",
    "CPU",
    "Music",
    "Google Pixel",
    "Standup",
    "APIs",
    "News",
    "Sitcom",
    "Games",
    "Live",
    "South Dubbed",
    "Bollywood",
    "Microsoft",
    "Apple",
  ];
  return (
    <div className="flex justify-between overflow-x-scroll whitespace-nowrap no-scrollbar">
      {list.map((prop) => (
        <Buttons key={prop} name={prop} />
      ))}
    </div>
  );
};
export default Buttonlist;
