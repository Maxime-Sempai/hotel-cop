$(function () {
    // bouton reservation
    $('.resas').css('color','white');
    // survol bouton resas
    $('.resas').mouseover(function () {
        $(this).css('color', 'black');
        $(this).css('background-color', '#b68735');
        $(this).css('border-color', '#b68735');
        $(this).css('text-decoration', 'none');
    });
    // leave bouton resas
    $('.resas').mouseout(function () {
        $(this).css('color', 'white');
        $(this).css('background-color', '#343a40');
        $(this).css('border-color', 'inherit');
        $(this).css('text-decoration', 'none');
    })
    // met la couleur blanche à tous les liens du main
    $('main a').css('color', 'white');
    // met la couleur grise à tous les liens du main lors du survol
    $('main a').mouseover(function () {
        $(this).css('color', '#69524c');
        $(this).css('text-decoration', 'none');
    });
    // enleve la couleur gold à tous les liens du main après le survol
    $('main a').mouseout(function () {
        $(this).css('color', 'inherit');
    });
    // met la couleur gold à tous les liens du footer
    $('footer a').css('color', '#b68735');
    // met la couleur white à tous les liens du footer lors du survol
    $('footer a').mouseover(function () {
        $(this).css('color', 'white');
        $(this).css('text-decoration', 'none');
    });
    // remet la couleur gold à tous les liens du footer
    $('footer a').mouseout(function () {
        $(this).css('color', '#b68735');
    });
    // met la couleur gold à tous les liens du panier lors du survol
    $('#cgv').css('color','black');
    $('#cgv').mouseover(function () {
        $(this).css('color', '#b68735');
        $(this).css('text-decoration', 'none');
    });
    // remet la couleur black à tous les liens du panier
    $('#cgv').mouseout(function () {
        $(this).css('color', 'black');
    });
    // met la couleur gold au bouton du panier lors du survol
    $('#boutonpanier').mouseover(function () {
        $(this).css('color', '#b68735');
        $(this).css('text-decoration', 'none');
    });
    // remet la couleur black au bouton du panier
    $('#boutonpanier').mouseout(function () {       
        $(this).css('color', 'white');
    });

    // twitter white / gold
    $('.twitter').mouseover(function () {
        $(this).css('background-image', 'url("img/logos/twitterOr.png")');
        $(this).css('text-decoration', 'none');
    });
    $('.twitter').mouseout(function () {
        $(this).css('background-image', 'url("img/logos/twitter.png")');
    });
    // facebook white / gold
    $('.facebook').mouseover(function () {
        $(this).css('background-image', 'url("img/logos/facebookOr.png")');
        $(this).css('text-decoration', 'none');
    });
    $('.facebook').mouseout(function () {
        $(this).css('background-image', 'url("img/logos/facebook.png")');
    });
    // insta white / gold
    $('.instagram').mouseover(function () {
        $(this).css('background-image', 'url("img/logos/instagramOr.png")');
        $(this).css('text-decoration', 'none');
    });
    $('.instagram').mouseout(function () {
        $(this).css('background-image', 'url("img/logos/instagram.png")');
    });
    // youtube white / gold
    $('.youtube').mouseover(function () {
        $(this).css('background-image', 'url("img/logos/youtubeOr.png")');
        $(this).css('text-decoration', 'none');
    });
    $('.youtube').mouseout(function () {
        $(this).css('background-image', 'url("img/logos/youtube.png")');
    });
    // controle du nombre de car min pour le mail news letter
    $('#submitNews').click(function () {

        var nbrCar = $("#emailNewsLetter").val().length;

        if (nbrCar < 6) {
            event.preventDefault();
            $("#emailNewsLetter").css('border-color','red');
        }
    });
    // fonction pour imprimer la page en cours
    $('.print').click(function(){
        event.preventDefault();
        window.print();

    });
        //onglets avis
        $('#myTab a').on('click', function (e) {
        e.preventDefault()
        $(this).tab('show')
    });

        // script contact verif Email
    $('#soumettre').click(function(){
        var emailCont = $('#emailContact').val();
        var emailConf = $('#emailConfirm').val();
        console.log(emailCont);
        console.log(emailConf);

        if(emailConf !== emailCont){
           event.preventDefault();
           $('.email').text('L\'email ne correspond pas').css('color','black'); 
           $('#emailConfirm').css('border-color','black');
        }
    });

    //script panier

    //verification que le champs saisi dans carte est bien un nombre
    $('#boutonPanier').click(function(){
        var numeroCarte = $('#numeroCarte').val();
        var tailleCarte = $('#numeroCarte').val().length;
        var crypto = $('#crypto').val();
        var tailleCrypto = $('#crypto').val().length;
        if(isNaN(numeroCarte)){
            event.preventDefault();
            $('#numeroCarte').css('border-color','red');
            $('.erreurCarte').text('veuillez rentrer les 16 chiffres se votre CB').css('color','red');
        }
        //verification que ce champs est bien = à 16
        if(tailleCarte != 16) {
            event.preventDefault();
            $('#numeroCarte').css('border-color','red');
            $('.erreurCarte').text('veuillez rentrer les 16 chiffres se votre CB').css('color','red');
        }
        //verification que le champs saisi dans crypto est bien un nombre
        if(isNaN(crypto)){
            event.preventDefault();
            $('#crypto').css('border-color','red')
            $('.erreurCrypto').text('veuillez rentrer les 3 chiffres au dos de votre CB').css('color','red');
        }
        //verification que ce champs est bien = à 3
        if(tailleCrypto != 3){
            event.preventDefault();
            $('#crypto').css('border-color','red')
            $('.erreurCrypto').text('veuillez rentrer les 3 chiffres au dos de votre CB').css('color','red');
        }
     
        
    });
    // reservation

    //recup valeur date d'arrivé et de retour

    $('#soumettre').click(function(){
        //formater la date pour la calculer
        var dateArrive = $('#datepicker').datepicker({dateFormat: 'yy-mm-dd'});
        var dateDepart = $('#datepicker2').datepicker({dateFormat: 'yy-mm-dd'});
        //variable nombre de nuit 
        depart = new Date (dateDepart.val());
        arrive = new Date (dateArrive.val());
        nbNuit = depart.getTime() - arrive.getTime();
        nbNuit = nbNuit / (1000 * 60 * 60 * 24);
        console.log(nbNuit);
    // prix des chambre
    var prixClassic = 1100;
    var prixConfort = 1600;
    var prixDeluxe = 2100;
    var prixSuite = 3200;
    // controle du nombre de personnes
    var nbrPers = $('.nbrPers').val();

    if (nbrPers < 1) {
        event.preventDefault();
        $('.nbrPers').css('border-color','red');
        console.log(nbrPers);
        $('.messageNbrPers').text('Veuillez saisir une valeure correcte');
        $('.messageNbrPers').css('color','black');
        }
    // prix du sejours par catégorie de chambre et nombre de personnes
    var prixSejourClassic = prixClassic * nbrPers * nbNuit;
    var prixSejourConfort = prixConfort * nbrPers * nbNuit;
    var prixSejourDeluxe = prixDeluxe * nbrPers * nbNuit;
    var prixSejourSuite = prixSuite * nbrPers * nbNuit;
    // verif
    console.log(prixSejourClassic);
    console.log(prixSejourConfort);
    console.log(prixSejourDeluxe);
    console.log(prixSejourSuite);

    $('.prixDuSejour').css('display','block');

    $('.tarifClassic').text(' ' + prixSejourClassic + '€');
    $('.tarifConfort').text(' ' + prixSejourConfort + '€');
    $('.tarifDeluxe').text(' ' + prixSejourDeluxe + '€');
    $('.tarifSuite').text(' ' + prixSejourSuite + '€');

    if (prixSejourClassic <= 0 || prixSejourConfort <= 0 || prixSejourDeluxe <= 0 || prixSejourSuite <= 0) {
    $('.tarifClassic').text('Veuillez remplire les champs de formulaires correctement et valider de nouveau').css('font-size','1.6em');
    $('.tarifConfort').text('Veuillez remplire les champs de formulaires correctement et valider de nouveau').css('font-size','1.6em');
    $('.tarifDeluxe').text('Veuillez remplire les champs de formulaires correctement et valider de nouveau').css('font-size','1.6em');
    $('.tarifSuite').text('Veuillez remplire les champs de formulaires correctement et valider de nouveau').css('font-size','1.6em');
    }
    if(nbNuit < 1){
        event.preventDefault();
    $('.tarifClassic').text('Veuillez renseigner une date valide').css('font-size','1.6em');
    $('.tarifConfort').text('Veuillez renseigner une date valide').css('font-size','1.6em');
    $('.tarifDeluxe').text('Veuillez renseigner une date valide').css('font-size','1.6em');
    $('.tarifSuite').text('Veuillez renseigner une date valide').css('font-size','1.6em');
    }


    });

});