const loadImage = (url) => {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();

    const loadImageCallBack = () => {
      const successFullRequest = req.status === 200;
      if (successFullRequest) {
        const blob = new Blob([req.response], { type: "image/png" });
        const imgBlob = URL.createObjectURL(blob);
        const img = document.createElement("img");
        img.src = imgBlob;
        img.alt = "random image";
        resolve(img);
      } else {
        reject(Error(`${req.status} | ${req.statusText}`));
      }
    };

    req.open("GET", url);
    req.responseType = "blob";
    req.addEventListener("load", loadImageCallBack);
    req.addEventListener("error", (error) => reject(Error("Network Error")));
    req.send();
  });
};

const imagesList = document.getElementById("images-list");
const url = "https://picsum.photos/200/300";

// Chaining Promise as pipeline
const promisePipeline = loadImage(url)
  .then((img) => {
    imagesList.appendChild(img);
  })
  .then(() => loadImage(url))
  .then((img) => imagesList.appendChild(img));

const promiseSymmetric = () => {
  Promise.resolve()
    .then(() => loadImage(url))
    .then((img) => imagesList.appendChild(img))
    .then(() => loadImage(url))
    .then((img) => imagesList.appendChild(img));
};

promiseSymmetric();
