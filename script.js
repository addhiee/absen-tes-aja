document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const uid = document.getElementById("uid").value;
    const nama = document.getElementById("nama").value;
    const keterangan = document.getElementById("keterangan").value;
  
    fetch("https://script.google.com/macros/s/AKfycbxAXkJ1y1l5cu7CG05gtNZmTZEs2QPypdr_3vSOzIDIQZZ3oioJH0XaL3iC6-ysEgCF/exec", {
      method: "POST",
      mode: "no-cors", // mode yang tidak akan diblok CORS
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        uid: uid,
        nama: nama,
        keterangan: keterangan
      })
    })
      .then(() => {
        const responseEl = document.getElementById("status");
        responseEl.innerHTML = "<span style='color: green;'>Absen berhasil dikirim.</span>";
        setTimeout(() => {
          responseEl.innerHTML = "";
        }, 5000);
      })
      .catch(error => {
        document.getElementById("status").innerHTML =
          "<span style='color: red;'>Gagal mengirim absen: " + error.message + "</span>";
        setTimeout(() => {
          document.getElementById("status").innerHTML = "";
        }, 5000);
      });
  });
  