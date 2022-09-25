//creacion de una aplicacion para determinar el promedio de 2 notas de mi cursodeingles con las dos notas mayores
//ingreso de los datos
let n1=parseInt(prompt("Ingrese su nota 1 del curso"));
let n2=parseInt(prompt("Ingrese su nota 2 del curso"));
let n3=parseInt(prompt("Ingrese su nota 3 del curso"));
//proceso 
//creare una funcion para hallar el promedio de mis notas y llamarlas en mi funciongeneral
function Promedio(x,y)
{
 return promedio=((x+y)/2)
}
//creare una funcion para mostrar un mensaje a los estudiantes que solo saquen 20 , 11 y 0-esto lo puedo mejorar con un if
function Mensaje(notafinal){
switch (notafinal)
{
     case 20 :
     Mensaje="Excelente Perfomance en el curso";
     break;
     case 11 :
     Mensaje="Puede realizar un examen sustitutorio";
     break;
     case 00 :
        Mensaje="Debe repetir el curso si o si ";
        break;
     default:
     Mensaje=" ";
}

return (Mensaje);
}

function notasCurso(nota1,nota2,nota3)
{
    for(let i=1;i<=3;i++)
    {
        if(nota1<=nota2 && nota1<=nota3)
        {
        
            return(Promedio(nota2,nota3)) ; 
        }
        else if (nota2<=nota1 && nota2<=nota3)
        {
        
            return(Promedio(nota1,nota3)); 
        }
        else 
        {
        
            return(Promedio(nota1,nota2)); 
        }
        
    }  
}
//mostrando los resultados en la pagina web 

document.write("Su promedio del curso es de :"+notasCurso(n1,n2,n3)+" "+Mensaje(notasCurso(n1,n2,n3)))
alert("Su promedio del curso es de :"+notasCurso(n1,n2,n3));


