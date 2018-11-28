function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function calcArea() {
	var thickness = document.getElementById("thickness").value;
	var width = document.getElementById("width").value;
	var length = document.getElementById("length").value;

	if (thickness && width && length) {
		var thermolbs = (((width / 12) * length) * thickness * 0.0098).toFixed(2);
		var thermotons = (thermolbs / 2000).toFixed(2);
		$(".thermo_tons").html(numberWithCommas(thermotons));
		$(".thermo_lbs").html(numberWithCommas(thermolbs));
		
	} else {
        $(".thermo_tons, .thermo_lbs").html("--");
    }
}

$(".thermo_tons, .thermo_lbs").html("--");
$('.ips').on('input', function (e) {
	calcArea();
});