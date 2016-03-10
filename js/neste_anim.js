function neste_anim_resize(){
		var width = $("#neste-anim").width();
		var height = width*0.474155;
		var width_mob = Math.min(768,$("#neste-anim-mob").width());
		var height_mob = width_mob*1.3;
		$("#neste-anim").height(height);
		$("#neste-anim .back").width(width).height(height);
		$("#neste-anim .frame").width(width).height(height);
		$("#neste-anim .title").width(width*.6).height(height*.15);
		$("#neste-anim .car").width(width*.6).height(height*.25);
		$("#neste-anim .box").width(width*.3).height(height*.13);
		$("#neste-anim .mazesne").width(width*.2).height(height*.13);
		$("#neste-anim .smoke").width(width*.975).height(height);
		$("#neste-anim .prodiesel").width(width*.3).height(height*.15);
        /*$("#neste-anim .wheel").width(width*.3).height(height*.15);*/
        
		$("#neste-anim-mob").height(height_mob);
		$("#neste-anim-mob .back").width(width_mob).height(height_mob);
		$("#neste-anim-mob .frame").width(width_mob).height(height_mob);
		$("#neste-anim-mob .title").width(width_mob*.8).height(height_mob*.4);
		$("#neste-anim-mob .car").width(width_mob*.6).height(height_mob*.25);
		$("#neste-anim-mob .box").width(width_mob*.6).height(height_mob*.2);
		$("#neste-anim-mob .mazesne").width(width_mob*.5).height(height_mob*.2);
		$("#neste-anim-mob .smoke").width(width_mob*.975).height(height_mob);
		$("#neste-anim-mob .prodiesel").width(width_mob*.5).height(height_mob*.25);
	}

	neste_anim_resize();
	$(window).resize(function(){
		neste_anim_resize();
	});

	$("input").keydown(function (e) {
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190, 188]) !== -1 ||
            (e.keyCode == 65 && e.ctrlKey === true) ||
            (e.keyCode == 67 && e.ctrlKey === true) ||
            (e.keyCode == 88 && e.ctrlKey === true) ||
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 return;
        }
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });

    setInterval(function(){
    	{
			var a = $("#neste-anim .b1 input").val();
            a = a.replace(",", ".");
			var b = $("#neste-anim .b2 input").val();
            b = b.replace(",", "."); 
			if(a == false && !$("#neste-anim .b1 input").is(":focus")){
				$("#neste-anim .b1 .hinner").show();
			}else{
				$("#neste-anim .b1 .hinner").hide();
			}
			if(b == false && !$("#neste-anim .b2 input").is(":focus")){
				$("#neste-anim .b2 .hinner").show();
			}else{
				$("#neste-anim .b2 .hinner").hide();
			}
            if(a == false) {
                $("#neste-anim .b1 .inner ").hide();
            } else {
                $("#neste-anim .b1 .inner ").show(); 
            }
            if(b == false) {
                $("#neste-anim .b2 .inner ").hide();
            } else {
                $("#neste-anim .b2 .inner ").show(); 
            }
			var c = a/100*b;
	     	var d = 2.66;
	     	var f = c*d;
	     	var g = 0.2; 
	     	var ans = (f*g).toFixed(2);
            var was = 0;
            if($("#neste-anim .car").hasClass("driven")) {
                was = 1; 
            }
	     	if((f*g) == 0){
	     		$("#neste-anim .car").removeClass("driven");
	     		$("#neste-anim .smoke .smokey").removeClass("driven"); 
	     	}else{
	     		$("#neste-anim .car").addClass("driven");
	     		$("#neste-anim .smoke .smokey").addClass("driven");
	     	}
            var has = 0;
            if($("#neste-anim .car").hasClass("driven")) {
                has = 1; 
            }
            if(was==0 && has==1) {
                $("#neste-anim .wheel, #neste-anim .wheel2").removeClass("wheel-go");
                $("#neste-anim .wheel, #neste-anim .wheel2").removeClass("wheel-go2"); 
                clearInterval(wheel);
                $("#neste-anim .wheel, #neste-anim .wheel2").addClass("wheel-go");
                var wheel = setTimeout(function() {
                    $("#neste-anim .wheel, #neste-anim .wheel2").removeClass("wheel-go");
                }, 1650);
            } else if(was==1 && has==0) {
                $("#neste-anim .wheel, #neste-anim .wheel2").removeClass("wheel-go");
                $("#neste-anim .wheel, #neste-anim .wheel2").removeClass("wheel-go1"); 
                clearInterval(wheel);
                $("#neste-anim .wheel, #neste-anim .wheel2").addClass("wheel-go2");
                var wheel = setTimeout(function() {
                    $("#neste-anim .wheel, #neste-anim .wheel2").removeClass("wheel-go2");
                }, 1650);
            }    
	     	$("#neste-anim .b3 input").val(ans);
	     }
	    {
			var a = $("#neste-anim-mob .b1 input").val();
            a = a.replace(",", ".");
			var b = $("#neste-anim-mob .b2 input").val();
            b = b.replace(",", ".");
			if(a == false && !$("#neste-anim-mob .b1 input").is(":focus")){
				$("#neste-anim-mob .b1 .hinner").show();
			}else{
				$("#neste-anim-mob .b1 .hinner").hide();
			}
			if(b == false && !$("#neste-anim-mob .b2 input").is(":focus")){
				$("#neste-anim-mob .b2 .hinner").show();
			}else{
				$("#neste-anim-mob .b2 .hinner").hide();
			}
            if(a == false) {
                $("#neste-anim-mob .b1 .inner ").hide();
            } else {
                $("#neste-anim-mob .b1 .inner ").show(); 
            }
            if(b == false) {
                $("#neste-anim-mob .b2 .inner ").hide();
            } else {
                $("#neste-anim-mob .b2 .inner ").show(); 
            }
			var c = a/100*b;
	     	var d = 2.66;
	     	var f = c*d;
	     	var g = 0.2; 
	     	var ans = (f*g).toFixed(2);
            var was = 0;
            if($("#neste-anim-mob .car").hasClass("driven")) {
                was = 1; 
            }
	     	if((f*g) == 0){
	     		$("#neste-anim-mob .car").removeClass("driven");
	     		$("#neste-anim-mob .smoke .smokey").removeClass("driven");
	     	}else{
	     		$("#neste-anim-mob .car").addClass("driven");
	     		$("#neste-anim-mob .smoke .smokey").addClass("driven");
	     	}
            var has = 0;
            if($("#neste-anim-mob .car").hasClass("driven")) {
                has = 1; 
            }
            if(was==0 && has==1) {
                $("#neste-anim-mob .wheel, #neste-anim-mob .wheel2").removeClass("wheel-go");
                $("#neste-anim-mob .wheel, #neste-anim-mob .wheel2").removeClass("wheel-go2"); 
                clearInterval(wheel);
                $("#neste-anim-mob .wheel, #neste-anim-mob .wheel2").addClass("wheel-go");
                var wheel = setTimeout(function() {
                    $("#neste-anim-mob .wheel, #neste-anim-mob .wheel2").removeClass("wheel-go");
                }, 1650);
            } else if(was==1 && has==0) {
                $("#neste-anim-mob .wheel, #neste-anim-mob .wheel2").removeClass("wheel-go");
                $("#neste-anim-mob .wheel, #neste-anim-mob .wheel2").removeClass("wheel-go1"); 
                clearInterval(wheel);
                $("#neste-anim-mob .wheel, #neste-anim-mob .wheel2").addClass("wheel-go2");
                var wheel = setTimeout(function() {
                    $("#neste-anim-mob .wheel, #neste-anim-mob .wheel2").removeClass("wheel-go2");
                }, 1650);
            }
	     	$("#neste-anim-mob .b3 input").val(ans);
	     }
     },200);