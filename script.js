window.addEventListener("DOMContentLoaded", function () {
  let colorCode1 = document.querySelector("#color-code-1"),
    color1 = document.querySelector("#color1"),
    colorCode2 = document.querySelector("#color-code-2"),
    color2 = document.querySelector("#color2"),
    rotation = document.querySelector("#rotation"),
    rotationVal = rotation.value,
    type = document.querySelector("#type"),
    typeVal = type.value,
    position1 = document.querySelector("#position_1"),
    position2 = document.querySelector("#position_2"),
    generateGradientBtn = document.querySelector("#generate-gradient-btn"),
    cssCode = document.querySelector("#css-code"),
    copyCSSBtn = document.querySelector("#copy-css"),
    output = document.querySelector("#output"),
    fullScreen = document.querySelector("#full-screen");

  const getColorCode = () => {
    colorCode1.textContent = color1.value;
    colorCode2.textContent = color2.value;
  };

  const getRotationValue = () => {
    rotationVal = rotation.value;
  };

  const getTypeValue = () => {
    typeVal = type.value;
    console.log(typeVal);
  };

  let gradientCSS;

  const generateGradient = () => {
    const c1 = color1.value;
    const c2 = color2.value;
    const pos1 = position1.value;
    const pos2 = position2.value;

    colorCode1.textContent = c1;
    colorCode2.textContent = c2;

    gradientCSS = "";

    if (typeVal === "linear") {
      gradientCSS = `linear-gradient(${rotationVal}deg, ${c1} ${pos1}%, ${c2} ${pos2}%)`;
    } else if (typeVal === "radial") {
      gradientCSS = `radial-gradient(circle at center, ${c1} ${pos1}%, ${c2} ${pos2}%)`;
    } else if (typeVal === "conic") {
      gradientCSS = `conic-gradient(from ${rotationVal}deg at center, ${c1} ${pos1}%, ${c2} ${pos2}%)`;
    }
    output.style.backgroundImage = gradientCSS;
    cssCode.value = gradientCSS;
  };

  const customizeGradient = () => {
    gradientCSS = cssCode.value;
    output.style.backgroundImage = gradientCSS;
  };

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
  }

  const copyCSSToClopboard = () => {
    copyToClipboard(gradientCSS);
    copyCSSBtn.textContent = "Copied";
    const timeoutId = setTimeout(() => {
      copyCSSBtn.textContent = "Copy CSS";
    }, 1000);
  };

  function requestFullScreenView(elem) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  }

  const fullScreenView = () => {
    requestFullScreenView(output);
  };

  generateGradient();
  color1.addEventListener("change", getColorCode);
  color2.addEventListener("change", getColorCode);
  rotation.addEventListener("change", getRotationValue);
  type.addEventListener("change", getTypeValue);
  generateGradientBtn.addEventListener("click", generateGradient);
  cssCode.addEventListener("change", customizeGradient);
  copyCSSBtn.addEventListener("click", copyCSSToClopboard);
  fullScreen.addEventListener("click", fullScreenView);
  position1.addEventListener("change", generateGradient);
  position2.addEventListener("change", generateGradient);
});
