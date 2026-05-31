document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("contact-form");
    var statusDiv = document.getElementById("status");
    var btnDergo = document.getElementById("btn-dergo");

    if (form) {
        form.addEventListener("submit", function () {
            // 1. Ndryshojmë gjendjen e butonit që përdoruesi ta kuptojë që diçka po ndodh
            if (btnDergo) {
                btnDergo.innerText = "Duke u dërguar...";
                btnDergo.disabled = true;
            }

            // 2. Shfaqim njoftimin e bukur jeshil të suksesit sipër formularit
            if (statusDiv) {
                statusDiv.innerHTML = '<div class="alert alert-success">' +
                                      '<strong>Sukses!</strong> Mesazhi juaj u dërgua me sukses te administrata e shkollës.' +
                                      '</div>';
            }

            // 3. Presim gjysmë sekonde (sa të kryhet dërgimi te Google) për të pastruar kutitë dhe kthyer投入 butonin në gjendje normale
            setTimeout(function () {
                form.reset();
                if (btnDergo) {
                    btnDergo.innerText = "Dërgo";
                    btnDergo.disabled = false;
                }
            }, 500);

            // 4. Fshijmë mesazhin jeshil pas 5 sekondave otomatikisht
            setTimeout(function () {
                if (statusDiv) {
                    statusDiv.innerHTML = "";
                }
            }, 5000);
        });
    }
});
