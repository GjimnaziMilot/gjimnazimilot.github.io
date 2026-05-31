$(document).ready(function () {
    $("#contact-form").on("submit", function (e) {
        e.preventDefault(); // Ndalon rifreskimin e menjëhershëm

        var $form = $(this);
        var $btn = $("#btn-dergo");

        // Ndryshojmë butonin vizualisht
        $btn.text("Duke u dërguar...").prop("disabled", true);

        // Ekzekutojmë kërkesën AJAX
        $.ajax({
            url: $form.attr("action"),
            method: "POST",
            data: $form.serialize(),
            complete: function () {
                // Kjo pjesë do të ekzekutohet GJITHMONË sapo emaili të dërgohet
                
                // 1. Shfaqim njoftimin e suksesit
                alert("Mesazhi juaj u dërgua me sukses!");
                
                // 2. Fshijmë tekstin nga të gjitha fushat me forcë
                $form.find('input[type="text"], input[type="email"], textarea').val('');
                
                // 3. Kthejmë butonin në gjendje normale
                $btn.text("Dërgo").prop("disabled", false);
                
                // 4. Restartojmë faqen plotësisht për siguri
                location.reload();
            }
        });
    });
});
