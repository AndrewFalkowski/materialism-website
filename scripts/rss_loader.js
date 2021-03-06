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
        <li>
  				<div class='episode'>
  				<a href="${el.querySelector("enclosure").getAttribute('url')}" target="_blank" rel="noopener noreferrer">${el.querySelector("title").innerHTML}</a>
            <div class='description'>
              <p>${el.querySelector("description").innerHTML}</p>
            </div>
          </div>
        </li>
      `;
    });
    document.getElementById("episode_list").insertAdjacentHTML("beforeend", html);
  });
