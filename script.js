function calculateGPA() {
    let physics = parseFloat(document.getElementById("physics").value) || 0;
    let chemistry = parseFloat(document.getElementById("chemistry").value) || 0;
    let cs = parseFloat(document.getElementById("cs").value) || 0;
    let algebra = parseFloat(document.getElementById("algebra").value) || 0;
    let analysis = parseFloat(document.getElementById("analysis").value) || 0;
    let probability = parseFloat(document.getElementById("probability").value) || 0;
    let english = parseFloat(document.getElementById("english").value) || 0;
    let ethics = parseFloat(document.getElementById("ethics").value) || 0;

    let total = (physics * 4) + (chemistry * 4) + (cs * 1) + (algebra * 2) + 
                (analysis * 3) + (probability * 2) + (english * 1) + (ethics * 1);

    let gpa = total / 18;
    document.getElementById("result").innerText = `المعدل: ${gpa.toFixed(2)}`;
}
