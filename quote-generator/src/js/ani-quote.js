const animeTitle = document.querySelector(".anime-title");
const chracterName = document.querySelector(".anime-character");
const animeQuote = document.querySelector(".anime-text__quote");
const newQuoteBtn = document.querySelector(".btn.new-quote");
const laftelBtn = document.querySelector(".btn__export--laftel");
const googleBtn = document.querySelector(".btn__export--google");
const twitterBtn = document.querySelector(".btn__export--twitter");

let apiData = {};

// 화면에 가져온 데이터 출력
function showData() {
    animeTitle.textContent = apiData.anime;
    chracterName.textContent = `- ${apiData.character} -`;
    // Quote의 길이에 따른 스타일 설정
    apiData.quote.length > 100 ? animeQuote.classList.add("long-quote") : animeQuote.classList.remove("long-quote");
    animeQuote.textContent = apiData.quote;
}

// API로부터 제목, 캐릭터, 대사 가져오기
async function getData() {
    const apiUrl = "https://animechan.vercel.app/api/random";
    try {
        const response = await fetch(apiUrl);
        apiData = await response.json();
    } catch (error) {
        // Error: dummy
        apiData = {
            anime: "Unknown",
            character: "Unkown",
            quote: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, voluptate!",
        };
    } finally {
        showData();
    }
}

function searchLaftel() {
    const laftelUrl = `https://laftel.net/search?keyword=${animeTitle.textContent}`;
    window.open(laftelUrl, "_blank");
}

function searchGoogle() {
    const googleUrl = `https://www.google.com/search?q=${animeTitle.textContent} ${chracterName.textContent}`;
    window.open(googleUrl, "_blank");
}

function searchTwitter() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${animeQuote.textContent} ${chracterName.textContent}`;
    window.open(twitterUrl, "_blank");
}

// Event Listener
newQuoteBtn.addEventListener("click", getData);
laftelBtn.addEventListener("click", searchLaftel);
googleBtn.addEventListener("click", searchGoogle);
twitterBtn.addEventListener("click", searchTwitter);

//On Load
getData();
