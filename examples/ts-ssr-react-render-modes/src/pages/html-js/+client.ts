// TODO: rename to +client.js
//
const handleCounter = () => {
  const counterEl = document.querySelector("button");
  if (!counterEl) throw new Error("counterEl not found");
  let countState = 0;
  const txt = (value: number) => `Counter ${value} (Vanilla JS)`;
  counterEl.textContent = txt(countState);
  counterEl.onclick = () => {
    countState++;
    counterEl.textContent = txt(countState);
  };
};

handleCounter();
