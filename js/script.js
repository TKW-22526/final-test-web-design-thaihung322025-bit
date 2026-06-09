document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Logic Thêm vào giỏ hàng
    let cartCount = 0;
    const cartDisplay = document.getElementById("cartCount");
    const btns = document.querySelectorAll(".add-to-cart");

    btns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault(); 
            cartCount++; 
            if(cartDisplay) cartDisplay.textContent = cartCount; 
            
            const oriText = btn.innerHTML;
            btn.innerHTML = '<i class="bi bi-check2"></i> Đã thêm';
            btn.classList.add("bg-success", "text-white", "border-success");
            
            setTimeout(() => {
                btn.innerHTML = oriText;
                btn.classList.remove("bg-success", "text-white", "border-success");
            }, 1000);
        });
    });

    // 2. Logic đổi ảnh Gallery
    const mainImg = document.getElementById("mainImage");
    const thumbs = document.querySelectorAll(".thumb-img");

    thumbs.forEach(t => {
        t.addEventListener("click", function() {
            if(mainImg) mainImg.src = this.src;
            document.querySelector(".thumb-img.active")?.classList.remove("active");
            this.classList.add("active");
        });
    });

    // 3. Logic Form Liên Hệ (Báo lỗi nếu để trống)
    const form = document.getElementById("contactForm");
    if(form) {
        form.addEventListener('submit', e => {
            if (!form.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
            } else {
                e.preventDefault(); 
                alert("Cảm ơn bạn! Lời nhắn đã được gửi đi.");
                form.reset();
                form.classList.remove('was-validated');
                return;
            }
            form.classList.add('was-validated');
        }, false);
    }
});