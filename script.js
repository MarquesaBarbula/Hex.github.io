
//  COLOR TESTER -  SCRIPT FOR COLOR TESTER

    const inputElem = document.querySelector('#input-color');
    const divElem = document.querySelector('#colortester-sample');
    
    function validTextColor(stringToTest) {
      if (stringToTest === "") { return false; }
      if (stringToTest === "inherit") { return false; }
      if (stringToTest === "transparent") { return false; }
    
      const image = document.createElement("img");
      image.style.color = "rgb(0, 0, 0)";
      image.style.color = stringToTest;
      if (image.style.color !== "rgb(0, 0, 0)") { return true; }
      image.style.color = "rgb(255, 255, 255)";
      image.style.color = stringToTest;
      return image.style.color !== "rgb(255, 255, 255)";
    }
    
    inputElem.addEventListener('change', () => {
      if(validTextColor(inputElem.value)) {
        divElem.style.backgroundColor = inputElem.value;
        divElem.textContent = '';
      } else {
        divElem.style.backgroundColor = 'white';
        divElem.textContent = 'Please enter #RRGGBB or rgb(r, g, b), e.g. #456789 or rgb(45,67,89)';
      }
    });





// //  COLOR TESTER -  SCRIPT FOR CUSTOM COLOR TESTER

// .color-cust1 {
//   background-color: hsla(var(--try_h_1), var(--try_s_1), var(--try_l_1), var(--try_a_1));
// }

// // color 1 - red 1

// const sliderred1 = document.getElementById("red1");
// const numred1 = document.getElementById("red1-number");
// const rootred1 = document.documentElement;

// sliderred1.addEventListener("input", (e) => {
//     root.style.setProperty("--try_h_1", e.target.value);
// });

// numred.addEventListener("input", (e) => {
//     root.style.setProperty("--try_h_1", e.target.value);
// });

// // --connect slider and number field
// var rangered1 = document.querySelector("#red1");
// var fieldred1 = document.querySelector("#red1-number");

// rangered1.addEventListener('input', function (e) { fieldred1.value = e.target.value; });
// fieldred1.addEventListener('input', function (e) { rangered1.value = e.target.value; });

// var n = scaleValue(0, [-360,+360], [-1,1]);

// function scaleValue(value, from, to) {
// 	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
// 	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
//   console.log(capped);
// }


// // color 1 - green 1

// const slidergreen1 = document.getElementById("green1");
// const numgreen1 = document.getElementById("green1-number");
// const rootgreen1 = document.documentElement;

// slidergreen1.addEventListener("input", (e) => {
//     root.style.setProperty("--try_s_1", e.target.value + "%");
// });

// numgreen1.addEventListener("input", (e) => {
//     root.style.setProperty("--try_s_1", e.target.value + "%");
// });

// // --connect slider and number field
// var rangegreen1 = document.querySelector("#green1");
// var fieldgreen1 = document.querySelector("#green1-number");

// rangegreen1.addEventListener('input', function (e) { fieldgreen1.value = e.target.value; });
// fieldgreen1.addEventListener('input', function (e) { rangegreen1.value = e.target.value; });

// var n = scaleValue(0, [-360,+360], [-1,1]);

// function scaleValue(value, from, to) {
// 	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
// 	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
//   console.log(capped);
// }

// // color 1 - blue 1

// const sliderblue1 = document.getElementById("blue1");
// const numblue1 = document.getElementById("blue1-number");
// const rootblue1 = document.documentElement;

// sliderblue1.addEventListener("input", (e) => {
//     root.style.setProperty("--try_l_1", e.target.value + "%");
// });

// numblue1.addEventListener("input", (e) => {
//     root.style.setProperty("--try_l_1", e.target.value + "%");
// });

// // --connect slider and number field
// var rangeblue1 = document.querySelector("#blue1");
// var fieldblue1 = document.querySelector("#blue1-number");

// rangeblue1.addEventListener('input', function (e) { fieldblue1.value = e.target.value; });
// fieldblue1.addEventListener('input', function (e) { rangeblue1.value = e.target.value; });

// var n = scaleValue(0, [-360,+360], [-1,1]);

// function scaleValue(value, from, to) {
// 	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
// 	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
//   console.log(capped);
// }


// // color 1 - alph1

// const slideralph1 = document.getElementById("alph1");
// const numalph1 = document.getElementById("alph1-number");
// const rootalph1 = document.documentElement;

// slideralph1.addEventListener("input", (e) => {
//     root.style.setProperty("--try_a_1", e.target.value + "%");
// });

// numalph1.addEventListener("input", (e) => {
//     root.style.setProperty("--try_a_1", e.target.value + "%");
// });

// // --connect slider and number field
// var rangeAlph1 = document.querySelector("#alph1");
// var fieldAlph1 = document.querySelector("#alph1-number");

// rangeAlph1.addEventListener('input', function (e) { fieldAlph1.value = e.target.value; });
// fieldAlph1.addEventListener('input', function (e) { rangeAlph1.value = e.target.value; });

// var n = scaleValue(0, [-360,+360], [-1,1]);

// function scaleValue(value, from, to) {
// 	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
// 	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
//   console.log(capped);
// }

