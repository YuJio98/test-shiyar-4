"use strict";

function updateDate() {
  var date = new Date();
  var setTime = document.getElementById("setTime");
  setTime.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  var setDate = document.getElementById("setDate");
  setDate.innerHTML = date.getDate() + "-" + parseInt(date.getMonth() + 1) + "-" + date.getFullYear();
}

setInterval(updateDate, 100);
onload = updateDate();

function getColor() {
  var getColor = document.getElementById("setcolor").value;
  localStorage.setItem("COLOR", getColor);
  document.getElementById("time").style.background = localStorage.getItem("COLOR");
  document.getElementById("body").style.background = localStorage.getItem("COLOR");
}

function setColor() {
  document.getElementById("setcolor").value = localStorage.getItem("COLOR");
  document.getElementById("time").style.background = localStorage.getItem("COLOR");
  document.getElementById("body").style.background = localStorage.getItem("COLOR");
}

setInterval(setColor, 100);