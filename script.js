document.addEventListener("DOMContentLoaded", () => {

  onClick("loginBtn", () => {
    const email = getValue("email").trim();
    const password = getValue("password").trim();

    if (!email || !password) {
      setInner("message", "❌ Semua field wajib diisi");
      return;
    }

    if (email === "admin@gmail.com" && password === "12345") {
      setInner("message", "✅ Login berhasil");
      localStorage.setItem("user", email);
    } else {
      setInner("message", "❌ Email atau password salah");
    }
  });

});
