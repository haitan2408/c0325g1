document.getElementById("calculate").addEventListener("click", function () {
    let math = +document.getElementById("math").value;
    let phys = +document.getElementById("phys").value;
    let chem = +document.getElementById("chem").value;
    let avg = (math + phys + chem) / 3;
    document.writeln(avg)
    console.log(math)
    prompt("bạn ")
}