const RSS_URL = `https://pinecast.com/feed/materialism`;

fetch(RSS_URL)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    console.log(data);
    const items = data.querySelectorAll("item");
    let html = ``;
    items.forEach(el => {
      html += `
        <div class="card border-white mb-3 bg-transparant rounded-0">
            <div class="card-body">
                <div class="card-header border-white mb-3 px-0">
                    <h5 class='text-white card-title'>${el.querySelector("title").innerHTML}</h5>
                </div>
                <p>${el.querySelector("description").innerHTML}</p>
                <audio controls>
                    <source src="${el.querySelector("enclosure").getAttribute('url')}" type="audio/mpeg">
                </audio>
            </div>
        </div>
      `;
    });
    document.getElementById("episode_list").insertAdjacentHTML("beforeend", html);
  });
