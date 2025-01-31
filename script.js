const supabaseUrl = 'https://svwogdmjmhjbnjthnpfg.supabase.co';  // استبدله بعنوان URL الخاص بك
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN2d29nZG1qbWhqYm5qdGhucGZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgzMzc2NDUsImV4cCI6MjA1MzkxMzY0NX0.QqxyT4bYAuQdaRDEae7tu8fGbRDvC4G7Sgm5S60U11w';  // استبدله بمفتاح anon الخاص بك
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

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
