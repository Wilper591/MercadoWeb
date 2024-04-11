$(document).ready(function () {
  // Función para manejar el clic en los botones de las verduras
  $(".card-producto").click(function (event) {
    // Verifica si el botón ya ha sido clicado
    if (!$(this).prop("disabled")) {
      // Obtiene la URL de la imagen dentro del botón clicado
      let imgSrc = $(this).find("img").attr("src");

      // Crea un nuevo elemento de imagen y lo agrega al contenedor en el modal
      let imgElement = $("<img>").attr("src", imgSrc).addClass("p-3 w-25");
      $("#productosContainer").append(imgElement);

      // Desactiva el botón para evitar que se haga clic nuevamente
      $(this).prop("disabled", true);
    }
  });
});
