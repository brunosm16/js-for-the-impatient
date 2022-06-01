const createListElement = (src, alt) => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;

  const li = document.createElement("li");
  li.appendChild(img);

  return li;
};

const loadImage = (url, element) => {
  const req = new XMLHttpRequest();

  req.open("GET", url);
  req.responseType = "blob";

  req.addEventListener("load", () => {
    const successFullRequest = req.status === 200;

    let li = "";

    if (successFullRequest) {
      const blob = new Blob([req.response], { type: "image/png" });
      const url = URL.createObjectURL(blob);
      li = createListElement(url, req.responseURL);
    } else {
      li = createListElement("", `${req.status} | ${req.statusText}`);
    }

    element.appendChild(li);
  });
  req.addEventListener("error", (event) => console.error(event));
  req.send();
};

const setImagesList = (numberOfImages, element) => {
  const url = "https://picsum.photos/200/300";
  for (let i = 0; i < numberOfImages; i++) {
    loadImage(url, element);
  }
};

const numberOfImages = 4;
const elementList = document.getElementById("images-list");
setImagesList(numberOfImages, elementList);
