const GOOGLE_API_KEY = "AIzaSyBJ0JeWlx-JFsKbT26FevrJlVSr_wG90Ps";

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const SIDEBARDATA = [
  {
    icon: "home",
    tabName: "Home",
  },
  {
    icon: "play_lesson",
    tabName: "Shorts",
  },
  {
    icon: "subscriptions",
    tabName: "Subscriptions",
  },
];

export const SIDEBARDATA1 = [
  {
    icon: "library_books",
    tabName: "Library",
  },
  {
    icon: "history",
    tabName: "History",
  },
  {
    icon: "timer",
    tabName: "Watch Later",
  },
];
