document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("contact-form");
    var statusDiv = document.getElementById("status");

    if (form) {
        // 1. Krijojmë një iframe të fshehur dinamikisht që faqja të mos rifreskohet ose largohet
        var iframe = document.createElement("iframe");
        iframe.name = "hidden_iframe_sub";
        iframe.id = "hidden_iframe_sub";
        iframe.style.display = "none";
        document.body.appendChild(iframe);

        // 2. I tregojmë formularit që të dhënat t'i nisë brenda këtij iframe-i të fshehur
        form.target = "hidden_iframe_sub";

        // 3. Çfarë ndodh kur klikohet butoni "Dërgo"
        form.addEventListener("submit", function () {
            // Shfaqim njoftimin e bukur të suksesit direkt në faqe me stil Bootstrap
            statusDiv.innerHTML = '<div class="alert alert-success animate__animated animate__fadeIn">' +
                                  '<strong>Sukses!</strong> Mesazhi juaj u dërgua me sukses te administrata e shkollës.' +
                                  '</div>';

            // Pastrojmë fushat e formularit pas gjysmë sekonde (pasi të jenë nisur të dhënat)
            setTimeout(function () {
                form.reset();
            }, 500);

            // Largojmë njoftimin automatikisht pas 5 sekondave
            setTimeout(function () {
                statusDiv.innerHTML = "";
            }, 5000);
        });
    }
});
