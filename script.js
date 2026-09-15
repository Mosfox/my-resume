// ---------- 1. เมนูแฮมเบอร์เกอร์สำหรับมือถือ ----------
const menuToggle = document.querySelector('#menu-toggle');
const siteNav = document.querySelector('.site-nav');

// ตรวจก่อนว่าเจอจริง กันหน้าที่ไม่มีปุ่มนี้เกิด error
if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', function () {
    siteNav.classList.toggle('open'); // มีก็เอาออก ไม่มีก็ใส่เข้า

    // บอกโปรแกรมอ่านหน้าจอว่าตอนนี้เมนูเปิดหรือปิด
    const isOpen = siteNav.classList.contains('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });
}

// ---------- 2. ทำเมนู active อัตโนมัติตามหน้าปัจจุบัน ----------
let currentPage = window.location.pathname.split('/').pop();

// ถ้าเปิดที่รากของเว็บ ให้ถือว่าเป็น index.html
if (currentPage === '') {
  currentPage = 'index.html';
}

// วนดูลิงก์เมนูทุกตัว แล้วใส่ active ให้ตัวที่ตรงกับหน้าปัจจุบัน
const navLinks = document.querySelectorAll('.site-nav a');
navLinks.forEach(function (link) {
  const linkPage = link.getAttribute('href');
  if (linkPage === currentPage) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});