const btnCategory = document.getElementById("category-button");
const videoContainer = document.getElementById("video-container");
function loadCategory() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => showCategory(data.categories))
    .catch((err) => console.log(err));
}
function loadVides() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => showVideo(data.videos))
    .catch((err) => console.log(err));
}

const showCategory = (items) => {
  items.forEach((element) => {
    const button = document.createElement("div");
    button.innerHTML = `
    <button class="btn btn-outline">${element.category}</button>
    `;
    // console.log(element.category);
    btnCategory.appendChild(button);
  });
};

const showVideo = (items) => {
  items.forEach((element) => {
    const videoCard = document.createElement("div");
    videoCard.innerHTML = `
    <div class="card card-compact border-2">
          <figure>
            <img class="h-[210px] object-cover"
              src="${element.thumbnail}"
              alt="video image"
            />
          </figure>
          <div class="flex gap-2 pt-2">
            <div>
              <img class="w-8 h-8 rounded-full my-2 " src="${
                element.authors[0].profile_picture
              }" alt="" />
            </div>
            <div>
              <h2 class="card-title">${element.title}</h2>
              <div class="flex items-center gap-2">
                <p class="text-gray-600 text-xs font-semibold">${
                  element.authors[0].profile_name
                }</p>
                ${
                  element.authors[0].verified === true
                    ? `<img class="w-3 h-3" src="./assists/verified.png" />`
                    : ""
                }
                
              </div>
              <p class="text-gray-600 text-xs mt-2 mb-5"> Views : ${
                element.others.views
              }</p>
            </div>
          </div>
        </div>
    `;
    videoContainer.appendChild(videoCard);
    // console.log(element);
  });
};

loadCategory();
loadVides();
