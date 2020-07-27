import { checkHash, isBrowser, scroller } from "./utils";

let scrollTimeout = null;
export const onRouteUpdate = ({ location }, { offset = 0 }) => {
  cancelAnimationFrame(scrollTimeout);
  scrollTimeout = requestAnimationFrame(() => {
    let windowHash;
  
    if (isBrowser) {
      window.gatsby_scroll_offset = offset;
      windowHash = window.gatsby_scroll_hash;
    }
  
    Boolean(windowHash)
      ? scroller(windowHash, offset)
      : checkHash(location, offset);
  
    if (isBrowser && windowHash) {
      window.gatsby_scroll_hash = undefined;
    }
  });
};
