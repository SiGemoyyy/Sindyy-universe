// Simpan catatan ke localStorage
function saveNote() {
  const note = document.getElementById('noteArea').value;
  localStorage.setItem('catatanKita', note);
  const msg = document.getElementById('savedMessage');
  msg.style.display = 'block';
  msg.textContent = 'Catatan disimpan!';
}

// Ambil catatan dari localStorage saat halaman dibuka
window.onload = function () {
  const savedNote = localStorage.getItem('catatanKita');
  if (savedNote) {
    document.getElementById('noteArea').value = savedNote;
  }
};
