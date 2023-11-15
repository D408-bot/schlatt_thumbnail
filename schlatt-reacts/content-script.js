function ImagePosition(thumbnailElement, ImageURL) {
  if (thumbnailElement.nodeName == "IMG") {
    const BigGuy = document.createElement("img");
    BigGuy.src = ImageURL;
    BigGuy.style.position = "absolute";
    BigGuy.style.top = "0";
    BigGuy.style.left = "0";
    BigGuy.style.width = "100%";
    BigGuy.style.height = "100%";
    thumbnailElement.parentElement.appendChild(BigGuy);
  } 
};
function SchlattThumbnail() {
  const elementQueryThumbnail =
    "ytd-thumbnail:not(.ytd-video-preview, .ytd-rich-grid-slim-media) a > yt-image > img.yt-core-image:only-child:not(.yt-core-attributed-string__image-element),.ytp-videowall-still-image:not([style*='extension:'])";
  const thumbnailElements = document.querySelectorAll(elementQueryThumbnail);

  thumbnailElements.forEach((thumbnailElement) => {
     
    let ImageURL;
      
    ImageURL = getImageURL(getRandomInt());
      
    ImagePosition(thumbnailElement, ImageURL);
    
  });
}
function getImageURL(index) {
  return chrome.runtime.getURL(`images/schlatt${index}.png`);
}

function getRandomInt() {
    return Math.floor(Math.random() * 12);
  }

setInterval(SchlattThumbnail, 100);
//thank you mr beast extension pls dont sue