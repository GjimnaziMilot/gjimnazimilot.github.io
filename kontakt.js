$(document).ready(function () {
    $("#contact-form").on("submit", function (e) {
        e.preventDefault(); // Ndalon rifreskimin e faqes

        var $form = $(this);
        var $btn = $("#btn-dergo");
        var $status = $("#status");

        // Ndryshojmë gjendjen e butonit vizualisht
        $btn.text("Duke u dërguar...").prop("disabled", true);

        // Ekzekutojmë kërkesën AJAX
        $.ajax({
            url: $form.attr("action"),
            method: "POST",
            data: $form.serialize(), // Paketon fushat automatikisht
            dataType: "json",
            success: function () {
                // Shfaqim njoftimin e bukur jeshil të suksesit
                $status.html(
                    '<div class="alert alert-success alert-dismissible" role="alert">' +
                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                    '<strong>Sukses!</strong> Mesazhi juaj u dërgua me sukses te administrata e shkollës.' +
                    '</div>'
                );
                
                // PASTRESA E FUSHAVE (E vendosur sigurt këtu)
                $form.trigger("reset"); 
            },
            error: function () {
                // Nëse ndodh ndonjë gabim
                $status.html(
                    '<div class="alert alert-danger alert-dismissible" role="alert">' +
                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                    '<strong>Gabim!</strong> Ndodhi një problem gjatë dërgimit. Ju lutem provojeni përsëri.' +
                    '</div>'
                );
            },
            complete: function () {
                // Kthejmë butonin në gjendje normale pasi përfundon procesi
                $btn.text("Dërgo").prop("disabled", false);

                // Heqim njoftimin automatikisht pas 6 sekondave
                setTimeout(function () {
                    $status.empty();
                }, 6000);
            }
        });
    });
});
