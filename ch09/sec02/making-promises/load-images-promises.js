const loadImagePromise = (url) => {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();

    const loadImageCallBack = () => {
      const successFullRequest = req.status === 200;
      if (successFullRequest) {
        const blob = new Blob([req.response], { type: "image/png" });
        const imgBlob = URL.createObjectURL(blob);
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = imgBlob;
        img.alt = "random image";
        li.appendChild(img);
        resolve(li);
      } else {
        reject(Error(`${req.status} | ${req.statusText}`));
      }
    };

    req.open("GET", undefined);
    req.responseType = "blob";
    req.addEventListener("load", loadImageCallBack);
    req.addEventListener("error", (error) => reject(Error("Network Error")));
    req.send();
  });
};

const setImagesList = (numberOfImages) => {
  const list = document.getElementById("images-list");
  const url = "https://picsum.photos/200/300";
  for (let i = 0; i < numberOfImages; i++) {
    const imagePromise = loadImagePromise(url);
    console.log({ imagePromise });
    imagePromise
      .then((elementList) => {
        list.appendChild(elementList);
        console.log(`inside then`);
        console.log({ imagePromise });
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

const numberOfImages = 4;
setImagesList(numberOfImages);
