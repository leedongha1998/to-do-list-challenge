const clockDiv = document.querySelector(".js-clock"),
  clockSpan = clockDiv.querySelector(".date"),
  clockTime = clockDiv.querySelector(".time");

function getTime() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  clockTime.innerText = `${hour < 10 ? `0${hour}` : hour}:${
    minute < 10 ? `0${minute}` : minute
  }:${second < 10 ? `0${second}` : second}`;
  const year = now.getFullYear();
  const Month = now.getMonth() + 1;
  const date = now.getDate();
  clockSpan.innerText = `오늘은 ${year}년 ${Month}월 ${date}일 입니다.`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
