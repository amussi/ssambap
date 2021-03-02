$(function () {
  // 모바일 메뉴 열기
  $(".header .btn-gnb-ham").click(function () {
    $(".header .gnb").addClass("on");
  });

  // 모바일 메뉴 닫기
  $(".header .btn-gnb-close").click(function () {
    $(".header .gnb").removeClass("on");
  });

  // to_top 화살표 스크롤 위치에 따라 보이기
  $(".to_top").hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() == 0) {
      $(".to_top").hide();
    } else {
      $(".to_top").show(300);
    }
  });

  $(".to_top").click(function () {
    $("html").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  // family_site 클릭하면 family_site list 보이기
  $(".family_site").click(function () {
    $(".family_site .family_list").slideToggle(300);
  });

  // 상단 menu 클릭이벤트
  let _con = document.querySelector(".container");
  $(".header .gnb ul > li > a").click(function (event) {
    let _link = event.target.dataset.link;

    fetch("html/" + _link).then(function (response) {
      response.text().then(function (text) {
        _con.classList.add(_link);
        _con.innerHTML = text;
      });
    });
  });
});
