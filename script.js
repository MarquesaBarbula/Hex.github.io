
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
    divElem.textContent = 'Enter a name from the list above or try a new #RRGGBB';
  }
});



// HEX COLOR TESTER 2

// RED 1
const slider = document.getElementById("red1-slider");
const numInput = document.getElementById("red1-number");
const root = document.documentElement;

slider.addEventListener("input", (e) => {
    root.style.setProperty("--try_this_red1", e.target.value);
});

numInput.addEventListener("input", (e) => {
    root.style.setProperty("--try_this_red1", e.target.value);
});

// --connect slider and number field
var range = document.querySelector("#red1-slider");
var field = document.querySelector("#red1-number");

range.addEventListener('input', function (e) { field.value = e.target.value; });
field.addEventListener('input', function (e) { range.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}

// GREEN 1
const slider2 = document.getElementById("green1-slider");
const numInput2 = document.getElementById("green1-number");
const root2 = document.documentElement;

slider2.addEventListener("input", (e) => {
    root.style.setProperty("--try_this_green1", e.target.value);
});

numInput2.addEventListener("input", (e) => {
    root.style.setProperty("--try_this_green1", e.target.value);
});

// --connect slider and number field
var range2 = document.querySelector("#green1-slider");
var field2 = document.querySelector("#green1-number");

range2.addEventListener('input', function (e) { field2.value = e.target.value; });
field2.addEventListener('input', function (e) { range2.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}

// BLUE 1
const slider3 = document.getElementById("blue1-slider");
const numInput3 = document.getElementById("blue1-number");
const root3 = document.documentElement;

slider3.addEventListener("input", (e) => {
    root.style.setProperty("--try_this_blue1", e.target.value);
});

numInput3.addEventListener("input", (e) => {
    root.style.setProperty("--try_this_blue1", e.target.value);
});

// --connect slider and number field
var range3 = document.querySelector("#blue1-slider");
var field3 = document.querySelector("#blue1-number");

range3.addEventListener('input', function (e) { field3.value = e.target.value; });
field3.addEventListener('input', function (e) { range3.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}





// CUSTOM COLOR PALETTE

// color 1 - R

const sliderhue1 = document.getElementById("hue1");
const numhue1 = document.getElementById("hue1-number");
const roothue1 = document.documentElement;

sliderhue1.addEventListener("input", (e) => {
    root.style.setProperty("--try_h_1", e.target.value);
});

numhue1.addEventListener("input", (e) => {
    root.style.setProperty("--try_h_1", e.target.value);
});

// --connect slider and number field
var rangeHue1 = document.querySelector("#hue1");
var fieldHue1 = document.querySelector("#hue1-number");

rangeHue1.addEventListener('input', function (e) { fieldHue1.value = e.target.value; });
fieldHue1.addEventListener('input', function (e) { rangeHue1.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}


// color 1 - G

const sliderSat1 = document.getElementById("sat1");
const numSat1 = document.getElementById("sat1-number");
const rootSat1 = document.documentElement;

sliderSat1.addEventListener("input", (e) => {
    root.style.setProperty("--try_s_1", e.target.value);
});

numSat1.addEventListener("input", (e) => {
    root.style.setProperty("--try_s_1", e.target.value);
});

// --connect slider and number field
var rangesat1 = document.querySelector("#sat1");
var fieldsat1 = document.querySelector("#sat1-number");

rangesat1.addEventListener('input', function (e) { fieldsat1.value = e.target.value; });
fieldsat1.addEventListener('input', function (e) { rangesat1.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}

// color 1 - B

const sliderlig1 = document.getElementById("lig1");
const numlig1 = document.getElementById("lig1-number");
const rootlig1 = document.documentElement;

sliderlig1.addEventListener("input", (e) => {
    root.style.setProperty("--try_l_1", e.target.value);
});

numlig1.addEventListener("input", (e) => {
    root.style.setProperty("--try_l_1", e.target.value);
});

// --connect slider and number field
var rangeLig1 = document.querySelector("#lig1");
var fieldLig1 = document.querySelector("#lig1-number");

rangeLig1.addEventListener('input', function (e) { fieldLig1.value = e.target.value; });
fieldLig1.addEventListener('input', function (e) { rangeLig1.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}



// color 2 - R

const sliderhue2 = document.getElementById("hue2");
const numhue2 = document.getElementById("hue2-number");
const roothue2 = document.documentElement;

sliderhue2.addEventListener("input", (e) => {
    root.style.setProperty("--try_h_2", e.target.value);
});

numhue2.addEventListener("input", (e) => {
    root.style.setProperty("--try_h_2", e.target.value);
});

// --connect slider and number field
var rangeHue2 = document.querySelector("#hue2");
var fieldHue2 = document.querySelector("#hue2-number");

rangeHue2.addEventListener('input', function (e) { fieldHue2.value = e.target.value; });
fieldHue2.addEventListener('input', function (e) { rangeHue2.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}


// color 2 - G

const slidersat2 = document.getElementById("sat2");
const numsat2 = document.getElementById("sat2-number");
const rootsat2 = document.documentElement;

slidersat2.addEventListener("input", (e) => {
    root.style.setProperty("--try_s_2", e.target.value);
});

numsat2.addEventListener("input", (e) => {
    root.style.setProperty("--try_s_2", e.target.value);
});

// --connect slider and number field
var rangeSat2 = document.querySelector("#sat2");
var fieldSat2 = document.querySelector("#sat2-number");

rangeSat2.addEventListener('input', function (e) { fieldSat2.value = e.target.value; });
fieldSat2.addEventListener('input', function (e) { rangeSat2.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}


// color 2 - B

const sliderlig2 = document.getElementById("lig2");
const numlig2 = document.getElementById("lig2-number");
const rootlig2 = document.documentElement;

sliderlig2.addEventListener("input", (e) => {
    root.style.setProperty("--try_l_2", e.target.value);
});

numlig2.addEventListener("input", (e) => {
    root.style.setProperty("--try_l_2", e.target.value);
});

// --connect slider and number field
var rangeLig2 = document.querySelector("#lig2");
var fieldLig2 = document.querySelector("#lig2-number");

rangeLig2.addEventListener('input', function (e) { fieldLig2.value = e.target.value; });
fieldLig2.addEventListener('input', function (e) { rangeLig2.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}




// color 3 - R

const sliderhue3 = document.getElementById("hue3");
const numhue3 = document.getElementById("hue3-number");
const roothue3 = document.documentElement;

sliderhue3.addEventListener("input", (e) => {
    root.style.setProperty("--try_h_3", e.target.value);
});

numhue3.addEventListener("input", (e) => {
    root.style.setProperty("--try_h_3", e.target.value);
});

// --connect slider and number field
var rangeHue3 = document.querySelector("#hue3");
var fieldHue3 = document.querySelector("#hue3-number");

rangeHue3.addEventListener('input', function (e) { fieldHue3.value = e.target.value; });
fieldHue3.addEventListener('input', function (e) { rangeHue3.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}


// color 3 - G

const slidersat3 = document.getElementById("sat3");
const numsat3 = document.getElementById("sat3-number");
const rootsat3 = document.documentElement;

slidersat3.addEventListener("input", (e) => {
    root.style.setProperty("--try_s_3", e.target.value);
});

numsat3.addEventListener("input", (e) => {
    root.style.setProperty("--try_s_3", e.target.value);
});

// --connect slider and number field
var rangeSat3 = document.querySelector("#sat3");
var fieldSat3 = document.querySelector("#sat3-number");

rangeSat3.addEventListener('input', function (e) { fieldSat3.value = e.target.value; });
fieldSat3.addEventListener('input', function (e) { rangeSat3.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}


// color 3 - B

const sliderlig3 = document.getElementById("lig3");
const numlig3 = document.getElementById("lig3-number");
const rootlig3 = document.documentElement;

sliderlig3.addEventListener("input", (e) => {
    root.style.setProperty("--try_l_3", e.target.value);
});

numlig3.addEventListener("input", (e) => {
    root.style.setProperty("--try_l_3", e.target.value);
});

// --connect slider and number field
var rangeLig3 = document.querySelector("#lig3");
var fieldLig3 = document.querySelector("#lig3-number");

rangeLig3.addEventListener('input', function (e) { fieldLig3.value = e.target.value; });
fieldLig3.addEventListener('input', function (e) { rangeLig3.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}





// color 4 - R

const sliderhue4 = document.getElementById("hue4");
const numhue4 = document.getElementById("hue4-number");
const roothue4 = document.documentElement;

sliderhue4.addEventListener("input", (e) => {
    root.style.setProperty("--try_h_4", e.target.value);
});

numhue4.addEventListener("input", (e) => {
    root.style.setProperty("--try_h_4", e.target.value);
});

// --connect slider and number field
var rangeHue4 = document.querySelector("#hue4");
var fieldHue4 = document.querySelector("#hue4-number");

rangeHue4.addEventListener('input', function (e) { fieldHue4.value = e.target.value; });
fieldHue4.addEventListener('input', function (e) { rangeHue4.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}


// color 4 - G

const slidersat4 = document.getElementById("sat4");
const numsat4 = document.getElementById("sat4-number");
const rootsat4 = document.documentElement;

slidersat4.addEventListener("input", (e) => {
    root.style.setProperty("--try_s_4", e.target.value);
});

numsat4.addEventListener("input", (e) => {
    root.style.setProperty("--try_s_4", e.target.value);
});

// --connect slider and number field
var rangeSat4 = document.querySelector("#sat4");
var fieldSat4 = document.querySelector("#sat4-number");

rangeSat4.addEventListener('input', function (e) { fieldSat4.value = e.target.value; });
fieldSat4.addEventListener('input', function (e) { rangeSat4.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}


// color 4 - B

const sliderlig4 = document.getElementById("lig4");
const numlig4 = document.getElementById("lig4-number");
const rootlig4 = document.documentElement;

sliderlig4.addEventListener("input", (e) => {
    root.style.setProperty("--try_l_4", e.target.value);
});

numlig4.addEventListener("input", (e) => {
    root.style.setProperty("--try_l_4", e.target.value);
});

// --connect slider and number field
var rangeLig4 = document.querySelector("#lig4");
var fieldLig4 = document.querySelector("#lig4-number");

rangeLig4.addEventListener('input', function (e) { fieldLig4.value = e.target.value; });
fieldLig4.addEventListener('input', function (e) { rangeLig4.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}





// color 5 - R

const sliderhue5 = document.getElementById("hue5");
const numhue5 = document.getElementById("hue5-number");
const roothue5 = document.documentElement;

sliderhue5.addEventListener("input", (e) => {
    root.style.setProperty("--try_h_5", e.target.value);
});

numhue5.addEventListener("input", (e) => {
    root.style.setProperty("--try_h_5", e.target.value);
});

// --connect slider and number field
var rangeHue5 = document.querySelector("#hue5");
var fieldHue5 = document.querySelector("#hue5-number");

rangeHue5.addEventListener('input', function (e) { fieldHue5.value = e.target.value; });
fieldHue5.addEventListener('input', function (e) { rangeHue5.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}


// color 5 - G

const slidersat5 = document.getElementById("sat5");
const numsat5 = document.getElementById("sat5-number");
const rootsat5 = document.documentElement;

slidersat5.addEventListener("input", (e) => {
    root.style.setProperty("--try_s_5", e.target.value);
});

numsat5.addEventListener("input", (e) => {
    root.style.setProperty("--try_s_5", e.target.value);
});

// --connect slider and number field
var rangeSat5 = document.querySelector("#sat5");
var fieldSat5 = document.querySelector("#sat5-number");

rangeSat5.addEventListener('input', function (e) { fieldSat2.value = e.target.value; });
fieldSat5.addEventListener('input', function (e) { rangeSat2.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}


// color 5 - B

const sliderlig5 = document.getElementById("lig5");
const numlig5 = document.getElementById("lig5-number");
const rootlig5 = document.documentElement;

sliderlig5.addEventListener("input", (e) => {
    root.style.setProperty("--try_l_5", e.target.value);
});

numlig5.addEventListener("input", (e) => {
    root.style.setProperty("--try_l_5", e.target.value);
});

// --connect slider and number field
var rangeLig4 = document.querySelector("#lig4");
var fieldLig4 = document.querySelector("#lig4-number");

rangeLig4.addEventListener('input', function (e) { fieldLig4.value = e.target.value; });
fieldLig4.addEventListener('input', function (e) { rangeLig4.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}




// color 6 - R

const sliderhue6 = document.getElementById("hue6");
const numhue6 = document.getElementById("hue6-number");
const roothue6 = document.documentElement;

sliderhue6.addEventListener("input", (e) => {
    root.style.setProperty("--try_h_6", e.target.value);
});

numhue6.addEventListener("input", (e) => {
    root.style.setProperty("--try_h_6", e.target.value);
});

// --connect slider and number field
var rangeHue6 = document.querySelector("#hue6");
var fieldHue6 = document.querySelector("#hue6-number");

rangeHue6.addEventListener('input', function (e) { fieldHue6.value = e.target.value; });
fieldHue6.addEventListener('input', function (e) { rangeHue6.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}


// color 6 - G

const slidersat6 = document.getElementById("sat6");
const numsat6 = document.getElementById("sat6-number");
const rootsat6 = document.documentElement;

slidersat6.addEventListener("input", (e) => {
    root.style.setProperty("--try_s_6", e.target.value);
});

numsat6.addEventListener("input", (e) => {
    root.style.setProperty("--try_s_6", e.target.value);
});

// --connect slider and number field
var rangeSat6 = document.querySelector("#sat6");
var fieldSat6 = document.querySelector("#sat6-number");

rangeSat6.addEventListener('input', function (e) { fieldSat2.value = e.target.value; });
fieldSat6.addEventListener('input', function (e) { rangeSat2.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}


// color 6 - B

const sliderlig6 = document.getElementById("lig6");
const numlig6 = document.getElementById("lig6-number");
const rootlig6 = document.documentElement;

sliderlig6.addEventListener("input", (e) => {
    root.style.setProperty("--try_l_6", e.target.value);
});

numlig6.addEventListener("input", (e) => {
    root.style.setProperty("--try_l_6", e.target.value);
});

// --connect slider and number field
var rangeLig6 = document.querySelector("#lig6");
var fieldLig6 = document.querySelector("#lig6-number");

rangeLig6.addEventListener('input', function (e) { fieldLig6.value = e.target.value; });
fieldLig6.addEventListener('input', function (e) { rangeLig6.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}
