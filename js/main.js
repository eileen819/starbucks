// 뱃지 아이콘
const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      // 배지 숨기기
      // badgeEl.style.display = 'none'; << 이런 식으로 만들 순 있지만 전환효과가 이쁘게 되지 않음, 그래서 gsap 라이브러리 사용
      // gsap.to(애니메이션 처리를 할 요소(css 선택자를 넣어도 됨), 애니메이션 처리될 지속시간, 적용할 애니메이션 옵션(css 속성과 값을 입력할 수 있음))
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
        // 문자로 입력해야 하는 값은 '' 를 반드시 사용할 것
      });
      // 상단으로 올라가는 버튼 보이기
      gsap.to(toTopEl, 0.2, {
        x: 0,
      });
    } else {
      // 배지 보이기
      // badgeEl.style.display = 'block';
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      // 상단으로 올라가는 버튼 숨기기, 요소 부분에 css 선택자를 문자형식으로 넣어줘도 됨
      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
    }
  }, 300)
);
// document: html 을 의미
// window: 브라우저, 하나의 창, 하나의 탭을 의미, 보고 있는 화면 자체
// _.throttle(실행할 함수, 함수를 몇 초에 한번씩 작동시킬지 시간을 작성(ms단위)) << lodash 파일을 이용해서 쓰는 메소드
/* 
    _.throttle의 동작 원리
    _.throttle(func, wait)는 두 가지 일을 합니다:

    **원래의 함수(func)를 래핑(wrapping)**하여 새로운 함수를 만듭니다.(_.throttle이 새로운 함수를 반환)
    이 새로운 함수는 특정 시간 간격(wait) 동안에만 실행되도록 제한됩니다.
*/
// scrollY: 스크롤된 부분의 위치값을 알려줌
// gsap(자바스크립트 애니메이션 라이브러리)를 이용해서 애니메이션을 추가함
// opacity 처럼 값을 숫자로 입력하는 속성들은 전환효과를 통해 요소의 전/후 상태를 중간 숫자값으로 자연스럽게 만들어 줄 수 있지만,
// display 처럼 값이 숫자가 아닌 속성은 전/후 상태의 중간값이 존재하지 않기때문에 자연스러운 전환 효과를 적용할 수 없음

// 하단 버튼 클릭 시, 화면의 최상단으로 이동하게 만들기
// scrollTo는 ScrollToPlugin 라이브러리를 통해서 동작함
// 애니메이션을 적용할 요소를 window 객체로 넣어서 화면의 최상단으로 이동할 수 있도록 만들어 줌
toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, // 0.7, 1.4, 2.1, 2.7초의 순서로 요소들이 동작하게 됨
    opacity: 1,
  });
});

// Swiper: new Swiper(선택자, 옵션)
new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

new Swiper(".promotion .swiper-container", {
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000,
  },
  // 해당하는 요소 각각에 아래의 기능을 넣어준 것임
  pagination: {
    el: ".promotion .swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

new Swiper(".awards .swiper-container", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

// 스타벅스 프로모션 토글 버튼 제어
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    // 숨김 처리
    promotionEl.classList.add("hide");
  } else {
    // 보임 처리
    promotionEl.classList.remove("hide");
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

// YOUTUBE 화면 위의 요소 애니메이션 처리
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    {
      // 옵션
      y: size,
      repeat: -1, // gsap js라이브러리에서 지정되어있는 무한반복의 의미
      yoyo: true, // 애니메이션이 한 번 진행되고 다시 돌아오는 것(재생 <-> 역재생 반복)
      ease: Power1.easeInOut, // ease 함수(타이밍 함수)를 이용해서 요소를 원하는 형태의 애니메이션으로 제어
      delay: random(0, delay),
    }
  );
}
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

// ScrollMagic
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8, // 뷰포트(상단: 0, 하단: 1 로 봄) 기준으로 어느 지점에서 요소가 보일 때 동작을 시작할지 그 위치를 정해줌
  })
    .setClassToggle(spyEl, "show") // 클래스를 추가 or 제거할 요소를 정해주고 어떤 클래스의 이름으로 넣었다 뺏다할 지 적어줌
    .addTo(new ScrollMagic.Controller());
});
