$(document).ready(function(){
    /*Nuevo juego*/
    $('#newGame').click(function(){
        $('button').attr('class','box');
        $('button').removeAttr("disabled");
        $('#win').fadeOut(1);
    });

    /*Resetear los contadores y el tablero*/
    $('#reset').click(function(){
        $('button').attr('class','box');
        $('button').removeAttr("disabled");
        $('#win').fadeOut(1);
        playO = 0;
        playX = 0;
        $('#wonX').html(playX);
        $('#wonO').html(playO);
    });

    /*inicializar contadores*/
    $('#win').fadeOut(1);
    var Turn = "X";
    var playX = 0;
    var playO = 0;
    $('#wonX').html(playX);
    $('#wonO').html(playO);
    $('#turno').html(Turn);

    /*Colocar las fichas*/
    $('.box').click(function () {
        if (Turn == "X") {
            $(this).attr('class', 'cruz');
            $(this).attr("disabled", "true");
            Turn = "O";
            $('#turno').html(Turn);
            point();
        }
        else {
            $(this).attr('class', 'zero');
            $(this).attr("disabled", "true");
            Turn = "X";
            $('#turno').html(Turn);
            point();
        }
    });

    /*Compara las clases para saber quien gana*/
    function point() {
        if ($('#b1').hasClass('cruz') && $('#b2').hasClass('cruz') && $('#b3').hasClass('cruz') ||
            $('#b4').hasClass('cruz') && $('#b5').hasClass('cruz') && $('#b6').hasClass('cruz') ||
            $('#b7').hasClass('cruz') && $('#b8').hasClass('cruz') && $('#b9').hasClass('cruz') ||
            $('#b1').hasClass('cruz') && $('#b4').hasClass('cruz') && $('#b7').hasClass('cruz') ||
            $('#b2').hasClass('cruz') && $('#b5').hasClass('cruz') && $('#b8').hasClass('cruz') ||
            $('#b3').hasClass('cruz') && $('#b6').hasClass('cruz') && $('#b9').hasClass('cruz') ||
            $('#b1').hasClass('cruz') && $('#b5').hasClass('cruz') && $('#b9').hasClass('cruz') ||
            $('#b3').hasClass('cruz') && $('#b5').hasClass('cruz') && $('#b7').hasClass('cruz')) {
            playX += 1;
            $('#wonX').html(playX);
            lock();
            $('#win').fadeIn(100);
            $('#winner').html("X")
            $('#FX')[0].play();
        }
        if ($('#b1').hasClass('zero') && $('#b2').hasClass('zero') && $('#b3').hasClass('zero') ||
            $('#b4').hasClass('zero') && $('#b5').hasClass('zero') && $('#b6').hasClass('zero') ||
            $('#b7').hasClass('zero') && $('#b8').hasClass('zero') && $('#b9').hasClass('zero') ||
            $('#b1').hasClass('zero') && $('#b4').hasClass('zero') && $('#b7').hasClass('zero') ||
            $('#b2').hasClass('zero') && $('#b5').hasClass('zero') && $('#b8').hasClass('zero') ||
            $('#b3').hasClass('zero') && $('#b6').hasClass('zero') && $('#b9').hasClass('zero') ||
            $('#b1').hasClass('zero') && $('#b5').hasClass('zero') && $('#b9').hasClass('zero') ||
            $('#b3').hasClass('zero') && $('#b5').hasClass('zero') && $('#b7').hasClass('zero')) {
            playO += 1;
            $('#wonO').html(playO);
            lock();
            $('#win').fadeIn(100);
            $('#winner').html("O")
            $('#FO')[0].play();
        }
    }

    /*Desactivar los casilleros cuando se gana*/
    function lock() {
        $('button').attr("disabled", "true");
    }

    /*Menu desplegable*/
    $('#menu').hover(function(){
        $('ul>li').fadeIn('slow');
    },
        function() {
            $('ul>li').fadeOut('slow');
    });
});