let btn = document.createElement("button");
btn.innerHTML = "Zmień tło";
btn.id = "toggle-button";
btn.class = "second-button";
document.getElementById('btn_place').append(btn);


const toggleButton = document.getElementById("toggle-button");
const theme = document.getElementById("theme");
const border = document.getElementById("form2");
if (!localStorage.getItem("second-mode"))
    localStorage.setItem("second-mode", "disabled");
let secondMode = localStorage.getItem("second-mode");



const activateSecond = () => {
    toggleButton.classList.remove("second-button");
    theme.classList.add("second-theme");
    localStorage.setItem("second-mode", "enabled");
    border.classList.add("second-border");
};
const disactivateSecond = () => {
    toggleButton.classList.add("second-button");
    theme.classList.remove("second-theme");
    localStorage.setItem("second-mode", "disabled");
    border.classList.remove("second-border");
};
if (secondMode == "enabled") {
    activateSecond();
}
if (secondMode == "disabled") {
    disactivateSecond();
}


toggleButton.addEventListener("click", () => {
    secondMode = localStorage.getItem("second-mode");
    if (secondMode == "enabled") {
        disactivateSecond();
    }
    if (secondMode == "disabled") {
        activateSecond();
    }
});
///////////////////////////////////////////////////////////////

let firstname = document.getElementById('firstname');
if (sessionStorage.getItem("firstname_s")) {
    firstname.value=sessionStorage.getItem("firstname_s");
}
firstname.addEventListener("input", () =>{
    sessionStorage.setItem("firstname_s", firstname.value)
});

let lastname = document.getElementById('lastname');
if (sessionStorage.getItem("lastname_s")) {
    lastname.value=sessionStorage.getItem("lastname_s");
}
lastname.addEventListener("input", () =>{
    sessionStorage.setItem("lastname_s", lastname.value)
});

let textarea1 = document.getElementById('textarea1');
if (sessionStorage.getItem("textarea1_s")) {
    textarea1.value=sessionStorage.getItem("textarea1_s");
}
textarea1.addEventListener("input", () => {
sessionStorage.setItem("textarea1_s", textarea1.value)
} );

let textarea2 = document.getElementById('textarea2');
if (sessionStorage.getItem("textarea2_s")) {
    textarea2.value=sessionStorage.getItem("textarea2_s");
}
textarea2.addEventListener("input", () => {
sessionStorage.setItem("textarea2_s", textarea2.value)
} );

var gender = document.getElementsByName("gender");
var value = sessionStorage.getItem('gender');
function func() {
    sessionStorage.setItem("gender", this.value);
}
for (var element of gender) {
    if(element.value==value) {
        element.checked=true;
    }
}
for (var element of gender) {
    element.addEventListener("input", func);
    }

    var fav_site = document.getElementsByName("fav_site");
    var value2 = sessionStorage.getItem('fav_site');
    function func2() {
        sessionStorage.setItem("fav_site", this.value);
    }
    for (var element of fav_site) {
        if(element.value==value2) {
            element.checked=true;
        }
    }
    for (var element of fav_site) {
        element.addEventListener("input", func2);
        }

        let hours = document.getElementById('hours');
        if (sessionStorage.getItem("hours_s")) {
            hours.value=sessionStorage.getItem("hours_s");
        }
        hours.addEventListener("input", () =>{
            sessionStorage.setItem("hours_s", hours.value)
        });

        let person = document.getElementById('person');
        if (sessionStorage.getItem("person_s")) {
            person.value=sessionStorage.getItem("person_s");
        }
        person.addEventListener("input", () =>{
            sessionStorage.setItem("person_s", person.value)
        });

//////////////////////////////////////////////////////////////////       

        const sessionClear = document.getElementById("reset");
        sessionClear.addEventListener("click", () => {
        sessionStorage.clear() });

/////////////////////////////////////////////////////////////////
        
reset.onclick = addElement;
function addElement() {
    const not = document.createElement('p');
    not.textContent="Wyczyściłeś formularz!";
    document.getElementById('div10').append(not);
    not.style.cssText='padding-left: 45%;,font-weight:700;,font-size:18px;';
    not.id="not";
    removeElement()
  }
  function removeElement() {
    setTimeout(() => {
   const element = document.getElementById('not');
    element.remove();
    }, 5000);
  }

///////////////////////////////////////////////////////////////////

