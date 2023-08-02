

function loadMoreBillboards() {
  const loadMoreButton = document.querySelector(".load-more-button");
  const billboardContainer = document.querySelector(".billboard-location");
  const billboardInfoDivs = document.querySelectorAll(".billboard-info");

  if (loadMoreButton.textContent === "Load More") {
    for (let i = 4; i < billboardInfoDivs.length; i++) {
      billboardInfoDivs[i].style.display = "flex";
    }
    loadMoreButton.textContent = "Show Less";
  } else {
    for (let i = 4; i < billboardInfoDivs.length; i++) {
      billboardInfoDivs[i].style.display = "none";
    }
    loadMoreButton.textContent = "Load More";
  }
