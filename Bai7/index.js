var tenKhach = [
  {
    ten: "Huy",
    gioBay: "11:30",
    diemDen: "Nha Trang",
    veKhoang: "S",
  },
  { ten: "Thinh", gioBay: "9:30", diemDen: "Ha Noi", veKhoang: "A" },
  { ten: "Hoang", gioBay: "10:15", diemDen: "Hai Phong", veKhoang: "B" },
  {
    ten: "Nam",
    gioBay: "13:30",
    diemDen: "Nha Trang",
    veKhoang: "C",
  },
  { ten: "Lap", gioBay: "14:30", diemDen: "TP.HCM", veKhoang: "A" },
  { ten: "Hai", gioBay: "11:30", diemDen: "Nam Dinh", veKhoang: "B" },
];

var choNgoi = [
  { ten: "Ghe hang king", mave: "S" },
  { ten: "Ghe hang thuong gia", mave: "A" },
  { ten: "Ghe hang pho thong", mave: "B" },
  { ten: "Ghe hang pho cap", mave: "C" },
];

var chuyenBay = [
  { gioBay: "11:30", diemDen: "Nha Trang", maMayBay: "AB123" },
  { gioBay: "13:30", diemDen: "Nha Trang", maMayBay: "GD178" },
  { gioBay: "11:30", diemDen: "Nam Dinh", maMayBay: "BC452" },
  { gioBay: "14:30", diemDen: "TP.HCM", maMayBay: "GD73" },
  { gioBay: "10:15", diemDen: "Hai Phong", maMayBay: "FT351" },
];

// Viết function in ra thông tin của những người cùng giờ bay và cho thêm dữ kiện họ ngồi ghế gì, trên những chuyến bay nào .
function InThongTinChuyenBay() {
  for (let i = 0; i < chuyenBay.length; i++) {
    let chuyenbay = chuyenBay[i];
    for (let i = 0; i < tenKhach.length; i++) {
      let tenkhach = tenKhach[i];
      if (
        tenkhach.gioBay === chuyenbay.gioBay &&
        tenkhach.diemDen === chuyenbay.diemDen
      ) {
        let tenGhe = "";
        for (let j = 0; j < choNgoi.length; j++) {
          if (choNgoi[j].mave === tenkhach.veKhoang) {
            tenGhe = choNgoi[j].ten;
            break;
          }
        }
        let html = `Tên: ${tenkhach.ten}, Giờ bay: ${tenkhach.gioBay}, Điểm đến: ${tenkhach.diemDen}, Vé khoang: ${tenGhe}`;
        console.log(html);
      }
    }
  }
}

InThongTinChuyenBay();

// 2.Viết function tìm theo tên hành khách và in ra chuyến bay của họ

function TimChuyenBayTheoTen(ten) {
  for (let i = 0; i < tenKhach.length; i++) {
    let tenkhach = tenKhach[i];
    if ((tenkhach.ten = ten)) {
      for (let j = 0; j < chuyenBay.length; j++) {
        let chuyenbay = chuyenBay[j];
        if (
          chuyenbay.diemDen === tenkhach.diemDen &&
          chuyenbay.gioBay === tenkhach.gioBay
        ) {
          console.log(
            "Hanh khach " +
              ten +
              " di chuyen bay " +
              chuyenbay.maMayBay +
              " den " +
              chuyenbay.diemDen +
              " luc " +
              chuyenbay.gioBay
          );
          return;
        }
      }
      console.log("Hanh khach " + ten + " khong co chuyen bay nao");
      return;
    }
  }
  console.log("Khong tim thay hanh khach " + ten);
}

console.log(TimChuyenBayTheoTen("Huy"));
