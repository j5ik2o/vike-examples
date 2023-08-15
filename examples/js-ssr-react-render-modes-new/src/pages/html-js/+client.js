// TODO: rename to +client.js
//
const handleCounter = () => {
  const counterEl = document.querySelector("button");
  let countState = 0;
  const txt = () => `Counter ${countState} (Vanilla JS)`;
  counterEl.textContent = txt(countState);
  counterEl.onclick = () => {
    countState++;
    counterEl.textContent = txt(countState);
  };
};

handleCounter();
