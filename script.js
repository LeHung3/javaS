class NhanVien {
    constructor(maNV, hoTen, ngaySinh, phongBan, heSoLuong) {
        this.maNV = maNV;
        this.hoTen = hoTen;
        this.ngaySinh = ngaySinh;
        this.phongBan = phongBan;
        this.heSoLuong = heSoLuong;
    }

    // Method cập nhật thông tin nhân viên
    capNhatThongTin(hoTen, ngaySinh, phongBan, heSoLuong) {
        this.hoTen = hoTen;
        this.ngaySinh = ngaySinh;
        this.phongBan = phongBan;
        this.heSoLuong = heSoLuong;
    }

    // Method hiển thị thông tin nhân viên
    hienThiThongTin() {
        return `<div class="nhanVien">
                    <p>Mã NV: ${this.maNV}</p>
                    <p>Họ và tên: ${this.hoTen}</p>
                    <p>Ngày sinh: ${this.ngaySinh}</p>
                    <p>Phòng ban: ${this.phongBan}</p>
                    <p>Hệ số lương: ${this.heSoLuong}</p>
                    <button onclick="capNhatThongTin('${this.maNV}')">Cập nhật</button>
                </div>`;
    }
}

// Danh sách nhân viên
let danhSachNhanVien = [];

// Hàm tạo danh sách nhân viên
function taoDanhSachNhanVien() {
    let soLuongNhanVien = parseInt(document.getElementById('soLuongNV').value);
    let outputDiv = document.getElementById('danhSachNV');
    outputDiv.innerHTML = '';
    danhSachNhanVien = [];

    for (let i = 0; i < soLuongNhanVien; i++) {
        let maNV = prompt(`Nhập mã nhân viên ${i + 1}:`);
        let hoTen = prompt(`Nhập họ và tên nhân viên ${i + 1}:`);
        let ngaySinh = prompt(`Nhập ngày tháng năm sinh của nhân viên ${i + 1}:`);
        let phongBan = prompt(`Nhập phòng ban của nhân viên ${i + 1}:`);
        let heSoLuong = parseFloat(prompt(`Nhập hệ số lương của nhân viên ${i + 1}:`));

        let nv = new NhanVien(maNV, hoTen, ngaySinh, phongBan, heSoLuong);
        danhSachNhanVien.push(nv);

        let nhanVienDiv = document.createElement('div');
        nhanVienDiv.classList.add('nhanVien');
        nhanVienDiv.innerHTML = nv.hienThiThongTin();
        outputDiv.appendChild(nhanVienDiv);
    }
}

// Hàm cập nhật thông tin nhân viên
function capNhatThongTin(maNV) {
    let nv = danhSachNhanVien.find(nv => nv.maNV === maNV);
    if (nv) {
        let hoTen = prompt("Nhập họ và tên mới: ");
        let ngaySinh = prompt("Nhập ngày tháng năm sinh mới: ");
        let phongBan = prompt("Nhập phòng ban mới: ");
        let heSoLuong = parseFloat(prompt("Nhập hệ số lương mới: "));

        nv.capNhatThongTin(hoTen, ngaySinh, phongBan, heSoLuong);

        // Hiển thị lại danh sách nhân viên sau khi cập nhật
        let outputDiv = document.getElementById('danhSachNV');
        outputDiv.innerHTML = '';
        danhSachNhanVien.forEach(nv => {
            let nhanVienDiv = document.createElement('div');
            nhanVienDiv.classList.add('nhanVien');
            nhanVienDiv.innerHTML = nv.hienThiThongTin();
            outputDiv.appendChild(nhanVienDiv);
        });
    } else {
        alert("Không tìm thấy nhân viên có mã này!");
    }
}
