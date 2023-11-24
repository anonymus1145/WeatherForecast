function weather() {
  return {
    temp_c: 0,
    temp_f: 0,
    region: "",
    country: "",
    date: "",
  };
}

async function getWeather(city: string) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=613ea2e1e83f470587d155741232311&q=${city}&aqi=yes`
  );
  const data = await response.json();

  let weatherObj = weather();
  weatherObj.temp_c = data.current.temp_c;
  weatherObj.temp_f = data.current.temp_f;
  weatherObj.region = data.location.region;
  weatherObj.country = data.location.country;
  weatherObj.date = data.location.localtime;

  return weatherObj;
}

export default async function createForm() {
  let input = document.getElementById("search") as HTMLInputElement;
  let weatherObj;
  if (input.value !== "") {
    weatherObj = await getWeather(input.value);
  }

  let spinner = document.createElement("span");
  spinner.classList.add("loading", "loading-spinner", "loading-lg");
  document.getElementById("form")?.appendChild(spinner);

  setTimeout(() => {
    document.getElementById("form")?.removeChild(spinner);
    
    let dialog = document.createElement("dialog");
    dialog.classList.add("modal");
    dialog.setAttribute("id", "my_modal_2");
    dialog.setAttribute("open", "true");
    document.body.appendChild(dialog);

    let div = document.createElement("div");
    div.classList.add("modal-box");
    dialog.appendChild(div);

    let h3 = document.createElement("h3");
    h3.classList.add("text-lg", "font-bold");
    h3.textContent = "Weather in " + weatherObj?.region;
    div.appendChild(h3);

    let p = document.createElement("p");
    p.classList.add("py-4");
    p.textContent = "Today: " + weatherObj?.date;
    div.appendChild(p);

    let p1 = document.createElement("p");
    p1.classList.add("py-4");
    p1.textContent = "Temperature: " + weatherObj?.temp_c + "°C" + " / " + weatherObj?.temp_f + "°F";
    div.appendChild(p1);

    let p2 = document.createElement("p");
    p2.classList.add("py-4");
    p2.textContent = "Country: " + weatherObj?.country;
    div.appendChild(p2);

    let form = document.createElement("form");
    form.classList.add("modal-backdrop");
    form.setAttribute('method', 'dialog');
    dialog.appendChild(form);

    let button = document.createElement("button");
    button.classList.add("btn", "btn-primary", "hover:bg-slate-300", "focus:bg-slate-300");
    button.textContent = "Close";
    button.addEventListener("click", () => {
      dialog.remove();
      input.value = "";
    })
    div.appendChild(button);

  }, 3000);
}
