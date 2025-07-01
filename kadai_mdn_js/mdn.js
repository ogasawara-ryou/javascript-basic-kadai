const date = new Date();
const [month, day, year] = [
  date.getMonth() + 1, // Month is 0-indexed, so add 1
  date.getDate(),
  date.getFullYear(),
];

// 出力形式が "MM/DD/YYYY" の場合
console.log(`${year}年${month}月${day}日`);