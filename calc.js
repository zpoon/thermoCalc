function calcArea() {
	var thickness = document.getElementById("thickness").value;
	var width = document.getElementById("width").value;
	var length = document.getElementById("length").value;

	if (thickness && width && length) {
		var area = ((width / 12) * length).toFixed(2);
		var thermolbs = (area * thickness * 0.0106).toFixed(2);
		var thermotons = (thermolbs / 2000).toFixed(2);
		$(".thermo_tons").html(thermotons);
		
	} else {
        
    }
}

$(".thermo_tons").html("--");
$('.ips').on('input', function (e) {
	calcArea();
});