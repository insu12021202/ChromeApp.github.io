const quotes = [
    {
        quote: "굳이 고된 나를 택한 그대여, 가끔 바람이 불 때만 저 먼 풍경을 바라봐",
        song_name: "- 오르막길",
    },
    {
        quote: "널 붙잡지 못한 내가 미워서 돌아올거란 기대 어리석어서",
        song_name: "- 뒷모습",
    },
    {
        quote: "세상 어디에도 우주 밖으로도 끝도 없이 떠밀려가네",
        song_name: "- 몰린2",
    },
    {
        quote: "내 사랑 흘러갈 곳 어디에 내 모든 것 줄 사람 어디에",
        song_name: "- Lucy",
    },
    {
        quote: "안녕 오랜 나의 사람아 하루 종일 이별 준비야",
        song_name: "- 내일 할 일",
    },
    {
        quote: "그 팔에 흐르던 땀은 증발하지 않아 차곡차곡 내 빈틈에 이야기들로 차",
        song_name: "- Slow starter",
    },
    {
        quote: "올해 마지막 하늘의 선물이 와요",
        song_name: "- 12월",
    },
    {
        quote: "저 바다 건너 다들 행복하다고, 걱정말고 나나 잘하라하네",
        song_name: "- 바다 이야기",
    },
    {
        quote: "마른 잎 떨어지며 차츰 앙상해지다가 땅 속 깊이 뿌리내린 내 마음",
        song_name: "- 몰린",
    },
    {
        quote: "참 못된 사랑, 아프기는 싫어서 그냥 덮어두면 무뎌질까 봐",
        song_name: "- 끝 무렵",
    },
];
const quote = document.querySelector("#quote span:first-child");
const song_name = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
song_name.innerText = todaysQuote.song_name;