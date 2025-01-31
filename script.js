const supabaseUrl = https://svwogdmjmhjbnjthnpfg.supabase.co;  // استبدله بعنوان URL الخاص بك
const supabaseKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN2d29nZG1qbWhqYm5qdGhucGZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgzMzc2NDUsImV4cCI6MjA1MzkxMzY0NX0.QqxyT4bYAuQdaRDEae7tu8fGbRDvC4G7Sgm5S60U11w;  // استبدله بمفتاح anon الخاص بك
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    supabase.auth.signInWithPassword({ email, password })
        .then(({ user, error }) => {
            if (error) {
                document.getElementById('error-message').style.display = 'block';
            } else {
                document.getElementById('login-container').style.display = 'none';
                document.getElementById('app-container').style.display = 'block';
            }
        });
}

function logout() {
    supabase.auth.signOut().then(() => {
        document.getElementById('app-container').style.display = 'none';
        document.getElementById('login-container').style.display = 'block';
    });
}

function register() {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    
    supabase.auth.signUp({ email, password })
        .then(({ user, error }) => {
            if (error) {
                document.getElementById('error-message').style.display = 'block';
            } else {
                alert('تم إنشاء الحساب بنجاح! يمكنك الآن تسجيل الدخول.');
                document.getElementById('register-container').style.display = 'none';
                document.getElementById('login-container').style.display = 'block';
            }
        });
}

document.addEventListener("DOMContentLoaded", () => {
    const user = supabase.auth.user();
    if (user) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('app-container').style.display = 'block';
    }
});
