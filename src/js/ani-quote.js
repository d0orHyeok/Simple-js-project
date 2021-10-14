let apiData = {};

// 화면에 가져온 데이터 출력
function showData() {}

// API로부터 제목, 캐릭터, 대사 가져오기
async function getData() {
    const apiUrl = "https://animechan.vercel.app/api/random";
    try {
        const response = await fetch(apiUrl);
        apiData = await response.json();
        console.log(apiData);
    } catch (error) {
        // Error: load localQuotes
        apiData = {
            anime: "Unknown",
            character: "Unkown",
            quote: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, voluptate!",
        };
    }
}

//On Load
getData();
