var hocSinh = [
  { ten: "huy", khoi: "A", diem: { toan: 7, van: 5, anh: 5 } },
  { ten: "lam", khoi: "B", diem: { toan: 5, van: 7, anh: 5 } },
  { ten: "tung", khoi: "C", diem: { toan: 7, van: 4, anh: 7 } },
];

var khoiThi = [
  { khoi: "A", heSo: { toan: 2, van: 1, anh: 1 }, diemSan: 25 },
  { khoi: "B", heSo: { toan: 1, van: 1, anh: 2 }, diemSan: 24 },
  { khoi: "C", heSo: { toan: 1, van: 2, anh: 1 }, diemSan: 20 },
];

//1.Tính điểm thi của từng học sinh huy biết tổng điêm = điểm thi * hệ số

var diemthiHuy =
  hocSinh[0].diem.toan * khoiThi[0].heSo.toan +
  hocSinh[0].diem.van * khoiThi[0].heSo.van +
  hocSinh[0].diem.anh * khoiThi[0].heSo.anh;
console.log("diemthiHuy:", diemthiHuy);

var diemthiLam =
  hocSinh[0].diem.toan * khoiThi[0].heSo.toan +
  hocSinh[0].diem.van * khoiThi[0].heSo.van +
  hocSinh[0].diem.anh * khoiThi[0].heSo.anh;

var diemthiTung =
  hocSinh[0].diem.toan * khoiThi[0].heSo.toan +
  hocSinh[0].diem.van * khoiThi[0].heSo.van +
  hocSinh[0].diem.anh * khoiThi[0].heSo.anh;
//2. Cho biết ai thi đỗ, ai thi trượt
//    Thi đỗ : điểm thi >= điểm sàn
//
