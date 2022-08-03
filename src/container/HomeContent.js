import rapid from '../api/rapid'

const HomeContent = await rapid.get("/hiragana");
console.log(HomeContent);