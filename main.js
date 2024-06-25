// QR Code
const inputValue = document.getElementById("input-value");
const size = document.getElementById("size");
const qrCodeOutput = document.getElementById("qrCodeScreen");

const qrCodeGeneratorBtn = document.querySelector(".btn-generator");
const saveQRCodeBtn = document.querySelector(".btn-save");
const clearQRCodeBtn = document.querySelector(".btn-clear");

const generateQRCode = function (e) {
  e.preventDefault();

  const urlOrTxt = document.getElementById("input-value").value;
  const size = document.getElementById("size").value;

  if (urlOrTxt === "") {
    alert("Please enter url or text.");
  } else {
    displayQRCode(urlOrTxt, size);
    qrCodeOutput.style.display = "flex";
    qrCodeOutput.style.justifyContent = "center";
    qrCodeOutput.style.alignItems = "center";
  }
};

const displayQRCode = function (url, size) {
  qrCodeOutput.innerHTML = "";
  new QRCode("qrCodeScreen", {
    text: url,
    width: size,
    height: size,
  });
};

qrCodeGeneratorBtn.addEventListener("click", generateQRCode);

saveQRCodeBtn.addEventListener("click", () => {
  let qrCodeImg = document.querySelector("#qrCodeScreen img");

  if (qrCodeImg != null) {
    let imgAttribute = qrCodeImg.getAttribute("src");
    saveQRCodeBtn.setAttribute("href", imgAttribute);
  } else {
    saveQRCodeBtn.setAttribute(
      "href",
      `${document.querySelector("canvas").toDataURL()},`
    );
  }
});

clearQRCodeBtn.addEventListener("click", () => {
  qrCodeOutput.innerHTML = "";
  qrCodeOutput.style.display = "none";
  inputValue.value = "";
});

// Cursor
var cursorDot = document.querySelector(".cursor-dot");
var cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", function (e) {
  var positionX = e.clientX;
  var positionY = e.clientY;

  cursorDot.style.left = `${positionX}px`;
  cursorDot.style.top = `${positionY}px`;

  // cursorOutline.style.left = `${positionX}px`;
  // cursorOutline.style.top = `${positionY}px`;

  cursorOutline.animate(
    {
      left: `${positionX}px`,
      top: `${positionY}px`,
    },
    { duration: 500, fill: "forwards" }
  );
});
