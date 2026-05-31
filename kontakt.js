document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("contact-form");
    var statusDiv = document.getElementById("status");
    var btnDergo = document.getElementById("btn-dergo");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault(); // Ndalon rifreskimin e faqes

            // Ndryshojmë tekstin e butonit gjatë dërgimit
            btnDergo.innerText = "Duke u dërguar...";
            btnDergo.disabled = true;

            // Linku zyrtar i dërgimit të formularit tuaj Google Form
            var googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScbFnXWAmwIo7lPf-SvwX_fO_sGyMHwOWYmJ-6h1ObLDA7GPw/formResponse";

            // Paketimi i të dhënave me ID-të tuaja të sakta
            var formData = new FormData();
            formData.append("entry.76593485", document.getElementById("name").value);     // ID për Emrin
            formData.append("entry.1125227318", document.getElementById("email").value);  // ID për Email
            formData.append("entry.1722086930", document.getElementById("message").value); // ID për Mesazhin

            // Dërgimi i të dhënave në prapaskenë (AJAX fetch)
            fetch(googleFormUrl, {
                method: "POST",
                body: formData,
                mode: "no-cors" // Kjo parandalon bllokimin e sigurisë nga Google
            })
            .then(function () {
                // Shfaqja e njoftimit të suksesit në faqe
                statusDiv.innerHTML = '<div class="alert alert-success">' +
                                      '<strong>Sukses!</strong> Mesazhi u dërgua te administrata e shkollës.' +
                                      '</div>';
                
                form.reset(); // Pastron kutitë e tekstit
            })
            .catch(function (error) {
                // Nëse diçka shkon keq me rrjetin
                statusDiv.innerHTML = '<div class="alert alert-danger">' +
                                      '<strong>Gabim!</strong> Ndodhi një problem. Ju lutem provojeni përsëri.' +
                                      '</div>';
                console.error("Gabim gjatë dërgimit:", error);
            })
            .finally(function () {
                // Kthen投入 butonin në gjendjen normale
                btnDergo.innerText = "Dërgo";
                btnDergo.disabled = false;

                // Heq njoftimin pas 5 sekondave
                setTimeout(function () {
                    statusDiv.innerHTML = "";
                }, 5000);
            });
        });
    }
});
