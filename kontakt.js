document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("contact-form");
    var statusDiv = document.getElementById("status");
    var btnDergo = document.getElementById("btn-dergo");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault(); // Ndalon rifreskimin tradicional të faqes

            // Ndryshojmë butonin vizualisht për t'i treguar përdoruesit që procesi nisi
            btnDergo.innerText = "Duke u dërguar...";
            btnDergo.disabled = true;

            var url = form.getAttribute("action");
            
            // Konvertojmë të dhënat e formularit në formatin e pastër JSON që kërkon FormBold
            var object = {};
            var formData = new FormData(form);
            formData.forEach(function(value, key){
                object[key] = value;
            });
            var json = JSON.stringify(object);

            // Dërgojmë kërkesën AJAX me kokat (headers) e duhura të sigurisve
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: json
            })
            .then(function (response) {
                if (response.ok) {
                    // Nëse dërgimi është i suksesshëm, shfaqim njoftimin e bukur jeshil
                    statusDiv.innerHTML = '<div class="alert alert-success">' +
                                          '<strong>Sukses!</strong> Mesazhi juaj u dërgua me sukses te administrata e shkollës.' +
                                          '</div>';
                    form.reset(); // Pastrojmë të gjitha kutitë e tekstit
                } else {
                    throw new Error("Gabim nga serveri FormBold");
                }
            })
            .catch(function (error) {
                // Nëse diçka shkon keq, shfaqim mesazhin e kuq të gabimit
                statusDiv.innerHTML = '<div class="alert alert-danger">' +
                                      '<strong>Gabim!</strong> Ndodhi një problem gjatë dërgimit. Ju lutem provojeni përsëri.' +
                                      '</div>';
                console.error("Error gjatë dërgimit:", error);
            })
            .finally(function () {
                // Kthejmë butonin në gjendjen e tij fillestare "Dërgo"
                btnDergo.innerText = "Dërgo";
                btnDergo.disabled = false;

                // Fshijmë njoftimin (jeshil ose të kuq) automatikisht pas 5 sekondave
                setTimeout(function () {
                    statusDiv.innerHTML = "";
                }, 5000);
            });
        });
    }
});
