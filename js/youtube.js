// 2. This code loads the IFrame Player API code asynchronously.
// 유튜브 JS 라이브러리를 스크립트 태그를 이용해서 삽입
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api"; // 유튜브에서 제공하는 js 라이브러리
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
// 유튜브 JS 라이브러리를 이용해서 플레이어를 제어하기
// onYouTubeIframeAPIReady 함수는 이름을 바꾸면 안됨. 사유: 유튜브에서 제공하는 JS 라이브러리에서 꺼내와서 쓰는 함수이기 때문
function onYouTubeIframeAPIReady() {
  new YT.Player("player", {
    videoId: "An6LvWQuj_8", // 최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: "An6LvWQuj_8", // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      onReady: function (event) {
        event.target.mute(); // 음소거
      },
    },
  });
}
