const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function() {
    searchInputEl.focus();
});

// 포커스 지정 = focus
searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add("focused");
    searchInputEl.setAttribute('placeholder', '통합검색');
});

// 포커스 해제 = blur
searchInputEl.addEventListener('blur', function() {
    searchEl.classList.remove("focused");
    searchInputEl.setAttribute('placeholder', '');
});


// Footer 연도
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();