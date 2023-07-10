// import { v4 as uuid } from "uuid";

import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "xhzTkUi2Nt",
    content:
      "You’re braver than you believe, and stronger than you seem, and smarter than you think.",
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
        text: "Good one!!",
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
    content: "Positive anything is better than negative nothing.",
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
      "The struggle you’re in today is developing the strength you need tomorrow.",
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
    content:
      "The happiness of your life depends upon the quality of your thoughts",
    mediaURL: "",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "EO7iOPN9n8",
        username: "michaelsmith",
        text: "Nice one!!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "QK52wf6HI1",
        username: "jackwilliam",
        text: "Much needed this!",
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
      "The more you praise and celebrate your life, the more there is in life to celebrate.",
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
    content:
      "A truly happy person is one who can enjoy the scenery while on a detour.",
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
      "Winning is fun, but those moments that you can touch someone’s life in a very positive way are better.",
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
    content:
      "Be so happy that, when other people look at you, they become happy too.",
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
        text: "Great one!!",
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
    content:
      "Wherever you go, no matter what the weather, always bring your own sunshine.",
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
    content: "You always pass failure on the way to success.",
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
      "The sun himself is weak when he first rises, and gathers strength and courage as the day gets on.",
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
    content: "If opportunity doesn’t knock, build a door",
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
    content: "Success is the sum of small efforts repeated day in and day out.",
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
    content: "It always seems impossible until it is done.",
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
    content: "The only time you fail is when you fall down and stay down.",
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
    content:
      "In every day, there are 1,440 minutes. That means we have 1,440 daily opportunities to make a positive impact.",
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
