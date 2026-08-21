/* =========================================================
   GLORY ACADEMY — 簡易ドリル体験
   共通データ + 画面レンダリング
   ========================================================= */

/* 8席の画面上の配置 (%指定 / translate(-50%,-50%) 前提) */
const SEAT_POS = {
  "UTG+1": { x: 50, y: 6 },
  "UTG":   { x: 21, y: 15 },
  "LJ":    { x: 79, y: 15 },
  "BB":    { x: 8,  y: 44 },
  "HJ":    { x: 92, y: 44 },
  "SB":    { x: 21, y: 74 },
  "CO":    { x: 79, y: 74 },
  "BTN":   { x: 50, y: 84 },
};

/* チップ(ベット/ブラインド)の配置: 席よりテーブル中央寄り */
const CHIP_POS = {
  "UTG":   { x: 30, y: 26 },
  "SB":    { x: 32, y: 66 },
  "BB":    { x: 21, y: 44 },
  "BTN":   { x: 50, y: 71 },
  "CO":    { x: 68, y: 66 },
  "HJ":    { x: 79, y: 44 },
  "LJ":    { x: 68, y: 26 },
  "UTG+1": { x: 50, y: 22 },
};

const ACTION_META = {
  fold:  { label: "FOLD",  cls: "fold"  },
  call:  { label: "CALL",  cls: "call"  },
  raise: { label: "RAISE", cls: "raise" },
  allin: { label: "ALLIN", cls: "allin" },
};

const QUESTIONS = [
  /* ============== 問1 ============== */
  {
    no: 1,
    category: "Master / ニアバブル編",
    title: "BTNの対オープン戦略（ニアバブル）",
    sub: [
      "約200人規模MTT / バブル3（残り3人でバブル）",
      "UTG(52bb)が2bbオープン → Hero 46bbでBTN",
    ],
    pot: "3.5 bb",
    hero: [{ r: "Q", s: "♠" }, { r: "Q", s: "♥" }],
    seats: {
      "UTG+1": { stack: 30, dim: true },
      "UTG":   { stack: 52, bet: "2" },
      "LJ":    { stack: 18, dim: true },
      "HJ":    { stack: 25, dim: true },
      "CO":    { stack: 40, dim: true },
      "BTN":   { stack: 46, hero: true, dealer: true },
      "SB":    { stack: 22, blind: "0.5" },
      "BB":    { stack: 35, blind: "1" },
    },
    actions: [
      { key: "fold" },
      { key: "call" },
      { key: "raise", sub: "6.5bb" },
      { key: "allin", sub: "46bb" },
    ],
    correct: "call",
    correctLabel: "Call",
    hand: "QQ",
    rangeImg: "../images/1問目_レンジ表.png",
    breakdown: [
      { cls: "call",  name: "Call",         freq: "100.0%", ev: "EV 1.85", diff: "best" },
      { cls: "raise", name: "Raise (6.5bb)", freq: "0.0%",  ev: "EV 1.62", diff: "-0.23" },
      { cls: "allin", name: "All-in (46bb)", freq: "0.0%",  ev: "EV 1.40", diff: "-0.45" },
      { cls: "fold",  name: "Fold",          freq: "0.0%",  ev: "EV 0.00", diff: "-1.85" },
    ],
    explanation: [
      "ニアバブ(バブル3想定)という、「バブルファクターが高い局面」において、ビッグスタックのUTGオープン(52BB)に対し、hero/BTN/QQ(46BB)、卓Ave.約40BBという、スタックバランスも含めたシチュエーションへの理解が肝となる問題でした。",
      "GTO的には、コール推奨です。",
      "レンジ表では QQ はコール。加えて JJ や AQs などの強いハンドもコールに含まれる。",
      "QQ自体は非常に強く、4ベットジャムされてもコールできるレベル。コールでもレイズでも、それ単体では確実に利益の出るハンド。",
      "しかしスタックバランスが重要。UTGにカバーされている状況では、レイズせずコールで入ることで SPR（オールインまでの距離）を大きく保って戦う のがGTO上いちばん期待値が高い。",
      "コールで入れば手元に50BB弱残り、BTN側もオールインまで届かない → ポットコントロールしながら戦える。",
      "UTG（ビッグスタック）のオープンレンジは非常に広い（A4o・A5oなどもオープンしている）。",
      "多くの人は「UTGオープンにカバーされたら降りなきゃ」と漠然と思いがちだが、お互いがそこそこビッグスタックの場合は、レイズせずコールで入ればオールインまで届かず、相手のレンジも広いので、こちらも広くコールして戦うことが推奨となります。",
    ],
  },

  /* ============== 問2（内容未定・ダミー） ============== */
  {
    no: 2,
    category: "（テーマ準備中）",
    title: "（問題準備中）",
    sub: ["この問題は現在準備中です", "ダミー表示のサンプル画面です"],
    pot: "? bb",
    hero: [{ r: "?", s: "" }, { r: "?", s: "" }],
    seats: {
      "UTG+1": { stack: "-", dim: true },
      "UTG":   { stack: "-", dim: true },
      "LJ":    { stack: "-", dim: true },
      "HJ":    { stack: "-", dim: true },
      "CO":    { stack: "-", dim: true },
      "BTN":   { stack: "-", hero: true, dealer: true },
      "SB":    { stack: "-", blind: "0.5" },
      "BB":    { stack: "-", blind: "1" },
    },
    actions: [
      { key: "fold" },
      { key: "call" },
      { key: "raise", sub: "-" },
      { key: "allin", sub: "-" },
    ],
    correct: null,
    correctLabel: "（準備中）",
    hand: "??",
    rangeImg: null,
    breakdown: [
      { cls: "call",  name: "Call",  freq: "--%", ev: "EV --", diff: null },
      { cls: "raise", name: "Raise", freq: "--%", ev: "EV --", diff: null },
      { cls: "fold",  name: "Fold",  freq: "--%", ev: "EV --", diff: null },
    ],
    explanation:
      "ここに解説文が入ります。（ダミーテキスト）問題内容が確定次第、シチュエーションの狙いや均衡レンジのポイントを100〜150字程度で記載します。プレイヤーがなぜその選択になるのかを、EVとレンジの観点から簡潔に解説する予定です。",
  },

  /* ============== 問3（内容未定・ダミー） ============== */
  {
    no: 3,
    category: "（テーマ準備中）",
    title: "（問題準備中）",
    sub: ["この問題は現在準備中です", "ダミー表示のサンプル画面です"],
    pot: "? bb",
    hero: [{ r: "?", s: "" }, { r: "?", s: "" }],
    seats: {
      "UTG+1": { stack: "-", dim: true },
      "UTG":   { stack: "-", dim: true },
      "LJ":    { stack: "-", dim: true },
      "HJ":    { stack: "-", dim: true },
      "CO":    { stack: "-", dim: true },
      "BTN":   { stack: "-", hero: true, dealer: true },
      "SB":    { stack: "-", blind: "0.5" },
      "BB":    { stack: "-", blind: "1" },
    },
    actions: [
      { key: "fold" },
      { key: "call" },
      { key: "raise", sub: "-" },
      { key: "allin", sub: "-" },
    ],
    correct: null,
    correctLabel: "（準備中）",
    hand: "??",
    rangeImg: null,
    breakdown: [
      { cls: "call",  name: "Call",  freq: "--%", ev: "EV --", diff: null },
      { cls: "raise", name: "Raise", freq: "--%", ev: "EV --", diff: null },
      { cls: "fold",  name: "Fold",  freq: "--%", ev: "EV --", diff: null },
    ],
    explanation:
      "ここに解説文が入ります。（ダミーテキスト）問題内容が確定次第、シチュエーションの狙いや均衡レンジのポイントを100〜150字程度で記載します。プレイヤーがなぜその選択になるのかを、EVとレンジの観点から簡潔に解説する予定です。",
  },
];

const TRAINING_URL = "https://gloryacademy.app/training";

/* ---------- helpers ---------- */
function suitColor(s) {
  return s === "♥" || s === "♦" ? "red" : "black";
}
function el(tag, cls, html) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html != null) n.innerHTML = html;
  return n;
}
function getParam(name) {
  return new URLSearchParams(location.search).get(name);
}

/* ---------- render: poker table ---------- */
function renderTable(mount, q) {
  const wrap = el("div", "table-wrap");
  const felt = el("div", "felt");
  wrap.appendChild(felt);

  const pot = el("div", "pot");
  pot.appendChild(el("div", "label", "Pot"));
  pot.appendChild(el("div", "amt", q.pot));
  wrap.appendChild(pot);

  Object.entries(q.seats).forEach(([pos, s]) => {
    const p = SEAT_POS[pos];
    if (!p) return;
    const seat = el("div", "seat" + (s.hero ? " hero" : "") + (s.dim ? " dim" : ""));
    seat.style.left = p.x + "%";
    seat.style.top = p.y + "%";
    seat.appendChild(el("div", "pos", pos));
    seat.appendChild(el("div", "stk", String(s.stack)));
    if (s.dealer) seat.appendChild(el("div", "dealer", "D"));
    wrap.appendChild(seat);

    const chipVal = s.bet || s.blind;
    if (chipVal) {
      const cp = CHIP_POS[pos] || p;
      const chip = el("div", "chip");
      chip.style.left = cp.x + "%";
      chip.style.top = cp.y + "%";
      chip.appendChild(el("div", "dot"));
      chip.appendChild(el("div", "val", chipVal));
      wrap.appendChild(chip);
    }
  });

  mount.appendChild(wrap);
}

/* ---------- render: hero hand ---------- */
function renderHand(mount, q, big) {
  const hand = el("div", "hand");
  q.hero.forEach((c) => {
    const card = el("div", "pcard " + suitColor(c.s));
    card.appendChild(el("div", "r", c.r));
    card.appendChild(el("div", "s", c.s || "&nbsp;"));
    hand.appendChild(card);
  });
  mount.appendChild(hand);
}

/* ---------- render: action buttons (problem page) ---------- */
function renderActions(mount, q, answerHref) {
  const dock = el("div", "actions-dock");
  const box = el("div", "actions");
  const sep = answerHref.indexOf("?") >= 0 ? "&" : "?";
  q.actions.forEach((a) => {
    const m = ACTION_META[a.key];
    const btn = el("a", "btn-act " + m.cls);
    btn.href = answerHref + sep + "a=" + a.key;
    btn.innerHTML = m.label + (a.sub ? ' <span class="sub">' + a.sub + "</span>" : "");
    box.appendChild(btn);
  });
  dock.appendChild(box);
  mount.appendChild(dock);
}

/* ---------- render: breakdown rows ---------- */
function renderBreakdown(mount, q) {
  q.breakdown.forEach((b) => {
    const row = el("div", "bd-row");
    row.appendChild(el("span", "bd-swatch " + b.cls));
    row.appendChild(el("span", "bd-name", b.name));
    row.appendChild(el("span", "bd-freq", b.freq));
    row.appendChild(el("span", "bd-ev", b.ev));
    if (b.diff === "best") {
      row.appendChild(el("span", "bd-diff best", "BEST"));
    } else if (b.diff) {
      row.appendChild(el("span", "bd-diff neg", b.diff));
    } else {
      row.appendChild(el("span", "bd-diff", ""));
    }
    mount.appendChild(row);
  });
}

/* ---------- render: 13x13 range grid (placeholder for Q2/Q3) ---------- */
function renderRangeGrid(mount, q) {
  const RANKS = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];
  const grid = el("div", "range-grid");
  for (let i = 0; i < 13; i++) {
    for (let j = 0; j < 13; j++) {
      let label;
      if (i === j) label = RANKS[i] + RANKS[i];
      else if (i < j) label = RANKS[i] + RANKS[j] + "s";
      else label = RANKS[j] + RANKS[i] + "o";
      grid.appendChild(el("div", "rg-cell", label));
    }
  }
  mount.appendChild(grid);
}

/* ---------- progress dots ---------- */
function renderProgress(mount, currentIndex) {
  const p = el("div", "progress");
  for (let i = 0; i < QUESTIONS.length; i++) {
    p.appendChild(el("div", "pdot" + (i === currentIndex ? " on" : "")));
  }
  mount.appendChild(p);
}
