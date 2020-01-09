$( function() {
    $( "#tabs" ).tabs();
  } );

$(function() {
    $(".accordion").accordion({
        heightStyle: "content",
        collapsible: true
    });
});



$(".playbtndiv").fadeOut(10);
$(document).ready(function(){

    var score = 0;
    var i = 15;
    var h = 0;
    var k = [11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    $("#save").click(() => {

        for(let b = 1; b <= 10; b++) {
            if ($("input[name='option" + b + "']:checked").val()) {
                if($("input[name='option" + b + "']:checked").val() === "2") {
                    if (k[b] == 0) {
                        score = score + 10;
                        k[b] = 1;
                    }
                    else {
                        continue;
                    }
                }
                else if ($("input[name='option" + b + "']").val() != 2) {
                    if (k[b] == 0) {
                        score = score - 5;
                        k[b] = 1;
                    }
                    else {
                        continue;
                    }
                }
            }
        }

        console.log(score);

        $("#curScore").text(score);

    });

    $("#curScore").text(score);

    function timer() {
        if(h >= 10){
            $(".timer").text(i +":" + h);
        }
        else {
            $(".timer").text(i +":0" + h);
        }

        if(h == 0) {
            i--;
            h = 60;
        }

        h--;

        if(i == 0) {
            $("body").empty();
            $("body").html(`    
        
        <div class="khatam">
            <span>Gameover</span><br><br>
            <span id="score"></span>
        </div>
        `);
        $("#score").text("\n" + score);
        }

    }
    
    $("#reset").click( () => {
        location.reload(true);
    } );

    $("#quit").click( () => {

        $("body").empty();
            $("body").html(`    
        
        <div class="khatam">
            <span>You Quit</span><br><br>
            <span id="score"></span>
        </div>
        `);
    } );

    $("#submit").click( () => {
        
        $("body").empty();
            $("body").html(`    
        
        <div class="khatam">
            <span>Gameover</span><br><br>
            <span id="score"></span>
        </div>
        `);
        $("#score").text("\n" + score);
    } )

    $(".timer").dblclick(function(){
        $(this).animate({
            "width": "400px",
            "height": "300px",
            "font-size": "100px",
            "border-radius": "3px"
        }, 300, function() {
            $(this).css("background-color", "rgb(101, 101, 228)");
        });

        $(this).click(function(){
            $(this).animate({
                "width": "100px",
                "height": "100px",
                "font-size": "25px",
                "border-radius": "50px"
            }, 300, function() {
                $(this).css("background-color", "turquoise");
            });
        })
    })

    $(".nav > span").animate({
        "font-size" : "80px"
    }, 2000, function(){
        $(".playbtndiv").fadeIn(100);
        $("#kkk").css("visibility", "visible");
    });

    $("#playbtn").click(function(){
        $(this).fadeOut(1000, function(){
            $("#tabs").css("visibility", "visible");
            $(".hold").css("visibility", "visible");
            $(".timer").css("visibility", "visible");
        });
        ID = setInterval(timer, 1000);
    });

    var openn = false;

    function open(i) {
        if(openn){
            for(var j = 1; j<=10; j++){
                close(j);
            }
            $("#que" + i).css("position","relative");
            $("#que" + i).animate({
                width: "170%",
                height: "400px",
                top: "100px",
                "background-color" : "#363636"
            }, 500, function(){
                $("#span" + i).css("color", "white");
                $("#cross" + i).css("visibility","visible");
                $("#cross" + i).css("font-size","25px");
                $("#qbox" + i).css("visibility", "visible");
                $("#qbox" + i).fadeIn(500);
            });
            openn = true;
        }
        else {
            $("#que" + i).css("position","relative");
            $("#que" + i).animate({
                width: "170%",
                height: "400px",
                top: "100px",
                "background-color" : "#363636"
            }, 500, function(){
                $("#span" + i).css("color", "white");
                $("#cross" + i).css("visibility","visible");
                $("#cross" + i).css("font-size","25px");
                $("#qbox" + i).css("visibility", "visible");
                $("#qbox" + i).fadeIn(500);
            });
            openn = true;
        }
    }

    function close(i) {
        $("#que" + i).animate({
            width: "10%",
            height: "70px",
            top: "0px",
            "background-color" : "white",
            "color": "black"
        },500, function(){
            $("#span" + i).css("color", "black");
            $("#cross" + i).css("visibility","none");
            $("#cross" + i).css("font-size","0.1px");
            $("#qbox" + i).fadeOut(200);
            $("#qbox" + i).css("visibility", "hidden");
        });
    }

    for(var d = 1; d<= 10; d++){
        open(d);
        close(d);
    }

    $("#span1").click(function() {
        open(1);
    });

    $("#span2").click(function() {
        open(2);
    });
    
    $("#span3").click(function() {
        open(3);
    });

    $("#span4").click(function() {
        open(4);
    });

    $("#span5").click(function() {
        open(5);
    });

    $("#span6").click(function() {
        open(6);
    });

    $("#span7").click(function() {
        open(7);
    });

    $("#span8").click(function() {
        open(8);
    });

    $("#span9").click(function() {
        open(9);
    });

    $("#span10").click(function() {
        open(10);
    });



    $("#cross1").click(function() {
        close(1);
    });

    $("#cross2").click(function() {
        close(2);
    });
    
    $("#cross3").click(function() {
        close(3);
    });

    $("#cross4").click(function() {
        close(4);
    });

    $("#cross5").click(function() {
        close(5);
    });

    $("#cross6").click(function() {
        close(6);
    });

    $("#cross7").click(function() {
        close(7);
    });

    $("#cross8").click(function() {
        close(8);
    });

    $("#cross9").click(function() {
        close(9);
    });

    $("#cross10").click(function() {
        close(10);
    });


});

