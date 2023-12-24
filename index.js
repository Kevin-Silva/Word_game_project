const API_URL = "https://words.dev-apis.com/word-of-the-day"

async function getWordOfTheDay(){
    const promise = await fetch(API_URL, {
        method: "GET"
    });
    const processedResponse = await promise.json();
    return processedResponse;
}
function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);
}

getWordOfTheDay();