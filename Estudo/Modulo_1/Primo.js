var n = parseInt(console.log("Digite um valor para n:"));
      var contador=0;
      var x;
 for (x=1;x<=n;x++) {   
  if (n%x==0) {
       contador++;
  }
 }
 if (contador==2)
  console.log ("Número primo");   
 else 
  console.log ("Não é primo");