$(document).ready(function () {
    $("#contact-form").on("submit", function (e) {
        e.preventDefault(); // Ndalon rifreskimin e menjëhershëm sa për të bërë dërgimin

        var $form = $(this);
        var $btn = $("#btn-dergo");

        // Ndryshojmë gjendjen e butonit vizualisht
        $btn.text("Duke u dërguar...").prop("disabled", true);

        // Ekzekutojmë kërkesën AJAX
        $.ajax({
            url: $form.attr("action"),
            method: "POST",
            data: $form.serialize(),
            // Hoqëm dataType: "json" që të mos bllokohet nga Formbold
            success: function () {
                alert("Sukses! Mesazhi juaj u dërgua te administrata e shkollës.");
                
                // KJO LINJË RESTARTON (RIFRESKON) FAQEN PLOTËSISHT
                location.reload(); 
            },
            error: function () {
                alert("Ndodhi një problem gjatë dërgimit. Ju lutem provojeni përsëri.");
                
                // Në rast gabimi kthejmë butonin në gjendje normale që ta provojnë prapë
                $btn.text("Dërgo").prop("disabled", false);
            }
        });
    });
});
