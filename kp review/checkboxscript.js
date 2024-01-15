var getCareer = new Array();
getCareer["chk1"] = 1;
getCareer["chk2"] = 1;
getCareer["chk3"] = 1;
getCareer["chk4"] = 1;
getCareer["chk5"] = 1;
getCareer["chk6"] = 1;
getCareer["chk7"] = 1;


function getdata() {
    var Total = 0;
    var selected = document.forms["frm"]["chk"];


    for (var sel = 0; sel < selected.length; sel++) {

        if (selected[sel].checked)
            Total += getCareer[selected[sel].value]

    }
    console.log(sel);
    document.getElementById("circle").innerHTML = Total
}


var checkboxes = $("input[type='checkbox']"),
    submitButt = $("#sub1"),
    submitButt2 = $("#sub2");

checkboxes.click(function () {
    submitButt.attr("disabled", !checkboxes.is(":checked"));
    submitButt2.attr("disabled", !checkboxes.is(":checked"));
});


var checked = false;
var view = $('.view-all');


$('.view-all').on('click', function () {

    if (checked == false) {
        $("input[name='chk']").prop('checked', true);
        checked = true;
        var selected = document.forms["frm"]["chk"];
        submitButt.attr("disabled", !checkboxes.is(":checked"));
        submitButt2.attr("disabled", !checkboxes.is(":checked"));

        document.getElementById("circle").innerHTML = selected.length;

    } else {
        $("input[name='chk']").prop('checked', false);
        checked = false;
        submitButt.attr('disabled', 'disabled');
        submitButt2.attr('disabled', 'disabled');
        //alert("changed");
        document.getElementById("circle").innerHTML = 0;
    }




})


    $(".show-more").on('click',function(){
      $(".hide:hidden").slice(0, checkboxes.length).fadeIn();
      if ($(".hide:hidden").length < 1) $(this).fadeIn();
     
    
    })
    
