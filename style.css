document.addEventListener("DOMContentLoaded", loadSavedData);

function calculateGPA() {
    let subjects = [
        { id: "physics", weight: 4 },
        { id: "chemistry", weight: 4 },
        { id: "cs", weight: 1 },
        { id: "algebra", weight: 2 },
        { id: "analysis", weight: 3 },
        { id: "probability", weight: 2 },
        { id: "english", weight: 1 },
        { id: "ethics", weight: 1 }
    ];

    let total = 0;
    let weightSum = 0;

    subjects.forEach(subject => {
        let value = parseFloat(document.getElementById(subject.id).value) || 0;
        let subjectResult = (value * subject.weight).toFixed(2);
        document.getElementById(subject.id + "-result").innerText = `(${subjectResult})`;
        total += value * subject.weight;
        weightSum += subject.weight;
        localStorage.setItem(subject.id, value); // حفظ البيانات
    });

    let gpa = total / weightSum;
    document.getElementById("result").innerText = `المعدل: ${gpa.toFixed(2)}`;
}

function resetFields() {
    let subjects = ["physics", "chemistry", "cs", "algebra", "analysis", "probability", "english", "ethics"];
    
    subjects.forEach(id => {
        document.getElementById(id).value = "";
        document.getElementById(id + "-result").innerText = "";
        localStorage.removeItem(id);
    });

    document.getElementById("result").innerText = "المعدل: --";
}

function loadSavedData() {
    let subjects = ["physics", "chemistry", "cs", "algebra", "analysis", "probability", "english", "ethics"];

    subjects.forEach(id => {
        let savedValue = localStorage.getItem(id);
        if (savedValue) {
            document.getElementById(id).value = savedValue;
        }
    });
}
