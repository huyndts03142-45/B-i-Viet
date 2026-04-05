function generateQR() {
    let name = document.getElementById("name").value;
    let amount = document.getElementById("amount").value;

    if (amount === "") {
        alert("Vui lòng nhập số tiền!");
        return;
    }

    // 🔥 THAY THÔNG TIN CỦA BẠN
    let bank = "MB";              // Mã ngân hàng
    let stk = "0123456789";       // Số tài khoản
    let accountName = "NGUYEN VAN A";

    let url = `https://img.vietqr.io/image/${bank}-${stk}-compact.png?amount=${amount}&addInfo=${encodeURIComponent(name)}&accountName=${encodeURIComponent(accountName)}`;

    let qr = document.getElementById("qr");
    qr.src = url;
    qr.style.display = "block";
}