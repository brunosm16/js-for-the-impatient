const makeDelay = (fn, delay) => {
  return new Promise((resolve, _) => {
    const callback = () => {
      resolve(fn);
    };
    setTimeout(callback, delay);
  });
};

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

const url = "https://picsum.photos/200/300";
const imagesList = document.getElementById("images-list");

makeDelay(loadImage, 3000)
  .then((fn) => fn(url))
  .then((img) => imagesList.appendChild(img))
  .catch((error) => console.error(error));
