// import { v4 as uuid } from "uuid";

import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "xhzTkUi2Nt",
    content: "hello literally everyone",
    mediaURL: "",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "okzxcf",
        username: "jackwilliam",
        text: "Hey Taylor!!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "Taylor_Swift",
    createdAt: "2023-06-20T20:55:06+05:30",
    updatedAtAt: "2023-06-20T20:55:06+05:30",
  },
  {
    _id: "siFFxfYI1s",
    content: "Started my poetry! Let's get this started",
    mediaURL:
      "https://res.cloudinary.com/dtrjdcrme/video/upload/v1652188886/upload-socialmedia/oikev6eomsgahnvxcijd.mp4",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "michaelsmith",
    createdAt: "2023-06-21T20:55:06+05:30",
    updatedAt: "2023-06-21T20:55:06+05:30",
  },
  {
    _id: "3XHvLP1fg",
    content: "I started blogging for myself! Will share here soon..",
    mediaURL:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1652188492/upload-socialmedia/cakegif_q11mfm.webp",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "6nImWvImxo",
        username: "jamesrobert",
        text: "Glad to hear,awaiting!!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "jackwilliam",
    createdAt: "2023-06-20T20:55:06+05:30",
    updatedAt: "2023-06-20T20:55:06+05:30",
  },
  {
    _id: "MTYtVhecCj",
    content:
      "You are never too old to set another goal or to dream a new dream.",
    mediaURL: "",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "adarshbalika",
    createdAt: "2023-06-06T20:55:06+05:30",
    updatedAt: "2023-06-06T20:55:06+05:30",
  },
  {
    _id: "3XHvLP9kC",
    content: "Yayy! Its my Birthday Today. Made this cake for myself!",
    mediaURL:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1647064336/ecommerce/chocolatecake4.webp",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "EO7iOPN9n8",
        username: "michaelsmith",
        text: "Happy Birthday! Enjoy your Day!!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "QK52wf6HI1",
        username: "jackwilliam",
        text: "Wow! Looks Amazzing! Happy Birthday!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "adarshbalika",
    createdAt: "2023-06-15T20:55:06+05:30",
    updatedAt: "2023-06-15T20:55:06+05:30",
  },
  {
    _id: "tHaThLyFQh",
    content:
      "Life has got all those twists and turns. You’ve got to hold on tight and off you go.",
    mediaURL: "",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "adarshbalika",
    createdAt: "2023-06-06T20:55:06+05:30",
    updatedAt: "2023-06-06T20:55:06+05:30",
  },
  {
    _id: "G-Gi3lSZP9",
    content: "When you have a dream, you’ve got to grab it and never let go.",
    mediaURL: "",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "adarshbalika",
    createdAt: "2023-06-06T20:55:06+05:30",
    updatedAt: "2023-06-06T20:55:06+05:30",
  },
  {
    _id: "GeMUAdi9mh",
    content:
      "No matter what people tell you, words and ideas can change the world.",
    mediaURL: "",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "adarshbalika",
    createdAt: "2023-06-06T12:55:06+05:30",
    updatedAt: "2023-06-06T12:55:06+05:30",
  },
  {
    _id: "IyUlYXTrzZ",
    content: "Who's up for Pineapple Pastry?",
    mediaURL:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1647064828/ecommerce/pineapplemuffin1.webp",
    likes: {
      likeCount: 20,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "6nIffvImxo",
        username: "mihirajonas",
        text: "Oh! That looks Delicious!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "Taylor_Swift",
    createdAt: "2023-06-20T20:55:06+05:30",
    updatedAt: "2023-06-20T20:55:06+05:30",
  },
  {
    _id: "Ie92xOSVeU",
    content: "Check out this amazing video from Youtube https://youtube.com/",
    mediaURL: "",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "6fgd534s",
        username: "jackwilliam",
        text: "Yes! I am also learning from there!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "henryduo",
    createdAt: "2023-06-12T20:55:06+05:30",
    updatedAt: "2023-06-12T20:55:06+05:30",
  },
  {
    _id: "xhzTkUyfNt",
    content: "Believe in yourself! Rest all will fall in place.",
    mediaURL: "",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "unImWvIzbf",
        username: "Taylor_Swift",
        text: "So True!!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "mihirajonas",
    createdAt: "2023-06-15T20:55:06+05:30",
    updatedAt: "2023-06-15T20:55:06+05:30",
  },
  {
    _id: "CCmJpDnnQQ",
    content:
      "You can get everything in life you want if you will just help enough other people get what they want.",
    mediaURL: "",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "Taylor_Swift",
    createdAt: "2023-06-20T20:55:06+05:30",
    updatedAt: "2023-06-20T20:55:06+05:30",
  },

  {
    _id: "Z_TZT_3EAw",
    content:
      "If you believe something needs to exist, if it's something you want to use yourself, don't let anyone ever stop you from doing it.",
    mediaURL: "",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "jamesrobert",
    createdAt: "2023-06-12T20:55:06+05:30",
    updatedAt: "2023-06-12T20:55:06+05:30",
  },

  {
    _id: "e-knMEsoLq",
    content: "More is lost by indecision than wrong decision.",
    mediaURL: "",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "henryduo",
    createdAt: "2023-06-26T20:55:06+05:30",
    updatedAt: "2023-06-26T20:55:06+05:30",
  },

  {
    _id: "VY14RsXC7G",
    content:
      "The reason we struggle with insecurity is because we compare our behind-the-scenes with everyone else’s highlight reel.",
    mediaURL: "",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "michaelsmith",
    createdAt: "2023-06-20T20:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "l9pedEMjZS",
    content: "If you don’t risk anything, you risk even more.",
    mediaURL: "",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "mihirajonas",
    createdAt: "2023-06-20T20:55:06+05:30",
    updatedAt: "2023-06-20T20:55:06+05:30",
  },

  {
    _id: "lbW4dlCpNC",
    content: "If it makes you nervous, you’re doing it right.",
    mediaURL: "",
    likes: {
      likeCount: 12,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "Taylor_Swift",
    createdAt: "2023-06-20T20:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "k-Vwd2d7Vt",
    content:
      "I learned a long time ago that there is something worse than missing the goal, and that’s not pulling the trigger.",
    mediaURL: "",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "michaelsmith",
    createdAt: "2023-06-14T20:55:06+05:30",
    updatedAt: "2023-06-14T20:55:06+05:30",
  },

  {
    _id: "R2lAuXvK7V",
    content:
      "Success is stumbling from failure to failure with no loss of enthusiasm. Love this quote by Winston Churchill.",
    mediaURL: "",
    likes: {
      likeCount: 12,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "jackwilliam",
    createdAt: "2023-06-20T20:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "G5xd30tMCR",
    content:
      "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
    mediaURL: "",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "henryduo",
    createdAt: "2023-06-14T20:55:06+05:30",
    updatedAt: "2023-06-14T20:55:06+05:30",
  },

  {
    _id: "lF8cnfPAe9",
    content:
      "Life is like riding a bicycle. To keep your balance you must keep moving.",
    mediaURL: "",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "Taylor_Swift",
    createdAt: "2023-06-15T20:55:06+05:30",
    updatedAt: "2023-06-15T20:55:06+05:30",
  },

  {
    _id: "stfTkUi2Nt",
    content:
      "“Do not wait for the perfect time and place to enter, for you are already onstage.",
    mediaURL: "",
    likes: {
      likeCount: 25,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "mihirajonas",
    createdAt: "2023-06-20T20:55:06+05:30",
    updatedAt: "2023-06-20T20:55:06+05:30",
  },

  {
    _id: "quiTkUi2Nt",
    content: "It is a rough road that leads to the heights of greatness.",
    mediaURL: "",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "jackwilliam",
    createdAt: "2023-06-20T20:55:06+05:30",
    updatedAt: "2023-06-20T20:55:06+05:30",
  },
];
