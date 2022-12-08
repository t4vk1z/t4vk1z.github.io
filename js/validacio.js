function validarForm() {
    var nom = document.forms["formulari"]["fname_lname"].value;
    if (nom == "") {
        alert("Completa el teu nom i cognom");
        return false;
    }else {
    	 alert("El teu nom és ... "+nom);
    	 document.getElementById("fname_lname").submit();
    	 return true;
	}
}
function validaDNI(num,lletra) {
	lletra = lletra.toUpperCase();
	num = num%23;
	lletres_dni = "TRWAGMYFPDXBNJZSQVHLCKET";
	lletra_apartir_num = lletres_dni.substring(num, num+1);
	if (lletra != lletra_apartir_num) {
		alert('DNI erroni, la lletra del DNI no es correcta');
		return false;
	} else {
		alert('Dni correcte');
		return true;	
	}
}function validaContra(pass) {
	if (pass.length < 6) {
		alert('Contrasenya massa curta');
		//alert(pass);
		return false;
	} else {
		return true;	
	}
}
function validarForm() {
	var nom = document.forms["formulari"]["fname_lname"].value;
	var pass = document.getElementById("pwd").value;
	//var pass = document.forms["formulari"]["contrasenya"].value;
	var num = document.forms["formulari"]["nif_num"].value;
	var lletra = document.forms["formulari"]["nif_letr"].value;
	alert("Comencem a validar..." +nom+" " +num+" "+lletra)
	if(validaContra(pass) && validaDNI(num,lletra)){
			alert("Tot correcte, envia'm el teu formulari. Gràcies "+nom);
			//document.getElementById("formulari").submit();
			return true;
	} else {
		return false;	
	}
}