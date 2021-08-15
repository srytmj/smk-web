<?php
include 'fungsi_maja.php';
$ps = luaspersegi($_POST['p']);
$pp = luaspersegipanjang($_POST['p'], $_POST['l']);
$s = luassegitiga($_POST['l'], $_POST['t']);
$li = luaslingkaran($_POST['l']);
if (isset($_POST['submit']))
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="fungsi_maja.php" method="post">
        <table>
            <tr>
                <td>Panjang</td>
                <td>:</td>
                <td><input type="number" name="p" required ></td>
            </tr>
            <tr>
                <td>Lebar / Alas / Diameter</td>
                <td>:</td>
                <td><input type="number" name="l" required ></td>
            </tr>
            <tr>
                <td>Tinggi</td>
                <td>:</td>
                <td><input type="number" name="t" required ></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td><input type="number" name="submit" value="Hitung"></td>
            </tr>
        </table>
    </form>
    <p>
        Luas Persegi = <?php echo $ps;?> <br>
        Luas Persegi Panjang = <?php echo $pp;?><br>
        Luas Segitiga = <?php echo $s;?><br>
        Luas Lebar = <?php echo $li;?>
    </p>
</body>
</html>