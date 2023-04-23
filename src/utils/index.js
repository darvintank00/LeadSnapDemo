export const icons = {
  websiteClicks: new URL("@/assets/icons/website-clicks.png", import.meta.url)
    .href,
  callClicks: new URL("@/assets/icons/call-clicks.png", import.meta.url).href,
  directionRequests: new URL("@/assets/icons/map-location.png", import.meta.url)
    .href,
  reviews: new URL("@/assets/icons/reviews.png", import.meta.url).href,
  categoricalSearches: new URL(
    "@/assets/icons/categorical-searches.png",
    import.meta.url
  ).href,
  yourTopTrafficSources: new URL(
    "@/assets/icons/conversation.png",
    import.meta.url
  ).href,
  mapViews: new URL("@/assets/icons/start-heatmap.png", import.meta.url).href,
  searchViews: new URL("@/assets/icons/search.png", import.meta.url).href,
  discoverySearch: new URL("@/assets/icons/search.png", import.meta.url).href,
  directSearch: new URL("@/assets/icons/search.png", import.meta.url).href,
  directionRequestByZipCode: new URL(
    "@/assets/icons/zip-code.png",
    import.meta.url
  ).href,
  postsSeen: new URL("@/assets/icons/post.png", import.meta.url).href,
  photoViews: new URL("@/assets/icons/photo-views.png", import.meta.url).href,
  conversation: new URL("@/assets/icons/conversation.png", import.meta.url)
    .href,
};

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export function generateString(length) {
  let result = " ";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}
