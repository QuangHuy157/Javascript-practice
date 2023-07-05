function isValid(s) {
  // Đếm số lần xuất hiện của mỗi ký tự trong chuỗi
  const charCount = {};
  for (let i = 0; i < s.length; i++) {
    if (charCount[s[i]]) {
      charCount[s[i]]++;
    } else {
      charCount[s[i]] = 1;
    }
  }

  // Tạo một mảng với số lần xuất hiện các ký tự
  const countArr = Object.values(charCount);

  // Tạo một mảng với số lần xuất hiện của số lần xuất hiện
  const freqCount = {};
  for (let i = 0; i < countArr.length; i++) {
    if (freqCount[countArr[i]]) {
      freqCount[countArr[i]]++;
    } else {
      freqCount[countArr[i]] = 1;
    }
  }

  // Đếm số lượng phần tử khác nhau trong mảng countArr
  const distinctCounts = Object.keys(freqCount).length;

  // Nếu số lượng phần tử khác nhau là 1, hoặc nếu số lượng phần tử khác nhau là 2 và có một phần tử có số lần xuất hiện là 1
  // và số lần xuất hiện của phần tử còn lại là bằng số lần xuất hiện chung nhất
  // thì chuỗi là hợp lệ
  if (
    distinctCounts === 1 ||
    (distinctCounts === 2 &&
      ((freqCount[1] === 1 && Object.values(freqCount)[0] === 1) ||
        (Object.values(freqCount)[0] === 1 &&
          Math.abs(Object.keys(freqCount)[0] - Object.keys(freqCount)[1]) ===
            1)))
  ) {
    return "YES";
  } else {
    return "NO";
  }
}

console.log(isValid("aafgfgfdsewr"));
function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  const s = readLine();
  const result = isValid(s);
  ws.write(result + "\n");
  ws.end();
}

// Giải thích
