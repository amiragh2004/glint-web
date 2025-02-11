let $ = document;
const barsElem = $.querySelector("#bar-menu");
const menuDiv = $.querySelector(".menu");
const closeMenuIcon = $.querySelector(".close-menu");
const custumScrollDiv = $.querySelector(".custom-scroll");
const numbersDiv = $.querySelector(".before-number");
let numberElems = $.querySelectorAll(".number");
let numberFlag = false;
let stringChange = $.querySelector("#string-change");

let typewriter = new Typewriter(stringChange, {
  loop: true,
});

let BtnsElem = $.querySelectorAll(".btn");
const svgContainer = $.querySelector(".svg-container");
const pagesContainer = $.querySelector(".btn-container-div");
let currentPage = 1;
let rowsCount = 4;

// codes>>
barsElem.addEventListener("click", function () {
  console.log("click");
  menuDiv.style.right = "0";
});
closeMenuIcon.addEventListener("click", function () {
  menuDiv.style.right = "-280px";
});
window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;
  let documentHeight = document.body.clientHeight;
  let windowHeight = this.window.innerHeight;
  let percentScroll = Math.round(
    (scrollTop / (documentHeight - windowHeight)) * 100
  );
  custumScrollDiv.style.width = percentScroll + "%";
  // console.log(percentScroll);
});

window.addEventListener("scroll", function () {
  if (window.scrollY >= numbersDiv.offsetTop) {
    if (!numberFlag) {
      numberElems.forEach((numbers) => setCount(numbers));
    }
    numberFlag = true;
  }
});
function setCount(el) {
  let elemNumCount = el.dataset.count;
  console.log(elemNumCount);
  let counterInterval = setInterval(() => {
    if (el.textContent == elemNumCount) {
      clearInterval(counterInterval);
    }
    el.textContent++;
  }, 10);
}
typewriter
  .typeString("Welcome to Glint☺")
  .pauseFor(2500)
  .deleteAll()
  .typeString("Creat by Amirgoodi")
  .pauseFor(2500)
  .deleteAll()
  .typeString("Good luck to you ❤")
  .pauseFor(2500)
  .start();

BtnsElem.forEach(function (btn) {
  btn.addEventListener("click", function () {
    // console.log('test');
    swal("Good job!", "You clicked the button!", "success");
  });
});
const svgList = [
  { src: "images/apple.png.webp" },
  { src: "images/atom.png.webp" },
  { src: "images/blackberry.png.webp" },
  { src: "images/dropbox.png.webp" },
  { src: "images/envato.png.webp" },
  { src: "images/firefox.png.webp" },
  { src: "images/firefox.png.webp" },
  { src: "images/atom.png.webp" },
  { src: "images/blackberry.png.webp" },
  { src: "images/dropbox.png.webp" },
  { src: "images/envato.png.webp" },
  { src: "images/apple.png.webp" },
  { src: "images/apple.png.webp" },
  { src: "images/firefox.png.webp" },
  { src: "images/envato.png.webp" },
  { src: "images/dropbox.png.webp" },
  { src: "images/blackberry.png.webp" },
  { src: "images/atom.png.webp" },
  { src: "images/atom.png.webp" },
  { src: "images/apple.png.webp" },
  { src: "images/firefox.png.webp" },
  { src: "images/envato.png.webp" },
  { src: "images/dropbox.png.webp" },
  { src: "images/blackberry.png.webp" },
];

function generateSvg(allSvgArray, svgContainer, currentPage, rowsCount) {
  svgContainer.innerHTML = "";
  // console.log(allSvgArray);
  let endIndex = currentPage * rowsCount;
  let startIndex = endIndex - rowsCount;
  let svgArray = allSvgArray.slice(startIndex, endIndex);
  svgArray.forEach(function (svg) {
    // console.log(svg);
    let imgElem = $.createElement("img");
    imgElem.className = "w-[30%] h-[30%]";
    imgElem.src = svg.src;
    svgContainer.append(imgElem);
  });
  // console.log(svgArray);
}

function setUpPagination(allSvgArray, pagesContainer, rowsCount) {
  pagesContainer.innerHTML = "";
  let pageCount = Math.ceil(allSvgArray.length / rowsCount);
  // console.log(pageCount);

  for (let i = 1; i < pageCount + 1; i++) {
    let btn = creatBtn(i, currentPage, allSvgArray);
    pagesContainer.append(btn);
    // console.log(btn);
  }
}
function creatBtn(nowPage, currentPage, allSvgArray) {
  let liBtnElem = $.createElement("li");
  liBtnElem.className = "p-5";
  let pageButton = $.createElement("button");
  pageButton.className = "w-2.5 h-2.5 bg-green-500";
  liBtnElem.append(pageButton);
  if (nowPage == currentPage) {
    pageButton.classList.add("bg-green-900");
  }
  pageButton.onclick = function () {
    currentPage = nowPage;
    generateSvg(allSvgArray, svgContainer, currentPage, rowsCount);
    let prevBtn = $.querySelector("button.bg-green-900");
    prevBtn.classList.remove("bg-green-900");
    pageButton.classList.add("bg-green-900");
  };
  return liBtnElem;
}
generateSvg(svgList, svgContainer, currentPage, rowsCount);
setUpPagination(svgList, pagesContainer, rowsCount);

const users = [
  {
    id: 1,
    name: "Tim Cook",
    proficiency: "CEO, Apple",
    about:
      " Qui ipsam temporibus quisquam vel. Maiores eos cumque distinctio nam accusantium ipsum. Laudantium quia consequatur molestias delectus culpa facere hic dolores aperiam. Accusantium quos qui praesentium corpori. Excepturi nam cupiditate culpa doloremque deleniti repellat. ",
    profile: "images/user-01.jpg.webp",
  },
  {
    id: 2,
    name: "Sundar Pichai",
    proficiency: "CEO, Google",
    about:
      " Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci. Nisi eaque consequatur. Quasi voluptas eius distinctio. Atque eos maxime. Qui ipsam temporibus quisquam vel. ",
    profile: "images/user-02.jpg.webp",
  },
  {
    id: 3,
    name: "Satya Nadella",
    proficiency: "CEO, Microsoft",
    about:
      " Repellat dignissimos libero. Qui sed at corrupti expedita voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam. Autem eaque officia cum exercitationem sunt voluptatum accusamus. Quasi voluptas eius distinctio. ",
    profile: "images/user-05.jpg.webp",
  },
];

let profilesContainer = $.querySelector(".profiles");
let indexSlider = 0;
function generateProfile(allUsersArray, indexSlider) {
  profilesContainer.innerHTML = "";
  let findUser = allUsersArray.find(function (user) {
    return user.id == indexSlider + 1;
  });
  // console.log(findUser);
  profilesContainer.insertAdjacentHTML(
    "beforeend",
    `<div class="flex flex-col items-center text-center">
<div class="flex items-center gap-20 p-6"><span class=" hidden xs:block"><i class="fas fa-arrow-left hidden text-lg xs:text-3xl" onclick="prevBtnSlider()"></i></span><p class="max-w-[900px] text-[12px] xs:text-[20px] my-20">'
${findUser.about}
'</p><span class=" hidden xs:block"><i class=" hidden fas fa-arrow-right text-lg xs:text-3xl" onclick="nextBtnSlider()"></i></span></div><img class="w-20 h-20 rounded-full"src="${findUser.profile}"alt=""/><div class="info flex flex-col items-center mt-5"><span class="text-lg font-bold">${findUser.name}</span><span class="text-gray-500">${findUser.proficiency}</span></div>
</div>`
  );
}

function prevBtnSlider() {
  indexSlider--;
  if (indexSlider < 0) {
    indexSlider = users.length - 1;
  }
  console.log("prev");
  generateProfile(users, indexSlider);
}
function nextBtnSlider() {
  indexSlider++;
  if (indexSlider > users.length - 1) {
    indexSlider = 0;
  }
  generateProfile(users, indexSlider);
}
setInterval(nextBtnSlider, 9000);
generateProfile(users, indexSlider);
