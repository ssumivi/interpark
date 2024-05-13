window.onload = function () {
  // 모달창 ==============================
  const body = document.querySelector("body");
  const modal = document.querySelector(".modal-wrap");
  modal.addEventListener("click", function () {
    modal.style.display = "none";
    fadeout(modal);
  });
  //isOpen 값에 따라 스크롤을 제어하는 함수
  function controlScroll(isOpen) {
    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }
  // 초기 모달 상태 설정
  const isOpen = true;
  controlScroll(isOpen);
  modal.addEventListener("click", function () {
    modal.style.display = "none";
    // 모달이 닫힐 때는 스크롤을 다시 활성화
    controlScroll(false);
  });
  // ===========================================
  // <!-- promotion swiper -->
  var swiper = new Swiper(".sw-promotion", {
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".promotion .sw-next",
      prevEl: ".promotion .sw-prev",
    },
    pagination: {
      el: ".sw-promotion-pg",
      clickable: true,
    },
    breakpoints: {
      760: {
        slidesPerView: 2,
      },
    },
  });
  //  shopping swiper
  var swiper = new Swiper(".sw-shopping", {
    slidesPerView: 5,
    grid: {
      rows: 2,
      fill: "row",
    },
    spaceBetween: 10,
    breakpoints: {
      900: {
        spaceBetween: 32,
        slidesPerView: 4,
        // 화면당 3개씩 슬라이드 이동
        slidesPerGroup: 3,
        grid: {
          rows: 1,
        },
      },
      1024: {
        spaceBetween: 32,
        slidesPerView: 3,
        // 화면당 3개씩 슬라이드 이동
        slidesPerGroup: 3,
        grid: {
          rows: 1,
        },
      },
      1280: {
        spaceBetween: 26,
        slidesPerView: 4,
        // 화면당 4개씩 슬라이드 이동
        slidesPerGroup: 4,
        grid: {
          rows: 1,
        },
      },
    },
  });
  //  Tour Swiper
  var swiper = new Swiper(".sw-tour", {
    slidesPerView: 3,
    spaceBetween: 10,
    grid: {
      rows: 2,
      fill: "row",
    },
    loop: true,
    navigation: {
      nextEl: ".tour .sw-next",
      prevEl: ".tour .sw-prev",
    },
    breakpoints: {
      1024: {
        spaceBetween: 32,
        slidesPerView: 2,
        // 화면당 2개씩 슬라이드 이동
        slidesPerGroup: 2,
        grid: {
          rows: 1,
        },
      },
      1280: {
        spaceBetween: 26,
        slidesPerView: 3,
        // 화면당 4개씩 슬라이드 이동
        slidesPerGroup: 3,
        grid: {
          rows: 1,
        },
      },
    },
  });
  //   ticket swiper
  var swiper = new Swiper(".sw-ticket", {
    slidesPerView: "auto",
    spaceBetween: 10,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 27,
      },
    },
  });
  //   live swiper
  var swiper = new Swiper(".sw-live", {
    slidesPerView: 4,
    spaceBetween: 10,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 27,
      },
    },
  });
  //   books swiper
  var swiper = new Swiper(".sw-books", {
    slidesPerView: 3,
    spaceBetween: 19,
    grid: {
      rows: 3,
      fill: "row",
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
        grid: {
          rows: 1,
        },
      },
      1280: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 27,
        grid: {
          rows: 1,
        },
      },
    },
  });
  //   events swiper
  var swiper = new Swiper(".sw-events", {
    slidesPerView: 3,
    spaceBetween: 27,
    breakpoints: {
      1280: {
        slidesPerView: 4,
      },
    },
  });
  // const topBtn = document.getElementById("gotop");
  // topBtn.addEventListener("click", function (event) {
  //   event.preventDefault();
  //   // console.log(window.scrollY);
  //   if (window.scrollY == 0) {
  //     window.scrollTo({
  //       top: 9999,
  //       behavior: "smooth",
  //     });
  //   } else {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth",
  //     });
  //   }
  // });
  const topBtn = document.getElementById("gotop");
  topBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (window.scrollY == 0) {
      // 현재 스크롤 위치가 0이면 페이지 맨 아래로 스크롤
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    } else {
      // 현재 스크롤 위치가 0이 아니면 페이지 맨 위로 스크롤
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });
};
