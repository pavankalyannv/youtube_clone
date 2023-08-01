const GOOGLE_API_KEY = "AIzaSyB8evDC9DPajgGBNuaP5SSQAt1_utGzPt8";

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const COMMENTS_API =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key=" +
  GOOGLE_API_KEY +
  "&videoId=";

export const RELATED_SEARCH =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=17&type=video&key=" +
  GOOGLE_API_KEY +
  "&relatedToVideoId=";

export const SEARCH_TEXT_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=" +
  GOOGLE_API_KEY + "&q=";

export const SIDEBARDATA = [
  {
    icon: "home",
    tabName: "Home",
    url: "/",
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
