import { PROFILE_PIC } from "../utils/constants";

const CommentsData = [
  {
    name: "Abhsihek Ojha",
    comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
  {
    name: "Abhsihek Ojha",
    comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [
      {
        name: "Abhsihek Ojha",
        comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [],
      },
      {
        name: "Abhsihek Ojha",
        comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [
          {
            name: "Abhsihek Ojha",
            comment:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            replies: [
              {
                name: "Abhsihek Ojha",
                comment:
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Abhsihek Ojha",
    comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [
      {
        name: "Abhsihek Ojha",
        comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [],
      },
    ],
  },
  {
    name: "Abhsihek Ojha",
    comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
  {
    name: "Abhsihek Ojha",
    comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
];

const Comments = ({ data }) => {
  const { name, comment } = data;
  return (
    <div className="flex bg-gray-100 p-2 rounded-lg my-2">
      <div>{PROFILE_PIC}</div>
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comments, index) => (
    <div>
      <Comments data={comments} key={index} />
      <div className="pl-5 border-l ml-5">
        <CommentsList comments={comments.replies} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="m-2 p-5">
      <h1 className="font-bold text-2xl">Comments:</h1>
      <CommentsList comments={CommentsData} />
    </div>
  );
};

export default CommentsContainer;
