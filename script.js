const gradeMap = { P: 65, M: 85, D: 100 };

function getVal(id) {
  let v = document.getElementById(id).value.trim().toUpperCase();
  if (gradeMap[v]) return gradeMap[v];
  let num = parseFloat(v);
  return (!isNaN(num) && num >= 0 && num <= 100) ? num : null;
}

function avg(list) {
  let vals = list.map(id => getVal(id));
  if (vals.some(v => v === null)) return null;
  return vals.reduce((a, b) => a + b, 0) / vals.length;
}

function calculateFirst() {
  const first = avg(["f1", "f2", "f3", "f4", "f5"]);
  if (first === null) {
    document.getElementById("outputFirst").innerHTML = "⚠️ تأكد من إدخال جميع الدرجات بشكل صحيح";
    return;
  }
  const resFirst = (first / 100) * 35;
  document.getElementById("outputFirst").innerHTML = `معدل السنة الأولى: ${resFirst.toFixed(2)} / 35`;
}

function calculateSecond() {
  const second = avg(["s1", "s2", "s3", "s4"]);
  if (second === null) {
    document.getElementById("outputSecond").innerHTML = "⚠️ تأكد من إدخال جميع الدرجات بشكل صحيح";
    return;
  }
  const resSecond = (second / 100) * 35;
  document.getElementById("outputSecond").innerHTML = `معدل السنة الثانية: ${resSecond.toFixed(2)} / 35`;
}

function calculateCommon() {
  const common = avg(["c1", "c2", "c3", "c4"]);
  if (common === null) {
    document.getElementById("outputCommon").innerHTML = "⚠️ تأكد من إدخال جميع الدرجات بشكل صحيح";
    return;
  }
  const resCommon = (common / 100) * 30;
  document.getElementById("outputCommon").innerHTML = `معدل المواد المشتركة: ${resCommon.toFixed(2)} / 30`;
}

// تثبيت الموقع عند التركيز على الحقول
function disableScroll() {
  document.body.style.overflow = "hidden";
}

function enableScroll() {
  document.body.style.overflow = "auto";
}

// تغيير الاقتباسات في شريط الأخبار
const quotes = [
  "🌟 النجاح يبدأ بخطوة صغيرة! 🚀",
  "💡 التعلم هو مفتاح النجاح! 📚",
  "🔥 لا تستسلم، كل محاولة تقربك للهدف! 💪",
  "🌈 اجعل اليوم أفضل يوم في حياتك! 🌟",
  "🚀 الطموح هو الوقود الذي يدفعك نحو القمة! 🌟",
  "📖 التعلم المستمر هو سر النجاح! 💡"
];

let quoteIndex = 0;
setInterval(() => {
  const newsBar = document.getElementById("news-bar");
  newsBar.textContent = quotes[quoteIndex];
  quoteIndex = (quoteIndex + 1) % quotes.length;
}, 5000);