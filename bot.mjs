-111
+139
/**
 * ============================================================
 *  بوت لعبة الجاسوس - Wolf Live
 *  Wolf Spy Game Bot
 *  المتطلبات: Node.js 16+ , wolf.js
 *  التشغيل: node bot.mjs
 * ============================================================
 */
import { WOLF } from 'wolf.js';
const client = new WOLF();
// ==================== قائمة الفواكه الكاملة ====================
// ============================================================
//  قائمة الفواكه الكاملة - كلمات السر
// ============================================================
const FRUITS = [
  'تفاح', 'برتقال', 'موز', 'فراولة', 'عنب', 'كرز', 'بطيخ', 'مانجو', 'أناناس', 'خوخ',
  'تين', 'رمان', 'جوافة', 'كمثرى', 'ليمون', 'يوسفي', 'مشمش', 'شمام', 'توت بري', 'جوز الهند',
  'أفوكادو', 'برقوق', 'فاكهة العاطفة', 'توت', 'لايمون', 'توت العليق الأسود', 'توت أزرق',
  'جوز دراق', 'بابايا', 'كيوي', 'ليمون أخضر', 'تمر', 'إجاص', 'نارنج', 'جريب فروت',
  'توت العليق', 'توت أسود', 'دوريان', 'فاكهة التنين', 'جاك فروت', 'رامبوتان', 'ليتشي',
  'كارامبولا', 'سالاك', 'كاكاو', 'سفارجل', 'بندق', 'لوز', 'كستناء', 'حوز', 'صنوبر',
  'أكاي', 'أسيرولا', 'أكي', 'مانجو أفريقي', 'أكيبي', 'فراولة جبال الألب', 'أماناتسو',
  'أمارا', 'أمباريلا', 'تفاح أمبروزيا', 'شمام أمبروزيا', 'أملا', 'أناناتو', 'أنونا',
  'تفاحة أمريكية', 'مايابل', 'أرونيا', 'باذنجان أفريقي', 'باشن فروت', 'بيل بيري',
  'بيغني', 'بيلبيري', 'بيلمبي', 'بلاك أبل', 'بلاك تشيري', 'بلاك كورانت', 'بلاك مولبيري',
  'تين', 'رمان', 'جوافة', 'كمثرى', 'ليمون', 'يوسفي', 'مشمش', 'شمام', 'توت بري',
  'جوز الهند', 'أفوكادو', 'برقوق', 'فاكهة العاطفة', 'توت', 'لايمون',
  'توت العليق الأسود', 'توت أزرق', 'جوز دراق', 'بابايا', 'كيوي', 'ليمون أخضر',
  'تمر', 'إجاص', 'نارنج', 'جريب فروت', 'توت العليق', 'توت أسود', 'دوريان',
  'فاكهة التنين', 'جاك فروت', 'رامبوتان', 'ليتشي', 'كارامبولا', 'سالاك', 'كاكاو',
  'سفارجل', 'بندق', 'لوز', 'كستناء', 'حوز', 'صنوبر', 'أكاي', 'أسيرولا', 'أكي',
  'مانجو أفريقي', 'أكيبي', 'فراولة جبال الألب', 'أماناتسو', 'أمارا', 'أمباريلا',
  'تفاح أمبروزيا', 'شمام أمبروزيا', 'أملا', 'أناناتو', 'أنونا', 'تفاحة أمريكية',
  'مايابل', 'أرونيا', 'باذنجان أفريقي', 'باشن فروت', 'بيل بيري', 'بيغني',
  'بيلبيري', 'بيلمبي', 'بلاك أبل', 'بلاك تشيري', 'بلاك كورانت', 'بلاك مولبيري',
  'بلاك راسبيري', 'بلاك سابوت', 'بلاكبيري', 'بلود أورانج', 'بلو باسيون فروت',
  'بلو بيري', 'بريد فروت', 'بروش تشيري', 'بوذا هاند', 'بورديكين بلوم', 'بوشيل أند بيري',
  'جيلي بين', 'باتر فروت', 'كاكتوس بير', 'كالاباش', 'كالامانسي', 'كامو كامو',
  'كانيستيل', 'كانتالوب', 'كيب غوسبيري', 'كارا كارا', 'كرامبولا', 'كاريسا', 'كاسكارا',
  'كاشو أبل', 'كاتمون', 'كافيار لايم', 'سيدار باي تشيري', 'سيمليديك', 'تشيمبيداك',
  'سييلون غوسبيري', 'تشاريتتشويلو', 'تشايوتي', 'تشيريمويا', 'تشيري بلوم', 'تشيكو فروت',
  'تشوكولات فروت', 'تشوكبيري', 'تشوكتشيري', 'سيترون', 'كليمنتين', 'كلودبيري',
  'كلستر فيغ', 'كوكي أبل', 'كوكو دي مير', 'كوكو بلوم', 'كوكونات', 'كوفي تشيري',
  'بلو بيري', 'بريد فروت', 'بروش تشيري', 'بوذا هاند', 'بورديكين بلوم',
  'بوشيل أند بيري', 'جيلي بين', 'باتر فروت', 'كاكتوس بير', 'كالاباش',
  'كالامانسي', 'كامو كامو', 'كانيستيل', 'كانتالوب', 'كيب غوسبيري', 'كارا كارا',
  'كرامبولا', 'كاريسا', 'كاسكارا', 'كاشو أبل', 'كاتمون', 'كافيار لايم',
  'سيدار باي تشيري', 'سيمليديك', 'تشيمبيداك', 'سييلون غوسبيري', 'تشاريتتشويلو',
  'تشايوتي', 'تشيريمويا', 'تشيري بلوم', 'تشيكو فروت', 'تشوكولات فروت',
  'تشوكبيري', 'تشوكتشيري', 'سيترون', 'كليمنتين', 'كلودبيري', 'كلستر فيغ',
  'كوكي أبل', 'كوكو دي مير', 'كوكو بلوم', 'كوكونات', 'كوفي تشيري',
  'كورنيليان تشيري', 'كراب أبل', 'كرانبيري', 'كروبيري', 'كوكومبر', 'كومكوات',
  'كوبواكو', 'كورانت', 'كاستارد أبل', 'داباي', 'دامسون', 'دامسون بلوم', 'دانغل بيري',
  'دارلينغ بلوم', 'ديت بلوم', 'دافيدسونز بلوم', 'ديد مانز فينغرز', 'ديكايزنيا',
  'دوبل كوكونات', 'دراكونتو ميلون', 'دراغون فروت', 'دوكو',
  'Apple', 'Orange', 'Banana', 'Strawberry', 'Grape', 'Cherry', 'Watermelon', 'Mango',
  'Pineapple', 'Peach', 'Fig', 'Pomegranate', 'Guava', 'Pear', 'Lemon', 'Apricot',
  'Avocado', 'Plum', 'Passion Fruit', 'Blueberry', 'Papaya', 'Kiwi', 'Date', 'Durian',
  'Dragon Fruit', 'Jackfruit', 'Rambutan', 'Lychee', 'Starfruit', 'Coconut'
  'كوبواكو', 'كورانت', 'كاستارد أبل', 'داباي', 'دامسون', 'دامسون بلوم',
  'دانغل بيري', 'دارلينغ بلوم', 'ديت بلوم', 'دافيدسونز بلوم', 'ديد مانز فينغرز',
  'ديكايزنيا', 'دوبل كوكونات', 'دراكونتو ميلون', 'دراغون فروت', 'دوكو',
  'Apple', 'Orange', 'Banana', 'Strawberry', 'Grape', 'Cherry', 'Watermelon',
  'Mango', 'Pineapple', 'Peach', 'Fig', 'Pomegranate', 'Guava', 'Pear', 'Lemon',
  'Apricot', 'Avocado', 'Plum', 'Passion Fruit', 'Blueberry', 'Papaya', 'Kiwi',
  'Date', 'Durian', 'Dragon Fruit', 'Jackfruit', 'Rambutan', 'Lychee', 'Starfruit',
  'Coconut', 'Blackberry', 'Raspberry', 'Cranberry', 'Gooseberry', 'Kumquat',
  'Persimmon', 'Quince', 'Tamarind', 'Longan', 'Salak', 'Carambola', 'Cherimoya',
  'Soursop', 'Breadfruit', 'Açaí', 'Camu Camu', 'Jabuticaba', 'Cupuaçu'
];
const GAME_STATES = {
  WAITING: 'waiting',
  VOTING: 'voting',
// ============================================================
//  حالات اللعبة
// ============================================================
const STATE = {
  WAITING:       'waiting',
  VOTING:        'voting',
  CONTINUE_POLL: 'continue_poll'
};
// ==================== التخزين ====================
const games = new Map();
const playerScores = new Map();
const channelPlayerIds = new Map();
// ==================== دوال مساعدة ====================
function getRandomFruit() {
// ============================================================
//  التخزين في الذاكرة
// ============================================================
const games          = new Map(); // channelId -> gameObject
const playerScores   = new Map(); // subscriberId -> { id, nickname, points }
const channelPlayers = new Map(); // channelId -> Set<subscriberId>
// ============================================================
//  دوال مساعدة
// ============================================================
function randomFruit() {
  return FRUITS[Math.floor(Math.random() * FRUITS.length)];
}
function getGame(channelId) {
  return games.get(channelId);
}
function deleteGame(channelId) {
  const game = games.get(channelId);
  if (game) {
    if (game.joinTimer) clearTimeout(game.joinTimer);
    if (game.voteTimer) clearTimeout(game.voteTimer);
    if (game.partialVoteTimer) clearTimeout(game.partialVoteTimer);
    if (game.pollTimer) clearTimeout(game.pollTimer);
    games.delete(channelId);
  }
}
function getPlayerScore(id) {
  if (!playerScores.has(id)) {
    playerScores.set(id, { id, nickname: '', points: 0 });
  }
function getGame(cid) { return games.get(cid); }
function deleteGame(cid) {
  const g = games.get(cid);
  if (!g) return;
  clearTimer(g.joinTimer);
  clearTimer(g.voteTimer);
  clearTimer(g.partialTimer);
  clearTimer(g.pollTimer);
  games.delete(cid);
}
function clearTimer(t) { if (t) clearTimeout(t); }
function score(id) {
  if (!playerScores.has(id)) playerScores.set(id, { id, nickname: '', points: 0 });
  return playerScores.get(id);
}
function addChannelPlayer(channelId, id) {
  if (!channelPlayerIds.has(channelId)) channelPlayerIds.set(channelId, new Set());
  channelPlayerIds.get(channelId).add(id);
}
function getGlobalRank(id) {
  const sorted = [...playerScores.values()].sort((a, b) => b.points - a.points);
  const rank = sorted.findIndex(s => s.id === id) + 1;
  return { rank: rank > 0 ? rank : sorted.length + 1, total: sorted.length };
}
function fmtPts(n) {
  return (n >= 0 ? '+' : '') + n;
}
async function sendCh(channelId, msg) {
  try { await client.messaging.sendMessage({ targetChannelId: channelId }, msg); }
  catch (e) { console.error('[sendCh]', e.message); }
}
async function sendPM(id, msg) {
function trackPlayer(cid, id) {
  if (!channelPlayers.has(cid)) channelPlayers.set(cid, new Set());
  channelPlayers.get(cid).add(id);
}
function globalRank(id) {
  const list = [...playerScores.values()].sort((a, b) => b.points - a.points);
  const pos = list.findIndex(s => s.id === id) + 1;
  return pos > 0 ? pos : list.length + 1;
}
function pts(n) { return (n >= 0 ? '+' : '') + n; }
async function toChannel(cid, msg) {
  try { await client.messaging.sendMessage({ targetChannelId: cid }, msg); }
  catch (e) { console.error('[toChannel]', e.message); }
}
async function toDM(id, msg) {
  try { await client.messaging.sendMessage({ targetSubscriberId: id }, msg); }
  catch (e) { console.error('[sendPM]', e.message); }
}
async function getNick(id) {
  catch (e) { console.error('[toDM]', e.message); }
}
async function getNickname(id) {
  try {
    const s = await client.subscriber.getById(id);
    return s?.nickname || `User#${id}`;
  } catch { return `User#${id}`; }
}
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
// ==================== 1. إنشاء لعبة ====================
// أوامر: !جاسوس انشاء | !جاسوس جديد | !جس جديد | !spy new
async function handleNewGame(channelId, sourceId, lang) {
  if (getGame(channelId)) {
    return await sendCh(channelId, lang === 'ar'
function wait(ms) { return new Promise(r => setTimeout(r, ms)); }
// ============================================================
//  1. إنشاء لعبة جديدة
//  أوامر: !جاسوس انشاء | !جاسوس جديد | !جس جديد | !spy new
// ============================================================
async function cmdNewGame(cid, uid, lang) {
  if (getGame(cid)) {
    return toChannel(cid, lang === 'ar'
      ? '/me ⚠️ توجد لعبة قيد التشغيل بالفعل في هذه الغرفة!'
      : '/me ⚠️ A game is already running in this room!');
  }
  const game = {
    channelId, creatorId: sourceId, lang,
    state: GAME_STATES.WAITING,
    players: [],
    spyId: null, secretWord: null,
    votes: new Map(), bets: new Map(),
    joinTimer: null, voteTimer: null,
    partialVoteTimer: null, pollTimer: null
    cid, creatorId: uid, lang,
    state: STATE.WAITING,
    players: [],        // { id, nickname, number }
    spyId:      null,
    secretWord: null,
    votes:      new Map(), // voterId -> playerNumber
    bets:       new Map(), // bettorId -> { playerNumber, targetId, amount, isSpy }
    joinTimer:    null,
    voteTimer:    null,
    partialTimer: null,
    pollTimer:    null
  };
  games.set(channelId, game);
  // رسالة الانضمام - النص الحرفي من المتطلبات
  const joinMsg = lang === 'ar'
    ? `/me يلا يا حلوين بدينا اللعبه انظموا للعبه بالأمر هذا "!جاسوس انظم او !جس انظم"`
    : `/me Come on, sweeties, we've started the game. Join the game with this command: "Spy, join!"`;
  await sendCh(channelId, joinMsg);
  // مؤقت 3 دقائق: إغلاق إذا لم تبدأ اللعبة
  games.set(cid, game);
  // الرسالة الحرفية من المتطلبات
  if (lang === 'ar') {
    await toChannel(cid, `/me يلا يا حلوين بدينا اللعبه انظموا للعبه بالأمر هذا "!جاسوس انظم او !جس انظم"`);
  } else {
    await toChannel(cid, `/me Come on, sweeties, we've started the game. Join the game with this command: "Spy, join!"`);
  }
  // 8. مؤقت 3 دقائق: إغلاق تلقائي إذا لم تبدأ اللعبة
  game.joinTimer = setTimeout(async () => {
    const g = getGame(channelId);
    if (g && g.state === GAME_STATES.WAITING) {
      await sendCh(channelId, g.lang === 'ar'
        ? '/me ⏰ مضت 3 دقائق دون بدء اللعبة. تم إغلاق اللعبة تلقائياً.'
    const g = getGame(cid);
    if (g && g.state === STATE.WAITING) {
      await toChannel(cid, g.lang === 'ar'
        ? '/me ⏰ مضت 3 دقائق ولم تبدأ اللعبة. تم إغلاق اللعبة تلقائياً.'
        : '/me ⏰ 3 minutes passed without starting. Game closed automatically.');
      deleteGame(channelId);
      deleteGame(cid);
    }
  }, 3 * 60 * 1000);
}
// ==================== 2. الانضمام للعبة ====================
// أوامر: !جاسوس انظم | !جس انظم | !spy join
async function handleJoin(channelId, sourceId) {
  const game = getGame(channelId);
// ============================================================
//  2. الانضمام للعبة
//  أوامر: !جاسوس انظم | !جس انظم | !spy join
// ============================================================
async function cmdJoin(cid, uid) {
  const game = getGame(cid);
  if (!game) return;
[truncated]
[truncated]
[truncated]
-1
+1
[truncated]
[truncated]
-1
+1
[truncated]
[truncated]
-1
+1
[truncated]
[truncated]
-1
+1
[truncated]
[truncated]
