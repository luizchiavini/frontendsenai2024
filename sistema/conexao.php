<?php
$host = 'localhost';
$user = 'root';
$senha = '';
$bd = 'sistema';
$conexao = new mysqli($host, 
$user, 
$senha, 
$bd);
// verificação da conexo
if ($conexao -> connect_error){
    echo "deu ruim";
}else{
    echo "deu bom";
}
?>