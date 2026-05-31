document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("contact-form");
    var statusDiv = document.getElementById("status");
    var btnDergo = document.getElementById("btn-dergo");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault(); // Ndalon rifreskimin e faqes

            // Ndryshojmë butonin për eksperiencë më të mirë vizuale
            btnDergo.innerText = "Duke u dërguar...";
            btnDergo.disabled = true;

            var url = form.getAttribute("action");
            var formData = new FormData(form);

            // Nisim kërkesën drejt FormBold
            fetch(url, {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(function (response) {
                if (response.ok) {
                    // Shfaqim njoftimin e bukur jeshil të suksesit
                    statusDiv.innerHTML = '<div class="alert alert-success">' +
                                          '<strong>Sukses!</strong> Mesazhi juaj u dërgua me sukses te administrata e shkollës.' +
                                          '</div>';
                    form.reset(); // Pastron kutitë e tekstit
                } else {
                    throw new Error("Gabim nga serveri");
                }
            })
            .catch(function (error) {
                // Nëse ndodh ndonjë problem me rrjetin
                statusDiv.innerHTML = '<div class="alert alert-danger">' +
                                      '<strong>Gabim!</strong> Ndodhi një problem gjatë dërgimit. Ju lutem provojeni përsëri.' +
                                      '</div>';
                console.error("Error:", error);
            })
            .finally(function () {
                // Kthejmë butonin në gjendje normale
                btnDergo.innerText = "Dërgo";
                btnDergo.disabled = false;

                // Fshijmë njoftimin jeshil automatikisht pas 5 sekondave
                setTimeout(function () {
                    statusDiv.innerHTML = "";
                }, 5000);
            });
        });
    }
});
