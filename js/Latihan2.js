var barang = ["Sabun", "Shampo", "Sabun Muka", "Laptop", "Handphone", "Komputer", "Mouse"];
barang_input=prompt("masukan nama barang");
barang.push(barang_input);
cari = prompt("cari barang");
var i;
for (i = 0;i < barang.length; i++){
	if(cari == barang[i]){
		alert("Barang " + cari + " ditemukan");
		console.log("Barang " + cari + " ditemukan");
		break;
	}
	if (i == barang.length - 1){
		barang.push(cari);
		alert("Barang " + cari + " tidak ditemukan");
		console.log("Barang " + cari + " tidak ditemukan");
		console.log("Barang " + cari + " berhasil ditambah");
		alert("Barang " + cari + " berhasil ditambah");
		break;
	}
}
document.write(barang.sort());
