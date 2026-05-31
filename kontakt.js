/**
 * Funksioni që ekzekutohet automatikisht në momentin 
 * kur përdoruesi klikon butonin "Dërgo" dhe formulari niset.
 */
function shfaqNjoftimin() {
    var statusDiv = document.getElementById("status");
    var form = document.getElementById("contact-form");

    // Shfaq njoftimin e bukur me stil Bootstrap në ekran
    statusDiv.innerHTML = '<div class="alert alert-success">' +
                          '<strong>Sukses!</strong> Mesazhi juaj u dërgua me sukses te administrata e shkollës.' +
                          '</div>';

    // Presim 500 milisekonda (gjysmë sekonde) sa të kryhet dërgimi te Google dhe pastrojmë kutitë
    setTimeout(function () {
        if (form) {
            form.reset();
        }
    }, 500);

    // Heqim mesazhin jeshil të suksesit automatikisht pas 5 sekondave
    setTimeout(function () {
        statusDiv.innerHTML = "";
    }, 5000);
}
