var btnno = document.getElementById("btnno");
var btnyes = document.getElementById("btnyes");

btnno.addEventListener("mouseenter", () => {
    var pos = coordenadas();
    btnno.style.top = `${pos.posy}px`;
    btnno.style.left = `${pos.posx}px`;
});

var coordenadas = () => {
    var ancho = innerWidth - 150;
    var alto = innerHeight - 50;
  var posx = Math.floor(Math.random() * ancho);
  var posy = Math.floor(Math.random() * alto);
    return { posx, posy };
};

btnyes.addEventListener("click", () => {
    alert("Yo tambien me siento feliz, Nunca pense en que llegariamos a cumplir un mes pero ahora que lo cumplimos estoy seguro que seremos capaces de cumplir muchos mas, Eres el foco de luz que ilumino mi corazon cuando pense que solo habria oscuridad, la persona que me hace querer mejorar dia a dia para ser esa persona que este para ti cuando me necesites. TE AMO MUCHO de parte de tu Gatito para mi Gatita ❤.");location.href="file:///C:/Users/Brandow%20A.%20Hidalgo/OneDrive/Documentos/Primer_Mes/pagina-fotos/pagina.html"
});
