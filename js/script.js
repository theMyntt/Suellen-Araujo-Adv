const getMenuIcon = document.getElementById("menu");
const upsetMenu = document.getElementById("menu-options").style;
let i = 0;

getMenuIcon.addEventListener("click", () => {
    if (i % 2 == 0) {
        upsetMenu.display = "flex";
    }else {
        upsetMenu.display = "none";
    }

    i++;
});

function whatsapp() {
    const name = document.getElementById("name").value;
    const option = document.querySelector("input[name='option']:checked").value;

    if (option) {
        window.open(`https://api.whatsapp.com/send?phone=551139926277&text=Olá, eu sou o(a) ${name} e gostaria de fazer/ter ajuda em ${option}`, "_blank")
    }
}