	// You can also use "$(window).load(function() {"

	function createCookie(name, value, days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			var expires = "; expires=" + date.toGMTString();
		} else var expires = "";

		document.cookie = name + "=" + value + expires + "; path=/";
	}

	function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
		}
		return null;
	}

	function eraseCookie(name) {
		createCookie(name, "", -1);
	}

	$(function() {
		$(".termos-politica").hide();
		// eraseCookie("notice-riopretrans");
		console.log(readCookie("notice-riopretrans"));
		if (readCookie("notice-riopretrans")==null) {
			$(".termos-politica").show();
		}

		$(".aceitar-termos-politica").on('click', function() {
			createCookie("notice-riopretrans",1,300);
			$(".termos-politica").hide();

		});

		// Slideshow 4
		$("#slider4").responsiveSlides({
			nav: true,
			speed: 2500,
			timeout: 11000,
			namespace: "callbacks",
			before: function() {
				$('.events').append("<li>before event fired.</li>");
			},
			after: function() {
				$('.events').append("<li>after event fired.</li>");
			}
		});

		$(".chosen").chosen({
			width: '380px',
		});

		$(".chosenint").chosen({
			width: '600px',
		});

		$("#slcLinhas").change(function(e) {
			var codigo = $(this).val();
			if (codigo != '') {
				location.href = 'http://www.riopretrans.com.br/horarios/' + codigo;
			}
		});

		$("#bt_form_contato").click(function() {
			if ($("#nome").val() != '' && $("#email").val() != "" && $("#fone").val() != "" && $("#assunto").val() != "" && $("#msg").val() != "") {
				if (!confirm("Deseja enviar os dados do formulário?")) {
					return false;
				}
			}
		});

	});

	function abrirgre() {
		window.open('http://ww01.rptrans.com.br/div/vto.htm?1', 'jav', 'STATUS=NO, TOOLBAR=NO, LOCATION=NO, DIRECTORIES=NO, RESISABLE=NO, SCROLLBARS=NO, TOP=10, LEFT=10, WIDTH=758, HEIGHT=628');
	}

	function abrirmsg() {
		window.open('msg.php', 'jav', 'STATUS=NO, TOOLBAR=NO, LOCATION=NO, DIRECTORIES=NO, RESISABLE=NO, SCROLLBARS=NO, TOP=10, LEFT=10, WIDTH=500, HEIGHT=300');
	}

    (function(i, s, o, g, r, a, m) {
		i['GoogleAnalyticsObject'] = r;
		i[r] = i[r] || function() {
			(i[r].q = i[r].q || []).push(arguments)
		}, i[r].l = 1 * new Date();
		a = s.createElement(o),
			m = s.getElementsByTagName(o)[0];
		a.async = 1;
		a.src = g;
		m.parentNode.insertBefore(a, m)
	})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

	ga('create', 'UA-55377248-1', 'auto');
	ga('send', 'pageview');