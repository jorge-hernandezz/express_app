<?php
printf("Abriendo Archivos");
$archivo_url  = fopen("archivo.txt", "r");

$texto = "";

while ($fragmento = fgets($archivo_url)){
    $texto .= $fragmento
}

print($texto);
print("<br>Haciendo otra cosa");
?>