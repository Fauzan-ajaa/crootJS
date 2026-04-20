onClick("loginBtn", () => {
  const email = getValue("email");
  const password = getValue("password");

  if (email === "" || password === "") {
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
      alert("Masuk ke dashboard (belum dibuat 😄)");
    }, 1000);

  } else {
    setInner("message", "❌ Email atau password salah");
  }
});