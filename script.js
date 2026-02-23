let mode = "normal";
let themeData = null;

const modeBtn = document.getElementById("modeBtn");
const generateBtn = document.getElementById("generateBtn");
const theme = document.getElementById("theme");

fetch("themes.json")
  .then(res => res.json())
  .then(data => {
    themeData = data;
  });

modeBtn.addEventListener("click", () => {
  mode = mode === "normal" ? "drink" : "normal";
  modeBtn.textContent =
    mode === "normal" ? "ノーマルモード" : "大人モード";
});

generateBtn.addEventListener("click", () => {
  if (!themeData) return;

  const kana =
    themeData.kana[Math.floor(Math.random() * themeData.kana.length)];

  const lowerList = themeData[mode];
  const lower =
    lowerList[Math.floor(Math.random() * lowerList.length)];

  theme.textContent = `「${kana}」から始まる ${lower}`;
});
