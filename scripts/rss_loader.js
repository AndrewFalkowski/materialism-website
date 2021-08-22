const RSS_URL = `https://pinecast.com/feed/materialism`;

fetch(RSS_URL)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    console.log(data);
    const items = data.querySelectorAll("item");
    let html = ``;
    items.forEach(el => {
        const { textContent: dscr } = el.querySelector('description');
        const split_dscr = dscr.split('</p>');
        const first_p = split_dscr[0];
        // const start = `Keywords: `;
        // const end = `</p>`;
        // const keywords = dscr.split(start)[1].split(end)[0];
        const { textContent: date } = el.querySelector('pubDate');
        const short_date = date.split(' ').slice(0,4).join(' ')
        html += `

            <div class="episode card border-white mb-3 bg-transparent rounded-0">
              <div class="card-body text-white">
                <div class="card-header bg-transparent border-white mb-3 px-0">
                        <h5 class="text-white card-title"><span class="text-red font-monospace">${el.querySelector("enclosure").nextElementSibling.innerHTML}:</span> ${el.querySelector('description').nextElementSibling.innerHTML}</h5>
                        <p class="card-text text-white font-monospace"><small><mark style="background-color:#3B658F; color:white">[${el.querySelector('pubDate').nextElementSibling.innerHTML}]</mark></small></p>
                </div>
                <p>${first_p}</p>
                <a href="${el.querySelector("enclosure").getAttribute('url')}" class="card-link text-orange font-monospace">Listen Now!</a>
              </div>
            </div>

        `;
    });
    document.getElementById("episode_list").insertAdjacentHTML("beforeend", html);
  });
