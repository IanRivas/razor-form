function buttonEntrarChange(){
    if(buttonRegistrar.classList.contains('selected')){
        buttonEntrar.classList.add('selected');
        buttonRegistrar.classList.remove('selected');
        labelNombre.style.display = "none";
        buttonPrincipal.innerHTML="Entrar";
        buttonPrincipal.style.left= "calc(50% - 3.8rem)";
    }
}
function buttonRegistrarChange(){
    if(buttonEntrar.classList.contains('selected')){
        buttonRegistrar.classList.add('selected');
        buttonEntrar.classList.remove('selected');
        labelNombre.style.display = "block";
        buttonPrincipal.innerHTML="Registrate";
        buttonPrincipal.style.left= "calc(50% - 5rem)";
        
    }
}

const buttonRegistrar= document.getElementById("br")
const buttonEntrar= document.getElementById("be")
const labelNombre= document.getElementById("name-box")
const buttonPrincipal= document.getElementById("RandE")

