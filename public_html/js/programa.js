
arrayIron=["4 set shoulder press,4 set chest press,4 sets lateral raises,4 sets triceps",
          "4 sets alt biceps curls, 4 sets upright row, 4 sets deadlifts, 4 sets shrugs, 4 sets bent over rows, 4 sets bent over flys",
          "",
          "4 sets goblet squats,4 sets forward lunges,4 sets silide lunges,4 sets calf raises",
          "4 sets sit-ups,4 sets sitting twists,4 sets leg raises,4 set flutter kicks"];
      
arrayMilitaryFit = ["20 push-ups,20 shoulder taps,20 count plank holdm 20 jumping lunges,20 knee-ins + twist, 20 raised leg circles,20 up and down planks",
                    "squat hold, plank hold, push-up hold, single leg squat hold, one arm plank hold, one arm side plank hold",
                    "",
                    "20 push-ups,5 close grup push-ups,5 wide grip push-ups,20 back extensions,20 count hold,20 upward dog stretches,20 raised leg push-ups,5 power push-ups,5 clapping push-ups",
                    "30 seconds high knees,30 seconds push up,30 seconds jumping lunges,30 seconds climbers,30 seconds high knees,30 seconds shoulder taps,30 seconds jump squats,30 seconds plank walk-outs"];

arrayBoxerPrime = ["1 munute jump rope,1 minute push ups + jab + cross,1 minute jab + cross,1 minute push-ups, 1minute speed bag punches",
                   "5 minutes shadowboxing,40 squats,20 seconds squat hold,40 basic burpees",
                   " 20 sit-ups,20 knee-ins + twist, 10 butt-ups,20 sit-ups,20 flutter kicks,10 scissors,20 sit-ups,20 sitting twists,10 leg raises",
                   "",
                   "Drill 1: 4 push-ups + jab + cross + jab + cross,Drill 2: 4 push-ups + jab + hook,Drill 3: 10 push-ups + 40 jabs,Drill 4: 10 push-ups + 40 hooks,Drill 5: 10 push-ups + 10 squats + hook,Drill 6: 30 push-ups + 1 min jab-cross"];
                
function seleccionarPrograma(){
    let programas = document.getElementById('programas');
    let programa = programas.value;
    document.getElementById('tituloPrograma').innerText=programa;
    
    elegirPrograma(programa);
    
}               

function elegirPrograma(dato){
    
    let arrayElegido=null;
    
    if(dato=="Iron Man"){
        arrayElegido=arrayIron;
    }else if(dato=="Military Fit"){
        arrayElegido=arrayMilitaryFit;
    }else if(dato=="Boxer Prime"){
        arrayElegido=arrayBoxerPrime;
    }
    console.log(arrayElegido);
    
    //------ Lunes -------
    
    arrayLunes=arrayElegido[0];
    lunesListado=arrayLunes.split(",");
    console.log(lunesListado);
    
    var resultado = document.getElementById("mon");
    resultado.innerHTML = "";
    
    for(let i=0;i<lunesListado.length;i++){
        let elemento = document.createElement("li");
        let contenido=document.createTextNode(lunesListado[i]);
        elemento.appendChild(contenido);
        console.log(elemento);
        document.getElementById('mon').appendChild(elemento);
    }
    
    //------ Martes -------
    
    arrayMartes=arrayElegido[1];
    martesListado=arrayMartes.split(",");
    
    var resultado = document.getElementById("tus");
    resultado.innerHTML = "";
    
    for(let i=0;i<martesListado.length;i++){
        let elemento = document.createElement("li");
        let contenido=document.createTextNode(martesListado[i]);
        elemento.appendChild(contenido);
        console.log(elemento);
        document.getElementById('tus').appendChild(elemento);
    }
    
    //------ Miercoles -------
    
    arrayMiercoles=arrayElegido[2];
    miercolesListado=arrayMiercoles.split(",");
    
    var resultado = document.getElementById("wend");
    resultado.innerHTML = "";
    
    for(let i=0;i<miercolesListado.length;i++){
        let elemento = document.createElement("li");
        let contenido=document.createTextNode(miercolesListado[i]);
        elemento.appendChild(contenido);
        console.log(elemento);
        document.getElementById('wend').appendChild(elemento);
    }
    
    //------ Jueves -------
    
    arrayJueves=arrayElegido[3];
    juevesListado=arrayJueves.split(",");
    
    var resultado = document.getElementById("thus");
    resultado.innerHTML = "";
    
    for(let i=0;i<juevesListado.length;i++){
        let elemento = document.createElement("li");
        let contenido=document.createTextNode(juevesListado[i]);
        elemento.appendChild(contenido);
        console.log(elemento);
        document.getElementById('thus').appendChild(elemento);
    }
    
    //------ Viernes -------
    
    arrayViernes=arrayElegido[4];
    viernesListado=arrayViernes.split(",");
    
    var resultado = document.getElementById("fry");
    resultado.innerHTML = "";
    
    for(let i=0;i<viernesListado.length;i++){
        let elemento = document.createElement("li");
        let contenido=document.createTextNode(viernesListado[i]);
        elemento.appendChild(contenido);
        console.log(elemento);
        document.getElementById('fry').appendChild(elemento);
    }
    
}


