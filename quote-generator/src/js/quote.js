const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const googleBtn = document.getElementById("google");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQuotes = [];

// Loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// Show Quote
function newQuote() {
    loading();
    // apiQuote 배열에서 랜덤으로 한개 뽑아오기
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // Author가 비어있을 경우 "Unknown"
    !quote.author ? (authorText.textContent = "Unknown") : (authorText.textContent = quote.author);
    // Quote의 길이에 따른 스타일 설정
    quote.text.length > 100 ? quoteText.classList.add("long-quote") : quoteText.classList.remove("long-quote");
    // 인용문 로딩 완료시 로더 hide
    quoteText.textContent = quote.text;
    complete();
}

// API로부터 Quote 가져오기
async function getQuotes() {
    loading();
    const apiUrl = "https://type.fit/api/quotes";
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
    } catch (error) {
        // Error: load localQuotes
        apiQuotes = localQuotes;
    } finally {
        newQuote();
    }
}

// Search at Google
function searchGoogle() {
    const googleUrl = `https://www.google.com/search?q=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(googleUrl, "_blank");
}

// Event Listener
newQuoteBtn.addEventListener("click", newQuote);
googleBtn.addEventListener("click", searchGoogle);

// On Load
getQuotes();
