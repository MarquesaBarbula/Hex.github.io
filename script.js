
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





//  COLOR TESTER -  SCRIPT FOR CUSTOM COLOR TESTER

// color 1 - red 1

// const sliderhue1 = document.getElementById("hue1");
// const numhue1 = document.getElementById("hue1-number");
// const roothue1 = document.documentElement;

// sliderhue1.addEventListener("input", (e) => {
//     root.style.setProperty("--try_h_1", e.target.value);
// });

// numhue1.addEventListener("input", (e) => {
//     root.style.setProperty("--try_h_1", e.target.value);
// });

// // --connect slider and number field
// var rangeHue1 = document.querySelector("#hue1");
// var fieldHue1 = document.querySelector("#hue1-number");

// rangeHue1.addEventListener('input', function (e) { fieldHue1.value = e.target.value; });
// fieldHue1.addEventListener('input', function (e) { rangeHue1.value = e.target.value; });

// var n = scaleValue(0, [-360,+360], [-1,1]);

// function scaleValue(value, from, to) {
// 	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
// 	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
//   console.log(capped);
// }

// color 1 - green 1


// color 1 - blue 1

