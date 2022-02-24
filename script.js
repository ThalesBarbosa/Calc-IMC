function calcular(altura, peso) {
    imc = peso / (altura * altura);
    return imc;
  }
  
  function exibir(imc) {
    if ((imc < 18, 5)) {
      print("Magreza");
    } else if ((imc >= 18, 5 && imc < 24, 9)) {
      print("Normal");
    } else if ((imc >= 24, 9 && imc < 30)) {
      print("Sobrepeso");
    } else if (imc >= 30) {
      print("Obesidade");
    }
  }

  function calcularTeste(){
    var peso = document.getElementById("Peso").innerHTML;
    var altura = document.getElementById("altura").textContent;

    alert("peso e altura: " + peso +", " + altura);
}