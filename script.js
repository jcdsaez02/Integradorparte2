//comentario de linea
/** comentario de bloque
 sdsdsd
*/

let students=parseFloat(0.2*200);
let trainees=parseInt(0.5*200);
let juniors=parseFloat(0.85*200);
//console.log(juniors);
var total, categoria, cant, dto;

function selectt() {
    var d=document.getElementById("person"); //bien
    var displaytext=d.options[d.selectedIndex].text; //bien
    categoria=displaytext; //bien
    //console.log(categoria);
    switch (categoria) {
        case "Estudiante":
            console.log("estudiante es correcto")
            dto=parseInt(students) ;
            break;
        case "Trainee":
            //console.log("trainee es correcto")
            dto=parseInt(trainees) ;
            break;
        case "Junior":
            //console.log("junior es correcto")
            //console.log(dto);
            dto=parseInt(juniors) ;
            break;
    }
}
function cantidad(){
    cant = document.getElementById("cantidad-personas").value;
    console.log(cant);
}
function calcular(){
    cantidad();
    total=(cant*=dto);
    console.log(total);
    document.getElementById("total-pagar").innerHTML = "Total a pagar: $" + total;
}



