const QUOTES = [
  {
    "src":"./assets/quoteImages/dilanAlex.JPG",
    "name":"Dilan Love",
    "caption":"They found true lov",
    "alt":"gay couple"
  },
	{
	    "src":"./assets/quoteImages/india.png",
	    "name":"Hinduism",
	    "caption":"He went to india",
	    "alt":"archondoraydon"
	},
	{
		"src": "./assets/quoteImages/graydonsilly.png",
		"name": "Las Drogas",
		"caption": "He was a drug dealer",
		"alt": "graydon"
	},
	{
		"src":"./assets/quoteImages/btoh.jpeg",
		"name":"The BTOH",
		"caption":"so cool",
		"alt":"he is epic"
	},
	{
			"src":"./assets/quoteImages/david.jpeg",
			"name":"David and Adam lovers",
			"caption":"True love",
			"alt":"adam+david"
	},
	{
		"src": "./assets/quoteImages/birthday.jpeg",
		"name": "Happy B-Day",
		"caption": "Festivity",
		"alt": "JT"
	},
	{
		"src": "./assets/quoteImages/raymond.jpeg",
		"name": "Raymond",
		"caption": "The Badminton Rizzler",
		"alt": "he gets all the girls"
	}


];

window.onload = function() {
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
        p.innerHTML = quote.caption;
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
