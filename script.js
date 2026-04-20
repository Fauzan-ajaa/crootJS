onClick("loginBtn", () => {
  const email = getValue("email").trim();
  const password = getValue("password").trim();

  // validasi kosong
  if (!email || !password) {
    setInner("message", "❌ Semua field wajib diisi");
    return;
  }

  // login simulasi
  if (email === "admin@gmail.com" && password === "12345") {
    setInner("message", "✅ Login berhasil");

    // simpan login
    localStorage.setItem("user", email);

    // redirect (opsional)
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);

  } else {
    setInner("message", "❌ Email atau password salah");
  }
});
