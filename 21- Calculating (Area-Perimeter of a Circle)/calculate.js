const radius = document.querySelector("#radius");
const area = document.querySelector("#area");
const perimeter = document.querySelector("#perimeter");
const reset = document.querySelector("#reset");
const loading2 = document.querySelector("#loading2");

const loading = document.querySelector("#loading");

calculate.onclick = () => {
  area.innerHTML = Math.abs((Math.PI * Math.pow(radius.value, 2)).toFixed(2));
  perimeter.innerHTML = Math.abs((2 * Math.PI.toFixed(2) * radius.value).toFixed(2));
  loading.remove();
  radius.value = "";
};

reset.onclick = () => {
  area.innerHTML = "";
  perimeter.innerHTML = "";
  loading2.appendChild(loading);
  radius.value = "";
};
