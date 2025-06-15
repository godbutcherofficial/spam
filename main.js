// let searchInputEl = document.getElementById("searchInput");

// let searchResultsEl = document.getElementById("searchResults");

// let spinnerEl = document.getElementById("spinner");

// function createAndAppendSearchResult(result) {
//     let {
//         link,
//         title,
//         description
//     } = result;

//     let resultItemEl = document.createElement("div");
//     resultItemEl.classList.add("result-item");

//     let titleEl = document.createElement("a");
//     titleEl.href = link;
//     titleEl.target = "_blank";
//     titleEl.textContent = title;
//     titleEl.classList.add("result-title");
//     resultItemEl.appendChild(titleEl);

//     let titleBreakEl = document.createElement("br");
//     resultItemEl.appendChild(titleBreakEl);

//     let urlEl = document.createElement("a");
//     urlEl.classList.add("result-url");
//     urlEl.href = link;
//     urlEl.target = "_blank";
//     urlEl.textContent = link;
//     resultItemEl.appendChild(urlEl);

//     let linkBreakEl = document.createElement("br");
//     resultItemEl.appendChild(linkBreakEl);

//     let descriptionEl = document.createElement("p");
//     descriptionEl.classList.add("link-description");
//     descriptionEl.textContent = description;
//     resultItemEl.appendChild(descriptionEl);

//     searchResultsEl.appendChild(resultItemEl);
// }

// function displayResults(searchResults) {
//     spinnerEl.classList.add("d-none");

//     for (let result of searchResults) {
//         createAndAppendSearchResult(result);
//     }
// }

// function searchWikipedia(event) {
//     if (event.key === "Enter") {

//         spinnerEl.classList.remove("d-none");
//         searchResultsEl.textContent = "";

//         let searchInput = searchInputEl.value;
//         let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
//         let options = {
//             method: "GET"
//         };

//         fetch(url, options)
//             .then(function(response) {
//                 return response.json();
//             })
//             .then(function(jsonData) {
//                 let {
//                     search_results
//                 } = jsonData;
//                 displayResults(search_results);
//             });
//     }
// }

// searchInputEl.addEventListener("keydown", searchWikipedia);
// gsap.to("#Capa_1", {scale:1.2})
// gsap.from("#Capa_1", {duration: 1,y: -50,opacity: 0,ease: "bounce",})
// gsap.from("#searchInput", {duration: 1,y: 50,opacity: 0,ease: "power3",delay: 0.5})
// gsap.from("#logo1", {duration: 1,y: 50,opacity: 0,ease: "power3",delay: 0.5})

let searchInputEl = document.getElementById("searchInput");

let searchResultsEl = document.getElementById("searchResults");

let spinnerEl = document.getElementById("spinner");

// Animate all id elements in the SVG logo
// window.addEventListener("DOMContentLoaded", () => {
    const svg = document.getElementById("Capa_1");
    if (svg) {
        // Get all elements with an id attribute inside the main SVG (excluding the main svg container itself)
        const allIds = svg.querySelectorAll("[id]");
        allIds.forEach((el, idx) => {
            // Random, visually interesting animation for each part
            gsap.fromTo(
                el,
                {
                    opacity: 0,
                    scale: 0.5 + Math.random(),
                    rotate: Math.random() * 40 - 20,
                    y: Math.random() * 32 - 16
                },
                {
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    y: 0,
                    duration: 0.8 + Math.random() * 0.7,
                    delay: 0.2 + idx * 0.07,
                    ease: "back.out(2)"
                }
            );
        });
             gsap.to("#Capa_1", {scale:1.2}) 
            //  gsap.from("#Capa_1", {duration: 1,y: -50,opacity: 0,ease: "bounce",})
        }

          

// });

const svgText = document.querySelector(".svgtext svg");

if (svgText) {
  // Animate each path inside the SVG text
  const paths = svgText.querySelectorAll("path");

  gsap.set(paths, {
    opacity: 0,
    y: 40,
    scale: 0.95,
    transformOrigin: "center"
  });

  gsap.to(paths, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.8,
    stagger: 0.03,
    ease: "back.out(1.7)",
    delay: 0.6
  });
 paths.forEach(path => {
  path.addEventListener("mouseenter", () => {
        gsap.to(path, {
        y: -8,
        duration: 0.3,
        ease: "power1.out",
        yoyo: true,
        repeat: 1
        });
  });
    path.addEventListener("mouseleave", () => {
        gsap.to(path, {
        y: 0,
        duration: 0.3,
        ease: "power1.inOut"
        });
    });
});


}







function createAndAppendSearchResult(result) {
    let {
        link,
        title,
        description
    } = result;

    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item");

    let titleEl = document.createElement("a");
    titleEl.href = link;
    titleEl.target = "_blank";
    titleEl.textContent = title;
    titleEl.classList.add("result-title");
    resultItemEl.appendChild(titleEl);

    let titleBreakEl = document.createElement("br");
    resultItemEl.appendChild(titleBreakEl);

    let urlEl = document.createElement("a");
    urlEl.classList.add("result-url");
    urlEl.href = link;
    urlEl.target = "_blank";
    urlEl.textContent = link;
    resultItemEl.appendChild(urlEl);

    let linkBreakEl = document.createElement("br");
    resultItemEl.appendChild(linkBreakEl);

    let descriptionEl = document.createElement("p");
    descriptionEl.classList.add("link-description");
    descriptionEl.textContent = description;
    resultItemEl.appendChild(descriptionEl);

    searchResultsEl.appendChild(resultItemEl);
}

function displayResults(searchResults) {
    spinnerEl.classList.add("d-none");

    for (let result of searchResults) {
        createAndAppendSearchResult(result);
    }
}

function searchWikipedia(event) {
    if (event.key === "Enter") {

        spinnerEl.classList.remove("d-none");
        searchResultsEl.textContent = "";

        let searchInput = searchInputEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        let options = {
            method: "GET"
        };

        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                displayResults(search_results);
            });
    }
}

searchInputEl.addEventListener("keydown", searchWikipedia);

  gsap.from("#searchInput", {duration: 1,y: 150,opacity: 0,ease: "power3",delay: 0.5});



