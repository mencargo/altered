
//About Page Pop Up
			var popupAboutStatus = 0;
			
			function loadPopupAbout(){
				if(popupAboutStatus==0){
					$("#popupAbout").fadeIn("slow");
					popupAboutStatus = 1;
				}
			}
			
			function disablePopupAbout(){
				if(popupAboutStatus==1){
					$("#popupAbout").fadeOut("slow");
					popupAboutStatus = 0;
				}
			}
			
			function centerPopupAbout(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupAboutHeight = $("#popupAbout").height();
				var popupAboutWidth = $("#popupAbout").width();
				$("#popupAbout").css({
					"position": "absolute",
					"top": windowHeight/2-popupAboutHeight/2,
					"left": windowWidth/2-popupAboutWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupAbout").fadeOut();
				popupAboutStatus = 0;
				$("#about").click(function(){
				$("#popupAbout").css({
					"visibility": "visible"	});
					disablePopupProjects();
					disablePopupContact();
					disablePopupBlog();
					centerPopupAbout();
					loadPopupAbout();
				    $("#popupAbout").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);	
				});
				$("#popupAboutClose").click(function(){
					disablePopupAbout();
				});
				$("#bg").click(function(){
					disablePopupAbout();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupAbout();
			});
			});
			
			
//Clientes Page Pop Up
			var popupClientesStatus = 0;
			
			function loadPopupClientes(){
				if(popupClientesStatus==0){
					$("#popupClientes").fadeIn("slow");
					popupClientesStatus = 1;
				}
			}
			
			function disablePopupClientes(){
				if(popupClientesStatus==1){
					$("#popupClientes").fadeOut("slow");
					popupClientesStatus = 0;
				}
			}
			
			function centerPopupClientes(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupClientesHeight = $("#popupClientes").height();
				var popupClientesWidth = $("#popupClientes").width();
				$("#popupClientes").css({
					"position": "absolute",
					"top": windowHeight/2-popupClientesHeight/2,
					"left": windowWidth/2-popupClientesWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupClientes").fadeOut();
				popupClientesStatus = 0;
				$("#clientes").click(function(){
				$("#popupClientes").css({
					"visibility": "visible"	});
					disablePopupProjects();
					disablePopupContact();
					disablePopupBlog();
					centerPopupClientes();
					loadPopupClientes();
				    $("#popupClientes").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);	
				});
				$("#popupClientesClose").click(function(){
					disablePopupClientes();
				});
				$("#bg").click(function(){
					disablePopupClientes();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupClientes();
			});
			});
			
			
//Projects Page Pop Up
			var popupProjectsStatus = 0;
			
			function loadPopupProjects(){
				if(popupProjectsStatus==0){
					$("#popupProjects").fadeIn("slow");
					popupProjectsStatus = 1;
				}
			}
			
			function disablePopupProjects(){
				if(popupProjectsStatus==1){
					$("#popupProjects").fadeOut("slow");
					popupProjectsStatus = 0;
				}
			}
			
			function centerPopupProjects(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupProjectsHeight = $("#popupProjects").height();
				var popupProjectsWidth = $("#popupProjects").width();
				$("#popupProjects").css({
					"position": "absolute",
					"top": windowHeight/2-popupProjectsHeight/2,
					"left": windowWidth/2-popupProjectsWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupProjects").fadeOut();
				popupProjectsStatus = 0;
				$("#projects").click(function(){
				$("#popupProjects").css({
					"visibility": "visible"	});
					disablePopupAbout();
					disablePopupContact();
					disablePopupBlog();					
					centerPopupProjects();
					loadPopupProjects();
				    $("#popupProjects").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);						
				});
				$("#popupProjectsClose").click(function(){
					disablePopupProjects();
				});
				$("#bg").click(function(){
					disablePopupProjects();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupProjects();
			});
			});
//Contact Page Pop Up
			var popupContactStatus = 0;
			
			function loadPopupContact(){
				if(popupContactStatus==0){
					$("#popupContact").fadeIn("slow");
					popupContactStatus = 1;
				}
			}
			
			function disablePopupContact(){
				if(popupContactStatus==1){
					$("#popupContact").fadeOut("slow");
					popupContactStatus = 0;
				}
			}
			
			function centerPopupContact(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupContactHeight = $("#popupContact").height();
				var popupContactWidth = $("#popupContact").width();
				$("#popupContact").css({
					"position": "absolute",
					"top": windowHeight/2-popupContactHeight/2,
					"left": windowWidth/2-popupContactWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupContact").fadeOut();
				popupContactStatus = 0;
				$("#contact").click(function(){
				$("#popupContact").css({
					"visibility": "visible"	});
					disablePopupAbout();
					disablePopupProjects();
					disablePopupBlog();					
					centerPopupContact();
					loadPopupContact();
				    $("#popupContact").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);						
				});
				$("#popupContactClose").click(function(){
					disablePopupContact();
				});
				$("#bg").click(function(){
					disablePopupContact();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupContact();
			});
			});
//Blog Page Pop Up
			var popupBlogStatus = 0;
			
			function loadPopupBlog(){
				if(popupBlogStatus==0){
					$("#popupBlog").fadeIn("slow");
					popupBlogStatus = 1;
				}
			}
			
			function disablePopupBlog(){
				if(popupBlogStatus==1){
					$("#popupBlog").fadeOut("slow");
					popupBlogStatus = 0;
				}
			}
			
			function centerPopupBlog(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupBlogHeight = $("#popupBlog").height();
				var popupBlogWidth = $("#popupBlog").width();
				$("#popupBlog").css({
					"position": "absolute",
					"top": windowHeight/2-popupBlogHeight/2,
					"left": windowWidth/2-popupBlogWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupBlog").fadeOut();
				popupBlogStatus = 0;
				$("#blog").click(function(){
				$("#popupBlog").css({
					"visibility": "visible"	});
					disablePopupAbout();
					disablePopupProjects();					
					disablePopupContact();					
					centerPopupBlog();
					loadPopupBlog();
				    $("#popupBlog").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);						
				});
				$("#popupBlogClose").click(function(){
					disablePopupBlog();
				});
				$("#bg").click(function(){
					disablePopupBlog();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupBlog();
			});
			});
			
			

			
			
			
//Lito Page Pop Up
			var popupLitoStatus = 0;
			
			function loadPopupLito(){
				if(popupLitoStatus==0){
					$("#popupLito").fadeIn("slow");
					popupLitoStatus = 1;
				}
			}
							
			function disablePopupLito(){
				if(popupLito==1){
					$("#popupLito").fadeOut("slow");
					popupLitoStatus = 0;
				}
			}
			
			function centerPopupLito(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupLitoHeight = $("#popupLito").height();
				var popupLitoWidth = $("#popupLito").width();
				$("#popupLito").css({
					"position": "absolute",
					"top": windowHeight/2-popupLitoHeight/2,
					"left": windowWidth/13-popupLitoWidth/2
				});
			}
			
			$(document).ready(function(){
				$("#popupLito").fadeOut();
				popupLitoStatus = 0;
				$("#lito").click(function(){
				$("#popupLito").css({
					"visibility": "visible"	});
					disablePopupPemex();
    				disablePopupLink();
					centerPopupLito();
					loadPopupLito();	
				});
				
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupLito();
				
			});
			});
			



			
			

			//Link Page Pop Up
			var popupLinkStatus = 0;
			
			function loadPopupLink(){
				if(popupLinkStatus==0){
					$("#popupLink").fadeIn("slow");
					popupLinkStatus = 1;
				}
			}
			
			function disablePopupLink(){
				if(popupLink==1){
					$("#popupLink").fadeOut("slow");
					popupLinkStatus = 0;
				}
			}
			
			function centerPopupLink(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupLinkHeight = $("#popupLink").height();
				var popupLinkWidth = $("#popupLink").width();
				$("#popupLink").css({
					"position": "absolute",
					"top": windowHeight/2-popupLinkHeight/2,
					"left": windowWidth/13-popupLinkWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupLink").fadeOut();
				popupLinkStatus = 0;
				$("#link").click(function(){
				$("#popupLink").css({
					"visibility": "visible"	});
					$('#PopupLito').attr('disabled','disabled');
					centerPopupLink();
					loadPopupLink();	
				});
				
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupLink();
			});
			});
			
			
			

			
			
//Pemex Page Pop Up
			var popupPemexStatus = 0;
			
			function loadPopupPemex(){
				if(popupPemexStatus==0){
					$("#popupPemex").fadeIn("slow");
					popupPemexStatus = 1;
				}
			}
			
			function disablePopupPemex(){
				if(popupPemex==1){
					$("#popupPemex").fadeOut("slow");
					popupPemexStatus = 0;
				}
			}
			
			function centerPopupPemex(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupPemexHeight = $("#popupPemex").height();
				var popupPemexWidth = $("#popupPemex").width();
				$("#popupPemex").css({
					"position": "absolute",
					"top": windowHeight/2-popupPemexHeight/2,
					"left": windowWidth/13-popupPemexWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupPemex").fadeOut();
				popupPemexStatus = 0;
				$("#pemex").click(function(){
				$("#popupPemex").css({
					"visibility": "visible"	});
					$('#PopupSony').attr('disabled','disabled');
					centerPopupPemex();
					loadPopupPemex();
				});
				$("#bg").click(function(){
					disablePopupPemex();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupPemex();
			});
			});
			

//Sony Page Pop Up
			var popupSonyStatus = 0;
			
			function loadPopupSony(){
				if(popupSonyStatus==0){
					$("#popupSony").fadeIn("slow");
					popupSonyStatus = 1;
				}
			}
			
			function disablePopupSony(){
				if(popupSony==1){
					$("#popupSony").fadeOut("slow");
					popupSonyStatus = 0;
				}
			}
			
			function centerPopupSony(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupSonyHeight = $("#popupSony").height();
				var popupSonyWidth = $("#popupSony").width();
				$("#popupSony").css({
					"position": "absolute",
					"top": windowHeight/2-popupSonyHeight/2,
					"left": windowWidth/13-popupSonyWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupSony").fadeOut();
				popupSonyStatus = 0;
				$("#sony").click(function(){
				$("#popupSony").css({
					"visibility": "visible"	});
					centerPopupSony();
					loadPopupSony();	
				});
				$("#popupSonyClose").click(function(){
					disablePopupSony();
				});
				$("#bg").click(function(){
					disablePopupSony();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupSony();
			});
			});
			
			
			//Iab11 Page Pop Up
			var popupIab11Status = 0;
			
			function loadPopupIab11(){
				if(popupIab11Status==0){
					$("#popupIab11").fadeIn("slow");
					popupIab11Status = 1;
				}
			}
			
			function disablePopupIab11(){
				if(popupIab11==1){
					$("#popupIab11").fadeOut("slow");
					popupIab11Status = 0;
				}
			}
			
			function centerPopupIab11(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupIab11Height = $("#popupIab11").height();
				var popupIab11Width = $("#popupIab11").width();
				$("#popupIab11").css({
					"position": "absolute",
					"top": windowHeight/2-popupIab11Height/2,
					"left": windowWidth/13-popupIab11Width/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupIab11").fadeOut();
				popupIab11Status = 0;
				$("#iab11").click(function(){
				$("#popupIab11").css({
					"visibility": "visible"	});
					centerPopupIab11();
					loadPopupIab11();
				});
				$("#bg").click(function(){
					disablePopupIab11();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupIab11();
			});
			});
			
			
			//Andrea Page Pop Up
			var popupAndreaStatus = 0;
			
			function loadPopupAndrea(){
				if(popupAndreaStatus==0){
					$("#popupAndrea").fadeIn("slow");
					popupAndreaStatus = 1;
				}
			}
			
			function disablePopupAndrea(){
				if(popupAndrea==1){
					$("#popupAndrea").fadeOut("slow");
					popupAndreaStatus = 0;
				}
			}
			
			function centerPopupAndrea(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupAndreaHeight = $("#popupAndrea").height();
				var popupAndreaWidth = $("#popupAndrea").width();
				$("#popupAndrea").css({
					"position": "absolute",
					"top": windowHeight/2-popupAndreaHeight/2,
					"left": windowWidth/13-popupAndreaWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupAndrea").fadeOut();
				popupAndreaStatus = 0;
				$("#andrea").click(function(){
				$("#popupAndrea").css({
					"visibility": "visible"	});
					centerPopupAndrea();
					loadPopupAndrea();
				    $("#popupAndrea").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);	
				});
				$("#popupAndreaClose").click(function(){
					disablePopupAndrea();
				});
				$("#bg").click(function(){
					disablePopupAndrea();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupAndrea();
			});
			});
			
			
			//Cushman Page Pop Up
			var popupCushmanStatus = 0;
			
			function loadPopupCushman(){
				if(popupCushmanStatus==0){
					$("#popupCushman").fadeIn("slow");
					popupCushmanStatus = 1;
				}
			}
			
			function disablePopupCushman(){
				if(popupCushman==1){
					$("#popupCushman").fadeOut("slow");
					popupCushmanStatus = 0;
				}
			}
			
			function centerPopupCushman(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupCushmanHeight = $("#popupCushman").height();
				var popupCushmanWidth = $("#popupCushman").width();
				$("#popupCushman").css({
					"position": "absolute",
					"top": windowHeight/2-popupCushmanHeight/2,
					"left": windowWidth/13-popupCushmanWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupCushman").fadeOut();
				popupCushmanStatus = 0;
				$("#cushman").click(function(){
				$("#popupCushman").css({
					"visibility": "visible"	});
					centerPopupCushman();
					loadPopupCushman();
				    $("#popupCushman").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);	
				});
				$("#popupCushmanClose").click(function(){
					disablePopupCushman();
				});
				$("#bg").click(function(){
					disablePopupCushman();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupCushman();
			});
			});
			
			
			//Gow Page Pop Up
			var popupGowStatus = 0;
			
			function loadPopupGow(){
				if(popupGowStatus==0){
					$("#popupGow").fadeIn("slow");
					popupGowStatus = 1;
				}
			}
			
			function disablePopupGow(){
				if(popupGow==1){
					$("#popupGow").fadeOut("slow");
					popupGowStatus = 0;
				}
			}
			
			function centerPopupGow(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupGowHeight = $("#popupGow").height();
				var popupGowWidth = $("#popupGow").width();
				$("#popupGow").css({
					"position": "absolute",
					"top": windowHeight/2-popupGowHeight/2,
					"left": windowWidth/13-popupGowWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupGow").fadeOut();
				popupGowStatus = 0;
				$("#gow").click(function(){
				$("#popupGow").css({
					"visibility": "visible"	});
					centerPopupGow();
					loadPopupGow();
				    $("#popupGow").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);	
				});
				$("#popupGowClose").click(function(){
					disablePopupGow();
				});
				$("#bg").click(function(){
					disablePopupGow();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupGow();
			});
			});
			
			
			//Samsung Page Pop Up
			var popupSamsungStatus = 0;
			
			function loadPopupSamsung(){
				if(popupSamsungStatus==0){
					$("#popupSamsung").fadeIn("slow");
					popupSamsungStatus = 1;
				}
			}
			
			function disablePopupSamsung(){
				if(popupSamsung==1){
					$("#popupSamsung").fadeOut("slow");
					popupSamsungStatus = 0;
				}
			}
			
			function centerPopupSamsung(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupSamsungHeight = $("#popupSamsung").height();
				var popupSamsungWidth = $("#popupSamsung").width();
				$("#popupSamsung").css({
					"position": "absolute",
					"top": windowHeight/2-popupSamsungHeight/2,
					"left": windowWidth/13-popupSamsungWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupSamsung").fadeOut();
				popupSamsungStatus = 0;
				$("#samsung").click(function(){
				$("#popupSamsung").css({
					"visibility": "visible"	});
					centerPopupSamsung();
					loadPopupSamsung();
				    $("#popupSamsung").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);	
				});
				$("#popupSamsungClose").click(function(){
					disablePopupSamsung();
				});
				$("#bg").click(function(){
					disablePopupSamsung();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupSamsung();
			});
			});
			
			
			
			//Dld Page Pop Up
			var popupDldStatus = 0;
			
			function loadPopupDld(){
				if(popupDldStatus==0){
					$("#popupDld").fadeIn("slow");
					popupDldStatus = 1;
				}
			}
			
			function disablePopupDld(){
				if(popupDld==1){
					$("#popupDld").fadeOut("slow");
					popupDldStatus = 0;
				}
			}
			
			function centerPopupDld(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupDldHeight = $("#popupDld").height();
				var popupDldWidth = $("#popupDld").width();
				$("#popupDld").css({
					"position": "absolute",
					"top": windowHeight/2-popupDldHeight/2,
					"left": windowWidth/13-popupDldWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupDld").fadeOut();
				popupDldStatus = 0;
				$("#dld").click(function(){
				$("#popupDld").css({
					"visibility": "visible"	});
					centerPopupDld();
					loadPopupDld();
				    $("#popupDld").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);	
				});
				$("#popupDldClose").click(function(){
					disablePopupDld();
				});
				$("#bg").click(function(){
					disablePopupDld();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupDld();
			});
			});
			
			
			
			//Chiapas Page Pop Up
			var popupChiapasStatus = 0;
			
			function loadPopupChiapas(){
				if(popupChiapasStatus==0){
					$("#popupChiapas").fadeIn("slow");
					popupChiapasStatus = 1;
				}
			}
			
			function disablePopupChiapas(){
				if(popupChiapas==1){
					$("#popupChiapas").fadeOut("slow");
					popupChiapasStatus = 0;
				}
			}
			
			function centerPopupChiapas(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupChiapasHeight = $("#popupChiapas").height();
				var popupChiapasWidth = $("#popupChiapas").width();
				$("#popupChiapas").css({
					"position": "absolute",
					"top": windowHeight/2-popupChiapasHeight/2,
					"left": windowWidth/13-popupChiapasWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupChiapas").fadeOut();
				popupChiapasStatus = 0;
				$("#chiapas").click(function(){
				$("#popupChiapas").css({
					"visibility": "visible"	});
					centerPopupChiapas();
					loadPopupChiapas();
				    $("#popupChiapas").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);	
				});
				$("#popupChiapasClose").click(function(){
					disablePopupChiapas();
				});
				$("#bg").click(function(){
					disablePopupChiapas();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupChiapas();
			});
			});
			
			
			//Oracle Page Pop Up
			var popupOracleStatus = 0;
			
			function loadPopupOracle(){
				if(popupOracleStatus==0){
					$("#popupOracle").fadeIn("slow");
					popupOracleStatus = 1;
				}
			}
			
			function disablePopupOracle(){
				if(popupOracle==1){
					$("#popupOracle").fadeOut("slow");
					popupOracleStatus = 0;
				}
			}
			
			function centerPopupOracle(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupOracleHeight = $("#popupOracle").height();
				var popupOracleWidth = $("#popupOracle").width();
				$("#popupOracle").css({
					"position": "absolute",
					"top": windowHeight/2-popupOracleHeight/2,
					"left": windowWidth/13-popupOracleWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupOracle").fadeOut();
				popupOracleStatus = 0;
				$("#oracle").click(function(){
				$("#popupOracle").css({
					"visibility": "visible"	});
					centerPopupOracle();
					loadPopupOracle();
				    $("#popupOracle").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);	
				});
				$("#popupOracleClose").click(function(){
					disablePopupOracle();
				});
				$("#bg").click(function(){
					disablePopupOracle();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupOracle();
			});
			});
			
			
			//Iab13 Page Pop Up
			var popupIab13Status = 0;
			
			function loadPopupIab13(){
				if(popupIab13Status==0){
					$("#popupIab13").fadeIn("slow");
					popupIab13Status = 1;
				}
			}
			
			function disablePopupIab13(){
				if(popupIab13==1){
					$("#popupIab13").fadeOut("slow");
					popupIab13Status = 0;
				}
			}
			
			function centerPopupIab13(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupIab13Height = $("#popupIab13").height();
				var popupIab13Width = $("#popupIab13").width();
				$("#popupIab13").css({
					"position": "absolute",
					"top": windowHeight/2-popupIab13Height/2,
					"left": windowWidth/13-popupIab13Width/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupIab13").fadeOut();
				popupIab13Status = 0;
				$("#iab13").click(function(){
				$("#popupIab13").css({
					"visibility": "visible"	});
					centerPopupIab13();
					loadPopupIab13();
				    $("#popupIab13").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);	
				});
				$("#popupIab13Close").click(function(){
					disablePopupIab13();
				});
				$("#bg").click(function(){
					disablePopupIab13();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupIab13();
			});
			});
			
			
			//Dayoff Page Pop Up
			var popupDayoffStatus = 0;
			
			function loadPopupDayoff(){
				if(popupDayoffStatus==0){
					$("#popupDayoff").fadeIn("slow");
					popupDayoffStatus = 1;
				}
			}
			
			function disablePopupDayoff(){
				if(popupDayoff==1){
					$("#popupDayoff").fadeOut("slow");
					popupDayoffStatus = 0;
				}
			}
			
			function centerPopupDayoff(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupDayoffHeight = $("#popupDayoff").height();
				var popupDayoffWidth = $("#popupDayoff").width();
				$("#popupDayoff").css({
					"position": "absolute",
					"top": windowHeight/2-popupDayoffHeight/2,
					"left": windowWidth/13-popupDayoffWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupDayoff").fadeOut();
				popupDayoffStatus = 0;
				$("#dayoff").click(function(){
				$("#popupDayoff").css({
					"visibility": "visible"	});
					centerPopupDayoff();
					loadPopupDayoff();
				    $("#popupDayoff").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);	
				});
				$("#popupDayoffClose").click(function(){
					disablePopupDayoff();
				});
				$("#bg").click(function(){
					disablePopupDayoff();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupDayoff();
			});
			});
			
			
			//Aero Page Pop Up
			var popupAeroStatus = 0;
			
			function loadPopupAero(){
				if(popupAeroStatus==0){
					$("#popupAero").fadeIn("slow");
					popupAeroStatus = 1;
				}
			}
			
			function disablePopupAero(){
				if(popupAero==1){
					$("#popupAero").fadeOut("slow");
					popupAeroStatus = 0;
				}
			}
			
			function centerPopupAero(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupAeroHeight = $("#popupAero").height();
				var popupAeroWidth = $("#popupAero").width();
				$("#popupAero").css({
					"position": "absolute",
					"top": windowHeight/2-popupAeroHeight/2,
					"left": windowWidth/13-popupAeroWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupAero").fadeOut();
				popupAeroStatus = 0;
				$("#aero").click(function(){
				$("#popupAero").css({
					"visibility": "visible"	});
					centerPopupAero();
					loadPopupAero();
				    $("#popupAero").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);	
				});
				$("#popupAeroClose").click(function(){
					disablePopupAero();
				});
				$("#bg").click(function(){
					disablePopupAero();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupAero();
			});
			});
			
			
			//Jj Page Pop Up
			var popupJjStatus = 0;
			
			function loadPopupJj(){
				if(popupJjStatus==0){
					$("#popupJj").fadeIn("slow");
					popupJjStatus = 1;
				}
			}
			
			function disablePopupJj(){
				if(popupJj==1){
					$("#popupJj").fadeOut("slow");
					popupJjStatus = 0;
				}
			}
			
			function centerPopupJj(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupJjHeight = $("#popupJj").height();
				var popupJjWidth = $("#popupJj").width();
				$("#popupJj").css({
					"position": "absolute",
					"top": windowHeight/2-popupJjHeight/2,
					"left": windowWidth/13-popupJjWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupJj").fadeOut();
				popupJjStatus = 0;
				$("#jj").click(function(){
				$("#popupJj").css({
					"visibility": "visible"	});
					centerPopupJj();
					loadPopupJj();
				    $("#popupJj").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);	
				});
				$("#popupJjClose").click(function(){
					disablePopupJj();
				});
				$("#bg").click(function(){
					disablePopupJj();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupJj();
			});
			});
			
			
			//Blackrock Page Pop Up
			var popupBlackrockStatus = 0;
			
			function loadPopupBlackrock(){
				if(popupBlackrockStatus==0){
					$("#popupBlackrock").fadeIn("slow");
					popupBlackrockStatus = 1;
				}
			}
			
			function disablePopupBlackrock(){
				if(popupBlackrock==1){
					$("#popupBlackrock").fadeOut("slow");
					popupBlackrockStatus = 0;
				}
			}
			
			function centerPopupBlackrock(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupBlackrockHeight = $("#popupBlackrock").height();
				var popupBlackrockWidth = $("#popupBlackrock").width();
				$("#popupBlackrock").css({
					"position": "absolute",
					"top": windowHeight/2-popupBlackrockHeight/2,
					"left": windowWidth/13-popupBlackrockWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupBlackrock").fadeOut();
				popupBlackrockStatus = 0;
				$("#blackrock").click(function(){
				$("#popupBlackrock").css({
					"visibility": "visible"	});
					centerPopupBlackrock();
					loadPopupBlackrock();
				    $("#popupBlackrock").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);	
				});
				$("#popupBlackrockClose").click(function(){
					disablePopupBlackrock();
				});
				$("#bg").click(function(){
					disablePopupBlackrock();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupBlackrock();
			});
			});
			
			
