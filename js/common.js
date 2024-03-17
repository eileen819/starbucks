const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus()
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
  // setAttribute('사용할 속성의 이름', '속성의 값') : html 속성을 지정할 때 사용하는 메소드
});

// input 요소의 focus가 해제되었을 경우, class 삭제하는 코드
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


// 올해 연도를 자동으로 출력
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
// textContent >> 해당 요소에 내용을 넣어줄 수 있음