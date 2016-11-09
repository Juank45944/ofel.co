$(function(){
  $('#enviar').click(function(){
    sendMsg($('#nombre').val(), $('#email').val(), $('#textarea').val());

  })
})



function sendMsg(nombre, mail, msg){
  $.ajax({
    url: 'server/send_mail.php',
    dataType: "text",
    cache: false,
    data: {nombre: nombre, mail: mail, msg: msg},
    type: 'POST',
    success: function(php_response){
      if (php_response=='OK') {
        var resultado = confirm('Tu mensaje se envió correctamente');
        if (resultado==true) {
          window.location.href = 'index.html';
        }
      }else {
        alert(php_response);
      }
    },
    error: function(){
      alert("error en la comunicación con el servidor");
    }
  });
}
