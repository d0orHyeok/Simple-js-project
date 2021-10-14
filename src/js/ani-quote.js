const animeTitle = document.querySelector(".anime-title");
const chracterName = document.querySelector(".anime-character");
const animeQuote = document.querySelector(".anime-text__quote");
const newQuoteBtn = document.querySelector(".btn.new-quote");

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

// Event Listener
newQuoteBtn.addEventListener("click", getData);

//On Load
getData();
