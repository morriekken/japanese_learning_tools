// ═══════════════════════════════════════════════════════════════
//  漢字フリップ — KANJI DATA FILE
//  Edit this file to add, remove, or reorganise groups.
//  The main game file (kanji-flip.html) reads from here.
//
//  Each group:
//    id      → unique string (no spaces)
//    name    → label shown above the cards
//    kanji   → array of up to 9 card objects
//
//  Each card:
//    kanji    → the character(s) shown on the front
//    furigana → reading shown on the back
//    meaning  → English meaning shown on the back
// ═══════════════════════════════════════════════════════════════

const KANJI_GROUPS = [
  {
    id: "person",
    name: "人 — Person & People",
    kanji: [
      { kanji: "人",    furigana: "ひと・じん・にん",  meaning: "person" },
      { kanji: "一人",  furigana: "ひとり",            meaning: "one person / alone" },
      { kanji: "二人",  furigana: "ふたり",            meaning: "two people" },
      { kanji: "大人",  furigana: "おとな",            meaning: "adult" },
      { kanji: "人工",  furigana: "じんこう",          meaning: "man-made / artificial" },
      { kanji: "人気",  furigana: "にんき",            meaning: "popularity" },
      { kanji: "人生",  furigana: "じんせい",          meaning: "one's life" },
      { kanji: "日本人",furigana: "にほんじん",        meaning: "Japanese person" },
      { kanji: "外人",  furigana: "がいじん",          meaning: "foreigner" },
    ]
  },
  {
    id: "day-sun",
    name: "日 — Day & Sun",
    kanji: [
      { kanji: "日",    furigana: "ひ・にち",          meaning: "day / sun" },
      { kanji: "今日",  furigana: "きょう",            meaning: "today" },
      { kanji: "毎日",  furigana: "まいにち",          meaning: "every day" },
      { kanji: "日本",  furigana: "にほん",            meaning: "Japan" },
      { kanji: "日曜日",furigana: "にちようび",        meaning: "Sunday" },
      { kanji: "昨日",  furigana: "きのう",            meaning: "yesterday" },
      { kanji: "明日",  furigana: "あした",            meaning: "tomorrow" },
      { kanji: "誕生日",furigana: "たんじょうび",      meaning: "birthday" },
      { kanji: "休日",  furigana: "きゅうじつ",        meaning: "holiday / day off" },
    ]
  },
  {
    id: "nature",
    name: "自然 — Nature",
    kanji: [
      { kanji: "山",   furigana: "やま",               meaning: "mountain" },
      { kanji: "川",   furigana: "かわ",               meaning: "river" },
      { kanji: "木",   furigana: "き",                 meaning: "tree / wood" },
      { kanji: "水",   furigana: "みず",               meaning: "water" },
      { kanji: "火",   furigana: "ひ",                 meaning: "fire" },
      { kanji: "土",   furigana: "つち",               meaning: "earth / soil" },
      { kanji: "石",   furigana: "いし",               meaning: "stone / rock" },
      { kanji: "空",   furigana: "そら",               meaning: "sky" },
      { kanji: "海",   furigana: "うみ",               meaning: "sea / ocean" },
    ]
  },
  {
    id: "numbers",
    name: "数字 — Numbers 1–9",
    kanji: [
      { kanji: "一",   furigana: "いち",               meaning: "one" },
      { kanji: "二",   furigana: "に",                 meaning: "two" },
      { kanji: "三",   furigana: "さん",               meaning: "three" },
      { kanji: "四",   furigana: "し・よん",           meaning: "four" },
      { kanji: "五",   furigana: "ご",                 meaning: "five" },
      { kanji: "六",   furigana: "ろく",               meaning: "six" },
      { kanji: "七",   furigana: "しち・なな",         meaning: "seven" },
      { kanji: "八",   furigana: "はち",               meaning: "eight" },
      { kanji: "九",   furigana: "く・きゅう",         meaning: "nine" },
    ]
  },
  {
    id: "body",
    name: "体 — Body Parts",
    kanji: [
      { kanji: "目",   furigana: "め",                 meaning: "eye" },
      { kanji: "耳",   furigana: "みみ",               meaning: "ear" },
      { kanji: "口",   furigana: "くち",               meaning: "mouth" },
      { kanji: "手",   furigana: "て",                 meaning: "hand" },
      { kanji: "足",   furigana: "あし",               meaning: "foot / leg" },
      { kanji: "頭",   furigana: "あたま",             meaning: "head" },
      { kanji: "心",   furigana: "こころ",             meaning: "heart / mind" },
      { kanji: "体",   furigana: "からだ",             meaning: "body" },
      { kanji: "顔",   furigana: "かお",               meaning: "face" },
    ]
  },
  {
    id: "size-direction",
    name: "方向 — Size & Direction",
    kanji: [
      { kanji: "大",   furigana: "おお・だい",         meaning: "big / large" },
      { kanji: "小",   furigana: "ちい・しょう",       meaning: "small / little" },
      { kanji: "中",   furigana: "なか・ちゅう",       meaning: "middle / inside" },
      { kanji: "上",   furigana: "うえ・じょう",       meaning: "above / up" },
      { kanji: "下",   furigana: "した・か",           meaning: "below / down" },
      { kanji: "右",   furigana: "みぎ",               meaning: "right" },
      { kanji: "左",   furigana: "ひだり",             meaning: "left" },
      { kanji: "前",   furigana: "まえ",               meaning: "in front / before" },
      { kanji: "後",   furigana: "うしろ・ご",         meaning: "behind / after" },
    ]
  },
  {
    id: "time",
    name: "時間 — Time",
    kanji: [
      { kanji: "時",   furigana: "とき・じ",           meaning: "time / hour" },
      { kanji: "今",   furigana: "いま",               meaning: "now" },
      { kanji: "年",   furigana: "とし・ねん",         meaning: "year" },
      { kanji: "月",   furigana: "つき・がつ",         meaning: "month / moon" },
      { kanji: "週",   furigana: "しゅう",             meaning: "week" },
      { kanji: "朝",   furigana: "あさ",               meaning: "morning" },
      { kanji: "昼",   furigana: "ひる",               meaning: "daytime / noon" },
      { kanji: "夜",   furigana: "よる",               meaning: "night" },
      { kanji: "間",   furigana: "あいだ・かん",       meaning: "interval / between" },
    ]
  },
  {
    id: "creation",
    name: "創作 — Creation & Story",
    kanji: [
      { kanji: "物語", furigana: "ものがたり",         meaning: "story / tale" },
      { kanji: "記憶", furigana: "きおく",             meaning: "memory" },
      { kanji: "夢",   furigana: "ゆめ",               meaning: "dream" },
      { kanji: "世界", furigana: "せかい",             meaning: "world" },
      { kanji: "作品", furigana: "さくひん",           meaning: "work of art" },
      { kanji: "映画", furigana: "えいが",             meaning: "movie / film" },
      { kanji: "音楽", furigana: "おんがく",           meaning: "music" },
      { kanji: "未来", furigana: "みらい",             meaning: "future" },
      { kanji: "創造", furigana: "そうぞう",           meaning: "creation / creativity" },
    ]
  },
];
