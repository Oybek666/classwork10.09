// 1. Massiv yaratish va har bir elementni katta harflar bilan chiqish
let mevalar = ["olma", "banan", "uzum", "anor", "shaftoli"];
mevalar.forEach(m => console.log(m.toUpperCase()));

// 2. Massivdagi eng katta va eng kichik elementlarni topish
let engKatta = Math.max(...mevalar.map(m => m.length));
let engKichik = Math.min(...mevalar.map(m => m.length));
console.log("Eng katta: " + mevalar.find(m => m.length === engKatta));
console.log("Eng kichik: " + mevalar.find(m => m.length === engKichik));

// 3. Juft sonlar yig'indisi (massiv berilmagan, shuning uchun uni taxminan yarataman)
let sonlar = [2, 5, 8, 3, 10];
let juftYigindi = sonlar.filter(s => s % 2 === 0).reduce((a, b) => a + b, 0);
console.log("Juft sonlar yig'indisi: " + juftYigindi);

// 4. Elementlarni teskari tartibda chiqish
console.log(mevalar.reverse());

// 5. Faqat string elementlardan iborat yangi massiv yaratish
let aralash = ['salom', 2, true, 'hi', 'hello', 'ok', null, 232];
let faqatStringlar = aralash.filter(e => typeof e === 'string');
console.log(faqatStringlar);

// 6. O'rta arifmetigini hisoblash
let sonMassivi = [3, 5, 7, 2, 4];
let ortacha = sonMassivi.reduce((a, b) => a + b, 0) / sonMassivi.length;
console.log("O'rta arifmetik: " + ortacha);

// 7. Sonlarning ko'paytmasini hisoblash
let kopaytma = sonMassivi.reduce((a, b) => a * b, 1);
console.log("Ko'paytma: " + kopaytma);

// 8. Toq sonlar o'rta arifmetigini hisoblash
let toqSonlar = sonMassivi.filter(s => s % 2 !== 0);
let toqOrtaArifmetik = toqSonlar.reduce((a, b) => a + b, 0) / toqSonlar.length;
console.log("Toq sonlar o'rta arifmetigi: " + toqOrtaArifmetik);






