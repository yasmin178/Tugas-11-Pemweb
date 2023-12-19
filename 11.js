function hitung() {
    const jari_jari = parseInt(document.getElementById('jari_jari').value);
    const operator = document.getElementById('operator').value;
    let hasil = 0;

    if (operator == 'luas') {
        hasil = 3.14 * (jari_jari**2);
    } else  {
        hasil = 2 * 3.14 * jari_jari;
    }
    document.getElementById('output').innerHTML = hasil;
}