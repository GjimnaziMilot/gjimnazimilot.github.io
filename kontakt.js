function dergoFormen() {
    var forma = document.getElementById("contact-form");
    var butoni = document.getElementById("btn-dergo");
    var statusi = document.getElementById("status");

    // 1. Ndryshojmë tekstin e butonit
    butoni.innerText = "Duke u dërguar...";
    butoni.disabled = true;

    // 2. Krijojmë një iframe të fshehur në prapaskenë
    var iframe = document.createElement("iframe");
    iframe.name = "iframe-fsheur";
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    // 3. I themi formës që të dërgohet brenda këtij iframe-i të fshehur
    forma.target = "iframe-fsheur";
    
    // 4. Nisim dërgimin
    forma.submit();

    // 5. Presim 2 sekonda sa të kryhet dërgimi te Formbold, dhe pastrojmë faqen
    setTimeout(function() {
        // Shfaqim njoftimin e suksesit
        statusi.innerHTML = '<div class="alert alert-success"><strong>Sukses!</strong> Mesazhi u dërgua.</div>';
        
        // FSHIJMË TË DHËNAT NGA FUSHAT
        forma.reset();
        
        // Kthejmë butonin në gjendje normale
        butoni.innerText = "Dërgo";
        butoni.disabled = false;

        // Heqim iframe-in e fshehur nga memoria
        document.body.removeChild(iframe);
    }, 2000);
}
