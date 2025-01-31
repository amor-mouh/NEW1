
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://svwogdmjmhjbnjthnpfg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN2d29nZG1qbWhqYm5qdGhucGZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgzMzc2NDUsImV4cCI6MjA1MzkxMzY0NX0.QqxyT4bYAuQdaRDEae7tu8fGbRDvC4G7Sgm5S60U11w'
const supabase = createClient(supabaseUrl, supabaseKey)

// دالة تسجيل الدخول
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log("تسجيل الدخول:", email, password);  // تتبع البيانات المدخلة

    supabase.auth.signInWithPassword({ email, password })
        .then(({ user, error }) => {
            if (error) {
                console.error("خطأ في تسجيل الدخول:", error);  // تتبع الأخطاء
                document.getElementById('error-message').style.display = 'block';
            } else {
                console.log("تم تسجيل الدخول بنجاح:", user);  // تتبع نجاح التسجيل
                document.getElementById('login-container').style.display = 'none';
                document.getElementById('app-container').style.display = 'block';
            }
        });
}

// دالة إنشاء الحساب
function register() {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    console.log("إنشاء الحساب:", email, password);  // تتبع البيانات المدخلة

    supabase.auth.signUp({ email, password })
        .then(({ user, error }) => {
            if (error) {
                console.error("خطأ في إنشاء الحساب:", error);  // تتبع الأخطاء
                document.getElementById('error-message').style.display = 'block';
            } else {
                console.log("تم إنشاء الحساب بنجاح:", user);  // تتبع نجاح إنشاء الحساب
                alert('تم إنشاء الحساب بنجاح! يمكنك الآن تسجيل الدخول.');
                document.getElementById('register-container').style.display = 'none';
                document.getElementById('login-container').style.display = 'block';
            }
        });
}

// دالة تسجيل الخروج
function logout() {
    supabase.auth.signOut().then(() => {
        document.getElementById('app-container').style.display = 'none';
        document.getElementById('login-container').style.display = 'block';
    });
}

// التحقق من حالة المستخدم عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
    const user = supabase.auth.user();
    if (user) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('app-container').style.display = 'block';
    }
});
