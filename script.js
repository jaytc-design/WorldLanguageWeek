const QUOTES = [
    {
        "src":"./assets/quoteImages/badBunny.jpg",
        "name":"Bad Bunny",
        "caption":"Do what you love, and don't let anyone tell you that you can't do it",
        "alt":"Bad bunny"
    },

    {
        "src":"./assets/quoteImages/friendshipWealth.jpg",
        "name":"Mes amis sont ma richesse.",
        "caption":"My friends are my riches.",
        "alt":""
    },

    {
        "src":"./assets/quoteImages/gold.jpg",
        "name":"黄金万两容易得，一个知心最难寻。",
        "caption":"Gold is easy to obtain, a close friend is harder to find.",
        "alt":"Friendship is worth more than gold"
    },

    {
        "src":"./assets/quoteImages/friendshipSign.jpg",
        "name":"Signing",
        "caption":"Friendship",
        "alt":"Signing 'Friendship' in ASL"
    },
];
const COUNTRIES = [
  {
    "title":"Mandarin",
    "desc":"Mandarin is the offical language of 3 nations: China, Taiwan, Singapore"
  },
  {
    "title": "Spanish",
    "desc": "Spanish is spoken in 21 nations including: Spain, Mexico, Costa Rica, El Salvador, Guatemala, Honduras, Nicaragua, Panama, Cuba, Dominican Republic, Puerto Rico, Argentina, Bolivia, Chile, Colombia, Ecuador, Paraguay, Peru, Uruguay, Venezuela, and Equatorial Guinea"
 
  },
  {
    "title": "French",
    "desc": "French is the official language of roughly 28 nations: France, Congo, Canada, Cameroon, Belgium, Ivory Coast, Madagascar, Haiti, Senegal, Burkina Faso, Benin, Guinea, Mali, Togo, Niger, Chad, Switzerland, Central African Republic, Gabon, Burundi, Rwanda, Luxembourg, Djibouti, Equatorial Guinea, Comoros, Vanuatu, Seychelles, Monaco"
  },
  {
    "title": "ASL",
    "desc": "ASL (American Sign Language) comes from America but is used all around the world!"
  }
]

function loadQuotes() {
    let cmain = document.getElementById("cmain");
    let cindicator = document.getElementById("cindicator");

    for (let i = 0; i < QUOTES.length; i++) {
        let quote = QUOTES[i];

        let carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");
        if (i == 0) {
            carouselItem.classList.add("active");
        }

        let img = document.createElement("img");
        img.src = quote.src;
        img.classList.add("person-image");
        img.classList.add("d-block");
        img.classList.add("w-100");
        img.title = quote.alt;
        carouselItem.appendChild(img);

        let carouselCaption = document.createElement("div");
        carouselCaption.classList.add("carousel-caption");
        let h5 = document.createElement("h5");
        h5.innerHTML = quote.name;
        let p = document.createElement("p");
        p.innerHTML = "\""+quote.caption+"\"";
        carouselCaption.appendChild(h5);
        carouselCaption.appendChild(p);
        carouselItem.appendChild(carouselCaption);

        cmain.appendChild(carouselItem);

        let button = document.createElement("button");
        button.type = "button";
        button.setAttribute("data-bs-target", "#quoteCarousel");
        button.setAttribute("data-bs-slide-to", i);
        if (i == 0) {
            button.classList.add("active");
            button.setAttribute("aria-current", "true");
        }
        button.setAttribute("aria-label", "Slide " + (i + 1));
        cindicator.appendChild(button); 
    }
}

window.onload = function() {
    loadQuotes();

    const myModalEl = document.getElementById("infoModal");
    myModalEl.addEventListener('show.bs.modal', event => {
      let index = parseInt(event.relatedTarget.id)
      document.getElementById("countryName").innerHTML = COUNTRIES[index].title
      document.getElementById("countryInfo").innerHTML = COUNTRIES[index].desc
    })
}
