
var mybtn = $(("#mybtn"));

var price = 0;

mybtn.on("click", function () {
    if ($(".sizeSelect").val() == 1) {
        price += 20;
        var first = "פיצה אישית";
    }
    else if ($(".sizeSelect").val() == 2) {
        price += 30;
        var first = "פיצה Large";
    }
    else if ($(".sizeSelect").val() == 3) {
        price += 40;
        var first = "פיצה X-Large";
    }
    else {
        var first = "נא בחר גודל";
    }

    if ($(".typeSelect").val() == 1) {
        var second = "בצק רגיל";
    }
    else if ($(".typeSelect").val() == 2) {
        var second = "בצק מלא";
    }
    else if ($(".typeSelect").val() == 3) {
        var second = "בצק דק";
    }
    else {
        var second = "נא בחר סוג בצק";
    }

    let value = ifBoxChecked();

    pricing = value[0];
    third = value[1];
    price = price + pricing;

    $("#customerSize").text(first);
    $("#customerBatzek").text(second);
    $("#customerTosafot").text(third);
    $("#customerPrice").text("מחיר: " + price + ' ש"ח');

    price = 0;

})

$("#mybtn1").on("click", function () {
    if ($("#customerSize").html() != "" && $("#customerSize").html() != "נא בחר גודל" && $("#customerBatzek").html() != "נא בחר סוג בצק") {
        alert("ההזמנה בוצעה בהצלחה, תודה שקנית אצלינו")
    }
})

function ifBoxChecked() {
    var tosafot = ["תירס", "בצל", "זיתים", "פטריות", "עגבניות"];
    var pricing = 0;
    var third = "";

    for (var i = 0; i < tosafot.length; i++) {
        if ($("#" + tosafot[i]).prop("checked")) {
            third += tosafot[i] + " ";
            pricing += 5;
        }
    }

    return [pricing, third];
}