var nama = prompt("Masukan Nama");

var gender = prompt("Masukan Gender | pria / wanita");

var tinggi = prompt("Masukan Tinggi Badan");

var a = (tinggi - 100)-((tinggi -100)*0.1);
var b = (tinggi - 100)-((tinggi -100)*0.15);

if (gender == "pria"||
	gender == "Pria"||
	gender == "cowo"||
	gender == "Cowo"||
	gender == "laki"||
	gender == "Laki"||) {
	document.write("Hai " + nama + " Berat ideal mu adalah : " + a);
}

if (gender == "wanita"||
		gender == "Wanita"||
		gender == "perempuan"||
		gender == "Perempuan"||
		gender == "cewek"||
		gender == "Cewek"||){
	document.write("Hai " + nama + " Berat idea lmu adalah : " + b);
}
