// Wait for PhoneGap to load

document.addEventListener("deviceready", onDeviceReady, false);
document.addEventListener("DOMContentLoaded", onDOMContentLoaded, false);

var onDOMContentLoaded = function() {
	//$('#introdiv').hide();
	};

$(document).delegate('.closeme', 'click', function(){
	$('[data-role=collapsible]').trigger('collapse');
	window.scrollTo(100,0);
	});

var myScroll;
function loaded() {
	myScroll = new iScroll('wrapper',{ hScrollbar: false, vScrollbar: true, checkDOMChanges:true});
	myScroll2 = new iScroll('wrapper2',{ hScrollbar: false, vScrollbar: true, checkDOMChanges:true});
}


$(document).on('panelopen', '#infopanel3', function(event){
	setTimeout( function(){
		myScroll.refresh();
		},0);
});
$(document).on('panelopen', '#infopanel2', function(event){
	setTimeout( function(){
		myScroll2.refresh();
		},0);
});


$(document).on('pageinit', '#home', function(){
	ga_storage._trackPageview('/home');
	getHome();
	});
$(document).on('pagebeforeshow', '#home', function(){
	ga_storage._trackPageview('/home');
	getHome2();
	});
$(document).on('pagebeforeshow', '#Where', function(){
	ga_storage._trackPageview('/Where');
	getAreas();
	});
$(document).on('pagebeforeshow', '#infopanel', function(){
	ga_storage._trackPageview('/infopanel');
	getAreas();
	getAll();
	});	
$(document).on('pagebeforeshow', '#todo', function(){
	ga_storage._trackPageview('/todo');
	getCats();
	});
$(document).on('pagebeforeshow', '#clients', function(){
	ga_storage._trackPageview('/clients');
	$('#sponsor').remove();
	getClients();
	});
$(document).on('pagebeforeshow', '#indiv', function(){
	ga_storage._trackPageview('/indivs');
	$('#sponsor').remove();
	getIndivs();
	});
$(document).on('pagebeforeshow', '#gallery', function(){
	ga_storage._trackPageview('/gallery');
	getgallery();
	});
$(document).delegate('#mymap', 'pageshow', function(){
	ga_storage._trackPageview('/map');
	getmap();
	});
$(document).on('pagebeforeshow', '#clients2', function(){
	ga_storage._trackPageview('/clients2');
	$('#sponsor').remove();
	getCats2();
	});
$(document).on('pagebeforeshow', '#clients3', function(){
	ga_storage._trackPageview('/clients3');
	$('#sponsor').remove();
	getCats3();
	});
$(document).on('pagebeforeshow', '#clients4', function(){
	ga_storage._trackPageview('/clients4');
	$('#sponsor').remove();
	getCats4();
	});
$(document).on('pagebeforeshow', '#clients5', function(){
	ga_storage._trackPageview('/clients5');
	$('#sponsor').remove();
	getCats5();
	});
$(document).on('pagebeforeshow', '#clients6', function(){
	ga_storage._trackPageview('/clients6');
	$('#sponsor').remove();
	getCats6();
	});	
$(document).on('pagebeforeshow', '#clients7', function(){
	ga_storage._trackPageview('/clients7');
	$('#sponsor').remove();
	getCats7();
	});	
$(document).on('pagebeforeshow', '#more', function(){
	ga_storage._trackPageview('/more');
	getMore();
	});	
$(document).on('pagebeforeshow', '#articles', function(){
	ga_storage._trackPageview('/articles');
	getArticles();
	});	
$(document).on('pagebeforeshow', '#about', function(){
	ga_storage._trackPageview('/about');
	var img1 = new Image();
	img1.src = "img/loadinfo.gif";
	$("#syncmsg").html("");
	$(document).off('click', '#syncdb').on('click', '#syncdb', function(event){
		$("#syncmsg").html("OK...getting your data");
		var connectionStatus2 = false;
		connectionStatus2 = navigator.onLine ? 'online' : 'offline';
	if (connectionStatus2=="offline"){
		function alertDismissed() {
			$("#syncmsg").html("");
			$("#syncmsg").html("Please connect to the internet.");
			}

navigator.notification.alert(
    'You need to be connected!',
    alertDismissed,
    'Ooops!',
    'OK'
);
	}
		else {
			var img1 = new Image();
			img1.src = "img/loadinfo.gif";
			$.mobile.loading('show',{
				text: "Loading...",
				textVisible: true,
				theme: "a",
				textonly: false,
				html: "<br /><p style='text-align:center;'><img src='"+img1.src+"' /></p><br />Please wait a moment while we sync your app...<br />"
				});
			setTimeout(function(){
			runonce();
			}, 2000);
			}
	});
	});	
//////////////////////////////////////////////////////////////////////////////////////////	
function loading(showOrHide) {
    setTimeout(function(){
        $.mobile.loading(showOrHide);
    }, 1); 
}
//////////////////////////////////////////////////////////////////////////////////////////	
function fadingMsg (locMsg) {
    $("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h1>" + locMsg + "</h1></div>")
    .css({ "display": "block", "opacity": 0.9, "top": $(window).scrollTop() + 100 })
    .appendTo( 'body' )
    .delay( 2200 )
    .fadeOut( 1000, function(){
        $(this).remove();
   });
}
//////////////////////////////////////////////////////////////////////////////////////////	
function fadingMsg2 (locMsg) {
    $("<div class='ui-loader ui-overlay-shadow ui-body-a ui-corner-all'><h1>" + locMsg + "</h1></div>")
    .css({ "display": "block", "opacity": 0.9, "top": $(window).scrollTop() + 100 })
    .appendTo( 'body' )
    .delay( 2200 )
    .fadeOut( 1000, function(){
        $(this).remove();
   });
}
//////////////////////////////////////////////////////////////////////////////////////////	
function fadingMsg3 (locMsg) {
    $("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h1>" + locMsg + "</h1></div>")
    .css({ "display": "block", "opacity": 0.9, "top": $(window).scrollTop() + 400 })
    .appendTo( 'body' )
    .delay( 2200 )
    .fadeOut( 1000, function(){
        $(this).remove();
   });
}
//////////////////////////////////////////////////////////////////////////////////////////	
function getHome() {
	$('#sponsor').remove();
		$('#frontlist li').remove();
		window.localStorage.removeItem('article');
		window.localStorage.setItem('article', 'A NITTY GRITTY GUIDE');
		window.localStorage.setItem('frontcat', 'Front');
		}
//////////////////////////////////////////////////////////////////////////////////////////	
function getHome2() {
	window.localStorage.setItem('frontcat', 'Front');
	$('#frontlist li').remove();
	$("#sponsor").remove();
	window.localStorage.removeItem('article');
	window.localStorage.setItem('article', 'A NITTY GRITTY GUIDE');
	var frontcat=window.localStorage.getItem('frontcat');
	var newarticle = window.localStorage.getItem('article');
	if (window.openDatabase) {
		var Front=frontcat;
		var Fronta="%"+Front+"%";
		var Frontb=Front+"%";
		var Frontc="%"+Front;
		var newarticlea="%"+newarticle;
		var newarticleb=newarticle+"%";
		var newarticlec="%"+newarticle+"%";
		
		db = window.openDatabase("WOCYadvertisers", "1.0", "ads", 1000000);
		db.transaction(q);
		function q(tx) {
			tx.executeSql('SELECT * FROM ads WHERE name like ? or name like ? or name like ? or name like ?', [newarticle,newarticlea,newarticleb,newarticlec], querySuccessf);
			tx.executeSql('SELECT name,image,telephone,issponsor,sponsorcat,sponsorloc FROM ads WHERE issponsor=? and sponsorcat like ? or sponsorcat like ? or sponsorcat like ? or sponsorcat like ?', ["yes",Front,Fronta,Frontb,Frontc], queryDBsponsorSuccessx);
			}
		function querySuccessf(tx, result) {
		var len = result.rows.length;
        for (var i=0; i<len; i++){
			var resultJSON = result.rows.item(i).image;
			resultJSON = resultJSON.substr(0, resultJSON.length-1);
			resultJSON = resultJSON.substr(1);
			var result2 = $.parseJSON(resultJSON);
            $('#frontlist').append('<li><div>'+result.rows.item(i).name+'<br /><img src=\"file:///sdcard/Android/data/com.whatsoncyprus.wocy/db/admin/'+result2.name+'\" width=\"50%\" style=\"margin-left:25%; border:0px solid red;\"><br />'+result.rows.item(i).description+'<br /></div></li>').trigger('create');
			}//end of for
		
		if ( $('#frontlist').hasClass('ui-listview')) {
		$("#frontlist").listview('refresh');
		}
		else {
			$('#frontlist').trigger('create');
			}
				
		}			

function queryDBsponsorSuccessx(tx, result) {
		var active=$.mobile.activePage.attr('id');
		var len = result.rows.length;
		$.mobile.activePage.find('[data-role=content]').append('<div id="sponsor" data-role="content" data-url="sponsor"><ul id="sponsorbox" data-role="listview" data-filter="false" data-inset="true">').trigger('create');
        for (var i=0; i<len; i++){
			var obj = result.rows.item(i).sponsorloc;
			var obj2 = result.rows.item(i).sponsorcat;
			var resultJSON = result.rows.item(i).image;
			resultJSON = resultJSON.substr(0, resultJSON.length-1);
			resultJSON = resultJSON.substr(1);
			var result2 = window.JSON.parse(resultJSON);
			if (active=="home"){
				$.mobile.activePage.find('#sponsorbox').append('<li><a href="#'+result.rows.item(i).name+'" onclick=><img src="file:///sdcard/Android/data/com.whatsoncyprus.wocy/db/admin/'+result2.name+'"><h2>'+result.rows.item(i).name+'</h2><p>Sponsor</p><p class="ui-li-aside">'+result.rows.item(i).telephone+'</p></a></li>');
			}
			else{
				}
			
        }
		$.mobile.activePage.find('#sponsor').append('</ul></div>').trigger('create');
		if ( $('#sponsorbox').hasClass('ui-listview')) {
		$("#sponsorbox").listview('refresh');
		}
		else {
			$('#sponsorbox').trigger('create');
			}
		}
	
	$(document).off('click', '#sponsorbox li').on('click', '#sponsorbox li', function(event){
			var $this=$(event.currentTarget).find('h2').text();
			var client=$this;
			var newclient=window.localStorage.getItem('client');
			ga_storage._trackPageview('/client', ''+newclient+' list');
			window.localStorage.removeItem('client');
            window.localStorage.setItem('client', client);
			var newclient = window.localStorage.getItem('client');
			$.mobile.changePage("#indiv");
			});
			
	}
}
//////////////////////////////////////////////////////////////////////////////////////////	
function getsponsor() {
	$('#sponsor').remove();
	var active=$.mobile.activePage.attr('id');
	window.localStorage.setItem('active', active);
	var active1 = window.localStorage.getItem('active');
	window.localStorage.removeItem('localsponsorcat');
	window.localStorage.removeItem('localsponsorloc');
	var sponsorcat;
	if (window.localStorage.getItem('nextcategory')){
		sponsorcat = window.localStorage.getItem('nextcategory');
	}
	else {
		sponsorcat = window.localStorage.getItem('category');
	}
	var sponsorloc = window.localStorage.getItem('area');
	window.localStorage.setItem('localsponsorcat', sponsorcat);
	window.localStorage.setItem('localsponsorloc', sponsorloc);
	var newsponsorcat = window.localStorage.getItem('localsponsorcat');
	var newsponsorloc = window.localStorage.getItem('localsponsorloc');
	var newsponsorcat=$.trim(newsponsorcat);
	var newsponsorloc=$.trim(newsponsorloc);
	newsponsorloca="%,"+newsponsorloc+"%";
	newsponsorlocb=newsponsorloc+",%";
	newsponsorlocc="%,"+newsponsorloc;
	newsponsorcata="%,"+newsponsorcat+",%";
	newsponsorcatb=newsponsorcat+",%";
	newsponsorcatc="%,"+newsponsorcat;
	if (window.openDatabase) {
		db = window.openDatabase("WOCYadvertisers", "1.0", "ads", 1000000);
		db.transaction(queryDBsponsor);
		function queryDBsponsor(tx) {
		tx.executeSql('SELECT name,image,telephone,issponsor,sponsorcat,sponsorloc FROM ads WHERE issponsor=? and sponsorcat=? or sponsorcat like ? or sponsorcat like ? or sponsorcat like ?', ["yes",newsponsorcat,newsponsorcata,newsponsorcatb,newsponsorcatc], queryDBsponsorSuccess);
		}
		function queryDBsponsorError(err) {}
		function queryDBsponsorSuccess(tx, result) {
		var len = result.rows.length;
		$.mobile.activePage.find('[data-role=content]').append('<div id="sponsor" data-role="content" data-url="sponsor"><ul id="sponsorbox" data-role="listview" data-filter="false" data-inset="false">');
        for (var i=0; i<len; i++){
			var obj = result.rows.item(i).sponsorloc;
			var obj2 = result.rows.item(i).sponsorcat;
			var resultJSON = result.rows.item(i).image;
			resultJSON = resultJSON.substr(0, resultJSON.length-1);
			resultJSON = resultJSON.substr(1);
			var result2 = window.JSON.parse(resultJSON);
			var newsponsorcat1=result.rows.item(i).sponsorcat;
			newsponsorcat1=newsponsorcat1.replace(obj2, sponsorcat);
			var newsponsorcat = window.localStorage.getItem('localsponsorcat');
			var newsponsorloc1=result.rows.item(i).sponsorloc;
			newsponsorloc1=newsponsorloc1.replace(obj, sponsorloc);
			newsponsorloc = window.localStorage.getItem('area');
			if (newsponsorloc1==newsponsorloc&&newsponsorcat1==newsponsorcat&&active!="indiv"){
				$.mobile.activePage.find('#sponsorbox').append('<li><a href="#'+result.rows.item(i).name+'" onclick=><img src="file:///sdcard/Android/data/com.whatsoncyprus.wocy/db/admin/'+result2.name+'"><h2>'+result.rows.item(i).name+'</h2><p>'+newsponsorcat+' Sponsor</p><p class="ui-li-aside">'+result.rows.item(i).telephone+'</p></a></li>').trigger('create');
			}
			else{
				}
        }
		$.mobile.activePage.find('#sponsor').append('</ul></div>').trigger('create');
		if ( $('#sponsor').hasClass('ui-listview')) {
		$("#sponsor").listview('refresh');
		}
		else {
			$('#sponsor').trigger('create');
			}
		}
	
	$(document).off('click', '#sponsorbox li').on('click', '#sponsorbox li', function(event){
			var $this=$(event.currentTarget).find('h2').text();
			var client=$this;
			var newclient=window.localStorage.getItem('client');
			ga_storage._trackPageview('/client', ''+newclient+' list');
			window.localStorage.removeItem('client');
            window.localStorage.setItem('client', client);
			var newclient = window.localStorage.getItem('client');
			$.mobile.changePage("#indiv");
			});
	}	
}
//////////////////////////////////////////////////////////////////////////////////////////							
function getAreas() {
	$('#list li').remove();
	$("#Whereheader2").remove();
	$("#infolistareas li").remove();
	var area="";
	if (window.openDatabase) {
		db.transaction(queryDBa, errorCB);
		function queryDBa(tx) {
        tx.executeSql('SELECT * FROM areas ORDER BY name ASC', [], querySuccessa, errorCBareas);
		}
		function querySuccessa(tx, result) {
		var len = result.rows.length;
        for (var i=0; i<len; i++){
            $("#list").append("<li><a href='#' id='"+result.rows.item(i).name+"'><img src='img/"+result.rows.item(i).name+".jpg'><h2>"+result.rows.item(i).name+"</h2><p>What's On in "+result.rows.item(i).name+" </p><p class=\"ui-li-aside\">"+result.rows.item(i).name+"</p></a></li>").trigger('create');
			$("#infolistareas").append("<li><a href='#' id='"+result.rows.item(i).name+"'>"+result.rows.item(i).name+"</a></li>");
			window.localStorage.setItem(''+result.rows.item(i).name+'', result.rows.item(i).description);
        }
		
		if ( $('#list').hasClass('ui-listview')) {
		$("#list").listview('refresh');
		}
		else {
			$('#list').trigger('create');
			}
			if ( $('#infolistareas').hasClass('ui-listview')) {
				$("#infolistareas").listview('refresh');
				}
				else {
					$('#infolistareas').trigger('create');
					}
	 $('#Whereheader').append("<div id='Whereheader2' data-role='collapsible' data-mini='false' data-theme='a' class='ui-collapsible ui-collapsible-inset ui-corner-all ui-collapsible-collapsed'><h3 class='ui-collapsible-heading ui-collapsible-heading-collapsed'>An Alternative Angle on Cyprus</h3><ul data-role='listview' id='Wherelist'><li>Cyprus is set deep into the south easterly basin of the med. It\'s the third largest island and the gateway to the east. Even bigger than that, it could quite possibly be, the mountainous region of The Lost City of Atlantis. Can you imagine that?<br /><br />It\'s a democratic country, so you can choose to do almost anything you want here, and versatility is our specialty. It changes from the nightlife in Ayia Napa and dreamlike beaches of Protaras, through cosmopolitan Larnaca, even more so Limassol or inland to the sophisticated Nicosia, our divided capital. On through surreal mountain scenery in Troodos, down to Pafos for history in the present, extending up to the Akamas for pure tranquility, now tell me that\'s not versatile and I\'ll put you on the next flight home.<br /><br />Anyway, we reckon you\'ve chosen the right place to either visit or live, the later being a massive growing trend! Cyprus is the Island of the Gods. The mythological party playground of the Mediterranean, with a history dating back some 10,000 years to prove it, why else have just about every other Tom, Dick and Nation tried to conquer this wonderful rock? It\'s the best place in Europe, with the hottest weather, the finest sea, beautiful people, tantalizing restaurants, delectable wines, the best in Europe, and on that subject, an almost 24 hour licensing and a nightlife that really kicks ass.<br /><br />Don\'t panic, you adrenaline freaks, we\'ve even got some of the hottest, bungee jumping, skydiving, para jetting, off-road motor bike safari, paint balling, go karting, horse riding, water parks, kite surfing, scuba diving, windsurfing, water skiing, jet skiing, oh yes, and don\'t forget the traditionally hospitable locals who\'ll gladly give you a few wild rides? Hey! And that\'s just for those of you that want to party.<br /><br />There\'s sun loungers, boat trips, sun loungers, water sports, sun loungers, golf courses, sun loungers, and ultimate maniana, the Greek for tomorrow is \'avrion\', be warned! ...<br /><br />Are you getting the drift?<br /><br />Alternatively, for those looking for relaxed leisure, there\'s; cinemas, exhibitions, safaris, museums & archeological sites, theatres, sea & coarse fishing, ten-pin bowling, crown green bowling, a bird park, spas, health clubs, beauticians galore, one of the world\'s best tattooist and shopping in abundance. Crazy, but it really doesn\'t bear thinking about!<br /><br />And, you know ... Why we all live here? ... You can do it the sun shine, over 330 days a year! Yum!<br /><br />So ... Get ready to slap on the factor 20, otherwise known as a bandage, get ready to chill out to the max, get ready to put on a few pounds, get ready to pump some adrenalin, get ready to drop all those inhibitions, get ready to parrrrrrty!<br /><br />If it\'s your first time here, you\'re really very welcome; it\'s a special place, with a unique recognisable smell and an amazing home from home feeling that keeps people coming back again and again, until eventually, you move here! Ed.</li></ul><button class='closeme'>Close</button></div>").trigger('create');
	
		$(document).off('click', '#list li a').on('click', '#list li a', function(e){
		area= $(this).prop('id');
		ga_storage._trackPageview('/areas', ''+area+' list');
		if (!window.localStorage) {
				alert("no storage");
				}
            window.localStorage.setItem('area', area);
			$.mobile.changePage("#todo");
			});
		$(document).off('click', '#infolistareas li a').on('click', '#infolistareas li a', function(e){
		area= $(this).prop('id');
		if (!window.localStorage) {
				alert("no storage");
				}
            window.localStorage.setItem('area', area);
			$.mobile.changePage("#todo");
			});	
			}
		}
	else {
		var url="http://whatsoncyprus.info/db/areaconn.php";
		$.getJSON(url,function(json){
			$.each(json.areas,function(i,dat){
				$("#list").append("<li><a href=#"+dat.name+"><img src='img/"+dat.name+".jpg'><h2>"+dat.name+"</h2><p>All about "+dat.name+" </p><p class=\"ui-li-aside\">"+dat.name+"</p></a></li>");
				});
				$("#list").listview('refresh');
				$(document).off('click', '#list li a').on('click', '#list li', function(event){
				var $this = $(event.currentTarget).find('h2').text();
				var area=$this;
				if (!window.localStorage) {
						alert("no storage");
						}
			window.localStorage.removeItem('area');
            window.localStorage.setItem('area', JSON.stringify(area));
			$.mobile.changePage("#todo");
			});
			});
	
}

}
//////////////////////////////////////////////////////////////////////////////////////////
function getCats() {
	$('#llist li').remove();
	$("#todoheader2").remove();
		$('#todoinfotext li').remove();
		$('#todoinfopic div').remove();
	if (window.openDatabase) {
		db.transaction(queryDBc, errorCB);
		function queryDBc(tx) {
        tx.executeSql('SELECT * FROM category ORDER BY name ASC', [], querySuccessc, errorCBcats);
		}
		function querySuccessc(tx, result) {
		var len = result.rows.length;
        for (var i=0; i<len; i++){
            $("#llist").append("<li><a href='#' id='"+result.rows.item(i).name+"'><img src='img/"+result.rows.item(i).name+".jpg'><h2>" +result.rows.item(i).name+"</h2><p>"+result.rows.item(i).name+" </p><p class=\"ui-li-aside\">"+result.rows.item(i).name+"</p></a></li>").trigger('create');
			window.localStorage.setItem(''+result.rows.item(i).name+'', result.rows.item(i).description);
        }
		if ( $('#llist').hasClass('ui-listview')) {
		$("#llist").listview('refresh');
		}
		else {
			$('#llist').trigger('create');
			}
		var newarea = window.localStorage.getItem('area');
		var areadesc = window.localStorage.getItem(''+newarea+'');
		$('#todoheader').append("<div id='todoheader2' data-role='collapsible' data-mini='false' data-theme='a' class='ui-collapsible ui-collapsible-inset ui-corner-all ui-collapsible-collapsed'><h3 class='ui-collapsible-heading ui-collapsible-heading-collapsed'>An Alternative Angle on "+newarea+"</h3><ul id='todoinfotext' data-role='listview' data-filter='false' data-inset='false'><li>"+areadesc+"</li></ul><button class='closeme'>Close</button></div>").trigger('create');
		$("#todoinfotext").listview('refresh');
		$('#todo h1').text(newarea);
		$(document).off('click', '#llist li').on('click', '#llist li', function(event){
			var category=$(event.currentTarget).find('h2').text();
			if (!window.localStorage) {
				alert("no storage");
				}
			 window.localStorage.setItem('category', category);
			
switch (category) { 
    case 'Eating Out':
		$.mobile.changePage("#clients2");
		break;
    case 'Leisure and Pleasure':
		$.mobile.changePage("#clients3");
        break;
    case 'Shopping':
		$.mobile.changePage("#clients4");
        break;      
    case 'Accommodation':
		$.mobile.changePage("#clients5");
        break;
		default:
		window.localStorage.removeItem('nextcategory');
		$.mobile.changePage("#clients");
}
			
			});
			}
		}
	else {
		var url="http://whatsoncyprus.info/db/catconn.php";
		$.getJSON(url,function(json){
			$.each(json.cat,function(i,dat){
				$("#llist").append("<li><a href=#"+dat.name+"><img src='img/"+dat.name+".jpg'><h2>"+dat.name+"</h2><p>All about "+dat.name+" </p><p class=\"ui-li-aside\">"+dat.name+"</p></a></li>");
				});
				$("#llist").listview('refresh');
				var newarea = window.localStorage.getItem('area');
				 $('#todo h1').text("What to do in "+newarea);
				 $(document).off('click', '#llist li').on('click', '#llist li', function(event){
					 var $this=$(event.currentTarget).find('h2').text();
					 var stuff=$this;
			window.localStorage.removeItem('stuff');
			window.localStorage.setItem('stuff', JSON.stringify(stuff));
			$.mobile.changePage("#clients");
			});
			});
	
}
}
//////////////////////////////////////////////////////////////////////////////////////////
function getCats2() {
	$('#c2list li').remove();
	$('#catdes').remove();
	$('#sponsor').remove();
	var newcat = window.localStorage.getItem('category');
	var area = window.localStorage.getItem('area');
	var catdes = window.localStorage.getItem(newcat);
	if (window.openDatabase) {
		db.transaction(queryDBc, errorCB);
		function queryDBc(tx) {
        tx.executeSql('SELECT * FROM `'+newcat+'` ORDER BY name ASC', [], querySuccessc, errorCBcats);
		}
		function querySuccessc(tx, result) {
		var len = result.rows.length;
        for (var i=0; i<len; i++){
            $("#c2list").append("<li><a href='#' id='"+result.rows.item(i).name+"'><img src='img/"+result.rows.item(i).name+".jpg'><h2>" +result.rows.item(i).name+"</h2><p>"+result.rows.item(i).name+" </p><p class=\"ui-li-aside\">"+result.rows.item(i).name+"</p></a></li>");
        }
		getsponsor();
		$('#clientheader2').append('<div id=\"catdes\" data-role=\"collapsible\" data-mini=\"false\" data-theme=\"a\" class=\"ui-collapsible ui-collapsible-inset ui-corner-all ui-collapsible-collapsed\"><h3 class=\"ui-collapsible-heading ui-collapsible-heading-collapsed\">An Alternative Angle!</h3><ul data-role=\"listview\" id=\"catlist\"><li>'+catdes+'</li></ul><button class=\"closeme\">Close</button></div>').trigger('create');
		$("#c2list").listview('refresh');
		$('#clients2 h1').text(newcat+" in "+area);
		$(document).off('click', '#c2list li').on('click', '#c2list li', function(event){
			var nextcategory=$(event.currentTarget).find('h2').text();
			if (!window.localStorage) {
				alert("no storage");
				}
            window.localStorage.setItem('nextcategory', nextcategory);
			$.mobile.changePage("#clients");
			});
			}
		}
		}
//////////////////////////////////////////////////////////////////////////////////////////
function getCats3() {
	$('#c3list li').remove();
	$('#catdes').remove();
	$('#sponsor').remove();
	var newcat = window.localStorage.getItem('category');
	var area = window.localStorage.getItem('area');
	var catdes = window.localStorage.getItem(newcat);
	if (window.openDatabase) {
		db.transaction(queryDBc, errorCB);
		function queryDBc(tx) {
        tx.executeSql('SELECT * FROM `'+newcat+'` ORDER BY name ASC', [], querySuccessc, errorCBcats);
		}
		function querySuccessc(tx, result) {
		var len = result.rows.length;
        for (var i=0; i<len; i++){
            $("#c3list").append("<li><a href='#' id='"+result.rows.item(i).name+"'><img src='img/"+result.rows.item(i).name+".jpg'><h2>" +result.rows.item(i).name+"</h2><p>"+result.rows.item(i).name+" </p><p class=\"ui-li-aside\">"+result.rows.item(i).name+"</p></a></li>");
        }
		$('#clientheader3').append('<div id=\"catdes\" data-role=\"collapsible\" data-mini=\"false\" data-theme=\"a\" class=\"ui-collapsible ui-collapsible-inset ui-corner-all ui-collapsible-collapsed\"><h3 class=\"ui-collapsible-heading ui-collapsible-heading-collapsed\">An Alternative Angle!</h3><ul data-role=\"listview\" id=\"catlist\"><li>'+catdes+'</li></ul><button class=\"closeme\">Close</button></div>').trigger('create');
		$("#c3list").listview('refresh');
		getsponsor();
		$('#clients3 h1').text(newcat+" in "+area);
		$(document).off('click', '#c3list li').on('click', '#c3list li', function(event){
			var nextcategory=$(event.currentTarget).find('h2').text();
			if (!window.localStorage) {
				alert("no storage");
				}
            window.localStorage.setItem('nextcategory', nextcategory);
	switch (nextcategory) { 
    case 'Sports':
		$.mobile.changePage("#clients7");
        break;
    default:
		$.mobile.changePage("#clients");
}
			});
			}
		}
	
}
//////////////////////////////////////////////////////////////////////////////////////////
function getCats4() {
	$('#c4list li').remove();
	$('#catdes').remove();
	$('#sponsor').remove();
	var newcat = window.localStorage.getItem('category');
	var area = window.localStorage.getItem('area')
	var catdes = window.localStorage.getItem(newcat);
	if (window.openDatabase) {
		db.transaction(queryDBc, errorCB);
		function queryDBc(tx) {
        tx.executeSql('SELECT * FROM `'+newcat+'` ORDER BY name ASC', [], querySuccessc, errorCBcats);
		}
		function querySuccessc(tx, result) {
		var len = result.rows.length;
        for (var i=0; i<len; i++){
            $("#c4list").append("<li><a href='#' id='"+result.rows.item(i).name+"'><img src='img/"+result.rows.item(i).name+".jpg'><h2>" +result.rows.item(i).name+"</h2><p>"+result.rows.item(i).name+" </p><p class=\"ui-li-aside\">"+result.rows.item(i).name+"</p></a></li>");
        }
		$('#clientheader4').append('<div id=\"catdes\" data-role=\"collapsible\" data-mini=\"false\" data-theme=\"a\" class=\"ui-collapsible ui-collapsible-inset ui-corner-all ui-collapsible-collapsed\"><h3 class=\"ui-collapsible-heading ui-collapsible-heading-collapsed\">An Alternative Angle!</h3><ul data-role=\"listview\" id=\"catlist\"><li>'+catdes+'</li></ul><button class=\"closeme\">Close</button></div>').trigger('create');
		$("#c4list").listview('refresh');
		getsponsor();
		$('#clients4 h1').text(newcat+" in "+area);
		$(document).off('click', '#c4list li').on('click', '#c4list li', function(event){
			var nextcategory=$(event.currentTarget).find('h2').text();
			if (!window.localStorage) {
				alert("no storage");
				}
            window.localStorage.setItem('nextcategory', nextcategory);
			$.mobile.changePage("#clients");
			});
			}
		}
	
}
//////////////////////////////////////////////////////////////////////////////////////////
function getCats5() {
	$('#c5list li').remove();
	$('#catdes').remove();
	$('#sponsor').remove();
	var newcat = window.localStorage.getItem('category');
	var area = window.localStorage.getItem('area');
	var catdes = window.localStorage.getItem(newcat);
	if (window.openDatabase) {
		db.transaction(queryDBc, errorCB);
		function queryDBc(tx) {
        tx.executeSql('SELECT * FROM `'+newcat+'` ORDER BY name ASC', [], querySuccessc, errorCBcats);
		}
		function querySuccessc(tx, result) {
		var len = result.rows.length;
        for (var i=0; i<len; i++){
            $("#c5list").append("<li><a href='#' id='"+result.rows.item(i).name+"'><img src='img/"+result.rows.item(i).name+".jpg'><h2>" +result.rows.item(i).name+"</h2><p>"+result.rows.item(i).name+" </p><p class=\"ui-li-aside\">"+result.rows.item(i).name+"</p></a></li>");
        }
		$('#clientheader5').append('<div id=\"catdes\" data-role=\"collapsible\" data-mini=\"false\" data-theme=\"a\" class=\"ui-collapsible ui-collapsible-inset ui-corner-all ui-collapsible-collapsed\"><h3 class=\"ui-collapsible-heading ui-collapsible-heading-collapsed\">An Alternative Angle!</h3><ul data-role=\"listview\" id=\"catlist\"><li>'+catdes+'</li></ul><button class=\"closeme\">Close</button></div>').trigger('create');
		$("#c5list").listview('refresh');
		getsponsor();
		$('#clients5 h1').text(newcat+" in "+area);
		$(document).off('click', '#c5list li').on('click', '#c5list li', function(event){
			var nextcategory=$(event.currentTarget).find('h2').text();
			if (!window.localStorage) {
				alert("no storage");
				}
            window.localStorage.setItem('nextcategory', nextcategory);
			$.mobile.changePage("#clients");
			});
			}
		}
	
}
//////////////////////////////////////////////////////////////////////////////////////////
function getCats6() {
	$('#c6list li').remove();
	$('#sponsor').remove();
	var newcat = window.localStorage.getItem('category');
	var area = window.localStorage.getItem('area')
	if (window.openDatabase) {
		db.transaction(queryDBc, errorCB);
		function queryDBc(tx) {
        tx.executeSql('SELECT * FROM `'+newcat+'` ORDER BY name ASC', [], querySuccessc, errorCBcats);
		}
		function querySuccessc(tx, result) {
		var len = result.rows.length;
        for (var i=0; i<len; i++){
            $("#c6list").append("<li><a href='#' id='"+result.rows.item(i).name+"'><img src='img/"+result.rows.item(i).name+".jpg'><h2>" +result.rows.item(i).name+"</h2><p>"+result.rows.item(i).name+" </p><p class=\"ui-li-aside\">"+result.rows.item(i).name+"</p></a></li>");
        }
		$("#c6list").listview('refresh');
		getsponsor();
		$('#clients6 h1').text(newcat+" in "+area);
		$(document).off('click', '#c6list li').on('click', '#c6list li', function(event){
			var nextcategory=$(event.currentTarget).find('h2').text();
			if (!window.localStorage) {
				alert("no storage");
				}
            window.localStorage.setItem('nextcategory', nextcategory);
			$.mobile.changePage("#clients");
			});
			}
		}
	
}
//////////////////////////////////////////////////////////////////////////////////////////
function getCats7() {
	$('#c7list li').remove();
	$('#sponsor').remove();
	var newcat = window.localStorage.getItem('nextcategory');
	var area = window.localStorage.getItem('area')
	if (window.openDatabase) {
		db.transaction(queryDBc, errorCB);
		function queryDBc(tx) {
        tx.executeSql('SELECT * FROM `'+newcat+'` ORDER BY name ASC', [], querySuccessc, errorCBcats);
		}
		function querySuccessc(tx, result) {
		var len = result.rows.length;
        for (var i=0; i<len; i++){
            $("#c7list").append("<li><a href='#' id='"+result.rows.item(i).name+"'><img src='img/"+result.rows.item(i).name+".jpg'><h2>" +result.rows.item(i).name+"</h2><p>"+result.rows.item(i).name+" </p><p class=\"ui-li-aside\">"+result.rows.item(i).name+"</p></a></li>");
        }
		$("#c7list").listview('refresh');
		getsponsor();
		$('#clients7 h1').text(newcat+" in "+area);
		$(document).off('click', '#c7list li').on('click', '#c7list li', function(event){
			var anextcategory=$(event.currentTarget).find('h2').text();
			if (!window.localStorage) {
				alert("no storage");
				}
			window.localStorage.setItem('anextcategory', anextcategory);
			$.mobile.changePage("#clients");
			});
			}
		}
	
}
//////////////////////////////////////////////////////////////////////////////////////////
function getClients() {
	$('#clist li').remove();
	$('#catdes').remove();
	window.localStorage.removeItem('localsponsorcat');
	window.localStorage.removeItem('localsponsorloc');
		var area  = window.localStorage.getItem('area');
		if (window.localStorage.getItem('nextcategory')){
			var categ  = window.localStorage.getItem('nextcategory');
			}
			else{
		var categ  = window.localStorage.getItem('category');
			}
		var area=$.trim(area);
		var categ=$.trim(categ);
		var catdes = window.localStorage.getItem(categ);
		var newarea = window.localStorage.getItem('area');
		var newareaa="%,"+newarea;
		var newareab="%,"+newarea+",%";
		var newareac=newarea+",%";
		var newaread="%"+newarea+"%";
		var catega="%,"+categ;
		var categb=categ+",%";
		var categc="%,"+categ+",%";
		var categd="%"+categ+"%";
		if (window.localStorage.getItem('anextcategory')){
			var tit  = window.localStorage.getItem('anextcategory');
			window.localStorage.removeItem('anextcategory');
			$('#clients h1').text(tit+' in '+area);
		}
		else{
		$('#clients h1').text(categ+' in '+area);
		}
		if (window.openDatabase) {
			db.transaction(queryDBcl, errorCB);
			function queryDBcl(tx) {
				tx.executeSql('SELECT * FROM ads WHERE category like ? and area like ? ORDER BY name ASC', [categd,newaread], querySuccesscl, errorCBclients);
				}
		function querySuccesscl(tx, result) {
		var len = result.rows.length;
		for (var i=0; i<len; i++){
			var resultJSON = result.rows.item(i).image;
			resultJSON = resultJSON.substr(0, resultJSON.length-1);
			resultJSON = resultJSON.substr(1);
			var result2 = window.JSON.parse(resultJSON);
            $("#clist").append('<li><a href="#'+result.rows.item(i).name+'"><img src="file:///sdcard/Android/data/com.whatsoncyprus.wocy/db/admin/'+result2.name+'"><h2>'+result.rows.item(i).name+'</h2><p>'+result.rows.item(i).category+'</p><p class=\"ui-li-aside\">'+result.rows.item(i).telephone+'</p></a></li>');
			}
		if (window.localStorage.getItem('nextcategory')){
			$('#catdes').remove();
		}
		else{
		$('#clientheader').append('<div id=\"catdes\" data-role=\"collapsible\" data-mini=\"false\" data-theme=\"a\" class=\"ui-collapsible ui-collapsible-inset ui-corner-all ui-collapsible-collapsed\"><h3 class=\"ui-collapsible-heading ui-collapsible-heading-collapsed\">An Alternative Angle!</h3><ul data-role=\"listview\" id=\"catlist\"><li>'+catdes+'</li></ul><button class=\"closeme\">Close</button></div>').trigger('create');
		}
		$("#clist").listview('refresh');
		getsponsor();
		$(document).off('click', '#clist li').on('click', '#clist li', function(event){
			var $this=$(event.currentTarget).find('h2').text();
			var client=$this;
			var newclient=window.localStorage.getItem('client');
			ga_storage._trackPageview('/client', ''+newclient+' list');
			if (!window.localStorage) {
				alert("no storage");
				}
			window.localStorage.removeItem('client');
            window.localStorage.setItem('client', client);
			var newclient = window.localStorage.getItem('client');
			$.mobile.changePage("#indiv");
			});
		}
		}
	else {
		var url="http://whatsoncyprus.info/db/adsconn.php?a="+area+"&c="+categ+"";
		$.getJSON(url,function(json){
			$.each(json.ads,function(i,dat){
				$("#clist").append("<li><a href=#"+dat.name+ ">" +dat.name+ "</a></li>");
				});
					  $("#clist").listview('refresh');
					  $(document).off('click', '#clist li').on('click', '#clist li', function(event){
						  var $this=$(event.currentTarget).find('h2').text();
						  var client=$this;
			window.localStorage.removeItem('client');
            window.localStorage.setItem('client', JSON.stringify(client));
			var newclient = JSON.parse(window.localStorage.getItem('client'));
			$.mobile.changePage("#indiv");
					 });
                });
}
}
//////////////////////////////////////////////////////////////////////////////////////////
function getIndivs() {
	$('#sponsor').remove();
	window.localStorage.removeItem('localsponsorcat');
	window.localStorage.removeItem('localsponsorloc');
	$('#ilist li').remove();
	$('#iilist li').remove();
	var newclient = window.localStorage.getItem('client');
	var newclient=$.trim(newclient);
	ga_storage._trackPageview('/indiv', ''+newclient+' page');
		if (window.openDatabase) {
			db.transaction(queryDBnewcl);
			function queryDBnewcl(tx) {
				tx.executeSql('SELECT * FROM ads WHERE name=?', [newclient], querySuccessnewcl, errorCBindivs);
				}
		function querySuccessnewcl(tx, result) {
		var len = result.rows.length;
		for (var i=0; i<len; i++){
			if (result.rows.item(i).email) {
				var email='<a href=\"mailto:'+result.rows.item(i).email+'\" target=\"_blank\"><img src=\"img/email.png\" style=\"vertical-align:middle;\"></a>&nbsp;';} else {email='';}
			if (result.rows.item(i).telephone) {
				var tel='<a href=tel:'+result.rows.item(i).telephone+'><img src=\"img/tel.png\" style=\"vertical-align:middle;\"></a>&nbsp;';} else {tel='';}
			if (result.rows.item(i).web) {
				var web='<a href=\"http://'+result.rows.item(i).web+'\" target=\"_blank\"><img src=\"img/web.png\" style=\"vertical-align:middle;\"></a>&nbsp;';} else {web='';}
			if (result.rows.item(i).facebook) {
				var facebook='<a href=\"http://'+result.rows.item(i).facebook+'\" target=\"_blank\"><img src=\"img/fb.png\" style=\"vertical-align:middle;\"></a>&nbsp;';} else {facebook='';}
				if (result.rows.item(i).twitter) {
				var twitter='<a href=\"http://'+result.rows.item(i).twitter+'\" target=\"_blank\"><img src=\"img/tw.png\" style=\"vertical-align:middle;\"></a>&nbsp;';} else {twitter='';}
				if (result.rows.item(i).google) {
				var google='<a href=\"http://'+result.rows.item(i).google+'\" target=\"_blank\"><img src=\"img/g.png\" style=\"vertical-align:middle;\"></a>&nbsp;';} else {google='';}
				if (result.rows.item(i).linkedin) {
				var linkedin='<a href=\"http://'+result.rows.item(i).linkedin+'\" target=\"_blank\"><img src=\"img/li.png\" style=\"vertical-align:middle;\"></a>&nbsp;';} else {linkedin='';}
			var ilat = result.rows.item(i).lat;
			var ilon = result.rows.item(i).lon;
			var oID=result.rows.item(i).id;
			var gID=result.rows.item(i).galleryid;
			var resultJSON = result.rows.item(i).image;
			resultJSON = resultJSON.substr(0, resultJSON.length-1);
			resultJSON = resultJSON.substr(1);
			var result2 = $.parseJSON(resultJSON);
			$('#ilist').append('<li><div>'+result.rows.item(i).name+'<br />'+result.rows.item(i).category+' - '+result.rows.item(i).area+'<br /><br /><div align=\"center\"><img src=\"file:///sdcard/Android/data/com.whatsoncyprus.wocy/db/admin/'+result2.name+'\" width=\"50%\" style=\"margin:0px; border:0px solid pink; padding:0px;\"></div><br /><br />'+result.rows.item(i).description+'<br />'+tel+' '+email+' '+web+' '+facebook+' '+twitter+' '+google+' '+linkedin+' <br /><br /></div></li>').trigger('create');
		var connectionStatus3 = false;
		var visited =  window.localStorage.getItem('visited');
		connectionStatus3 = navigator.onLine ? 'online' : 'offline';
	if (connectionStatus3=="offline"){
	$('#iilist').append('<li>In order to view the galleries and maps, please connect to the internet and try again</li>');
	}
	else{
		if (!gID){
		}
		else $('#iilist').append('<li><div><button data-id="g'+result.rows.item(i).id+'" data-inset="false" data-transition="none" data-role="button"  class="fnbuttons" data-icon="search" data-iconpos="right">Gallery</button></div></li>');
		if (!ilat){
		}
		else $('#iilist').append('<li><div><button data-id="d'+result.rows.item(i).id+'" data-transition="none" data-role="button" data-icon="arrow-r" data-iconpos="right" class="fnbuttons">Directions</button></div></li>');
		}
        }
		$('#ilist').listview('refresh');
		if ( $('#iilist').hasClass('ui-listview')) {
		$("#iilist").listview('refresh');
		}
		else {
    $('#iilist').trigger('create');
     }
	 $("#iilist a").each(function(index) {
		 $("#iilist a").attr("onclick", "loadURL('" + this.href + "')");
		 $("#iilist a").removeAttr("href");
		 });
		 $('#indiv h1').text(newclient);
		$('#iilist li .fnbuttons').button(); // initialize button 
		$('#iilist li .fnbuttons').button('refresh');
		$('#sponsor').remove();
		$(document).off('click', '#iilist li [data-id]').on('click', '#iilist li [data-id]', function(event){
		var $this = $(this).data('id');
		var cID = $this;
		var cID=$.trim(cID);
		if (cID=="g"+oID) {
			window.localStorage.removeItem('galleryid');
            window.localStorage.setItem('galleryid', gID);
			$.mobile.changePage("#gallery");
		}
		if (cID=="d"+oID) {
			var latlon = (ilat+','+ilon);
			window.localStorage.removeItem('latlon');
            window.localStorage.setItem('latlon', latlon);
			$.mobile.changePage("#mymap");
		}
		});
		}
		}
	else {
		var url="http://whatsoncyprus.info/db/clconn.php?n="+newclient+"";
		$.getJSON(url,function(json){
			$.each(json.ads,function(i,dat){$('#ilist').append('<div><h2>' +dat.name+'</h2><br /><br />'+dat.category+' near '+dat.area+'<br /><br />'+dat.image+'<br /><br />'+dat.description+'<br /><br /><img src=\"img/tel.png\">'+dat.telephone+'<br /><br />'+dat.email+'<br /><br />'+dat.web+'<br />'+dat.facebook+'<br />'+dat.twitter+'<br />'+dat.image+'<br />'+dat.galleryid+'</a></div>');
                     });
					 $("#ilist").listview('refresh');
					 });
}
$('#sponsor').remove();
}
//////////////////////////////////////////////////////////////////////////////////////////
function getgallery() {
	//var myPhotoSwipe = $("#Gallery a").photoSwipe({ enableMouseWheel: false , enableKeyboard: false });
	$('#loadedimage li').remove();
	var storedgallery = window.localStorage.getItem('galleryid');
	storedgallery = $.trim(storedgallery);
	var newstoredgallery = window.localStorage.getItem('storedgallery'+storedgallery+'');
	var connectionStatus = false;
	connectionStatus = navigator.onLine ? 'online' : 'offline';
	if (connectionStatus=="offline" && "storedgallery"+storedgallery==newstoredgallery) {
		getStoredImages();
	}
	if (connectionStatus=="online" && "storedgallery"+storedgallery==newstoredgallery) {
		getStoredImages();
	}
	
	function getStoredImages() {
		$('#loadedimage li').remove();
		var DATADIR;
		var knownfiles = [];
		$('#loadedimage1').html("Checking your offline cache....");
		window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, offlineFSSuccess, null);
		
	function offlineFSSuccess(fileSystem) {
		fileSystem.root.getDirectory('Android/data/com.whatsoncyprus.wocy/db/admin/gallery/'+storedgallery+'',{},gotofflineDir,onError);
	}
				
	function gotofflineDir(d){
		DATADIR = d;
		var reader = DATADIR.createReader();
		reader.readEntries(function(d){
			gotofflineFiles(d);
			},onError);
	}
	
	function gotofflineFiles(entries) {
	for (var i=0; i<entries.length; i++) {
			knownfiles.push(entries[i].name);
			renderofflinePicture(entries[i].fullPath);
			$("#loadedimage1").html("");
	}
	}
	
	function renderofflinePicture(path){
		$("#loadedimage").append('<li><a href="'+path+'" rel="external"><img src="'+path+'"></a></li>').trigger('create');
		}
	
	}
	
	if (connectionStatus=="online" && "storedgallery"+storedgallery!=newstoredgallery){
		var DATADIR;
		var knownfiles = [];
		$('#loadedimage1').html("Checking your local cache....");
		window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFSSuccess, null);
function onFSSuccess(fileSystem) {
	fileSystem.root.getDirectory("Android/data/com.whatsoncyprus.wocy",{create:true},gotDir,onError);
}

function gotDir(d){
    DATADIR = d;
	var reader = DATADIR.createReader();
    reader.readEntries(function(d){
        gotFiles(d);
        appReady();
    },onError);
}

function gotFiles(entries) {
for (var i=0; i<entries.length; i++) {
        knownfiles.push(entries[i].name);
		getStoredImages();
}
}

function renderPicture(path){
	$("#loadedimage").append('<li><a href="'+path+'" rel="external"><img src="'+path+'"></a></li>').trigger('create');
	$("ul.gallery a").photoSwipe(
            {
                allowUserZoom: true,
                jQueryMobile: false,
                autoStartSlideshow: false,
                backButtonHideEnabled: false,
                captionAndToolbarAutoHideDelay: 0,
                preventSlideshow: false
            });
}


function onError(e){
}
function onErrorDL(e){
}



function appReady(){
    $("#loadedimage1").html("Ready to check remote files...");
    $.get("http://www.whatsoncyprus.info/db/getpics.php?g="+storedgallery+"", {}, function(res) {
        if (res.length > 0) {
            $("#loadedimage1").html("Going to sync some images...");
            for (var i = 0; i < res.length; i++) {
                if (knownfiles.indexOf(res[i]) == -1) {
                    var ft = new FileTransfer();
					var dlPath = DATADIR.fullPath + "/" + res[i];
					ft.download("http://www.whatsoncyprus.info/"+ escape(res[i])+"", dlPath,function(e){renderPicture(e.fullPath);
					}, onErrorDL);
				}
            }
		}
		$("#loadedimage1").html("");
		window.localStorage.removeItem('storedgallery'+storedgallery+'');
		window.localStorage.setItem('storedgallery'+storedgallery+'', 'storedgallery'+storedgallery);
		}, "json");
		}
}
	
	
}
//////////////////////////////////////////////////////////////////////////////////////////
function getmap() {
	var directionsDisplay = new google.maps.DirectionsRenderer();
	var directionsService = new google.maps.DirectionsService();
	var targetDestination = window.localStorage.getItem('latlon');
	var targetDestination = $.trim(targetDestination);
	$('#map_canvas_1').gmap('destroy');
	$("#instructions-content").empty();
	$('#map_canvas_1').gmap({'center': targetDestination}).bind('init', function(evt, map) {
	$('#map_canvas_1').gmap('getCurrentPosition', function(position, status) {
		if (status === 'OK') {
			fadingMsg3('Got you.');
			var clientPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			$('#map_canvas_1').gmap('option', 'center', clientPosition);
			$('#map_canvas_1').gmap('option', 'zoom', 16);
			$('#map_canvas_1').gmap('addMarker', {position: clientPosition,bounds: false});
			$('#map_canvas_1').gmap('option', 'mapTypeId', google.maps.MapTypeId.ROADMAP);
			
		$(document).off('click', '#directions-button').on('click', '#directions-button', function(event){
			fadingMsg('Just getting the directions for you...');
			directionsDisplay.setMap(map);
						if (clientPosition && clientPosition != '' && targetDestination && targetDestination != ''){
							var selectedMode = document.getElementById('mode').value;
							var request = {
								origin:clientPosition, 
								destination:targetDestination,
								travelMode: google.maps.TravelMode[selectedMode]
							};
							
	
							directionsService.route(request, function(response, status) {
								if (status == google.maps.DirectionsStatus.OK) {
									directionsDisplay.setPanel(document.getElementById("instructions-content"));
									directionsDisplay.setDirections(response);
									var myRoute = response.routes[0].legs[0];
									for (var i = 0; i < myRoute.steps.length; i++) {
									}
								}
							});
						  
						}
						else
						{
						
						}
	
				});
		}
	});
	});
}
//////////////////////////////////////////////////////////////////////////////////////////
function getMore() {
		$('#morelist li').remove();
		if (window.openDatabase) {
		db.transaction(queryDBc, errorCB);
		function queryDBc(tx) {
		tx.executeSql('SELECT * FROM `more` ORDER BY name ASC', [], querySuccessc, errorCBcats);
		}
		function querySuccessc(tx, result) {
		var len = result.rows.length;
        for (var i=0; i<len; i++){
            $("#morelist").append("<li><a href='#' id='"+result.rows.item(i).name+"'><img src='img/"+result.rows.item(i).name+".jpg'><h2>" +result.rows.item(i).name+"</h2><p>"+result.rows.item(i).name+" </p><p class=\"ui-li-aside\">"+result.rows.item(i).name+"</p></a></li>");
        }
		$("#morelist").listview('refresh');
		$('#more h1').text("More Stuff");
		$(document).off('click', '#morelist li').on('click', '#morelist li', function(event){
			var newarticle=$(event.currentTarget).find('h2').text();
			if (!window.localStorage) {
				alert("no storage");
				}
            window.localStorage.setItem('article', newarticle);
			$.mobile.changePage("#articles");
			});
			}
		}
	
}
//////////////////////////////////////////////////////////////////////////////////////////
function getArticles() {
		$('#articlelist li').remove();
	var newarticle = window.localStorage.getItem('article');
	if (window.openDatabase) {
		db.transaction(queryDBc, errorCB);
		function queryDBc(tx) {
		tx.executeSql('SELECT * FROM `ads` where editorial=? and category=? ORDER BY name ASC', ['yes',newarticle], querySuccessc, errorCBcats);
		}
		function querySuccessc(tx, result) {
		var len = result.rows.length;
        for (var i=0; i<len; i++){
			var resultJSON = result.rows.item(i).image;
			resultJSON = resultJSON.substr(0, resultJSON.length-1);
			resultJSON = resultJSON.substr(1);
			var result2 = $.parseJSON(resultJSON);
            $('#articlelist').append('<li><div>'+result.rows.item(i).name+'<br /><img src=\"file:///sdcard/Android/data/com.whatsoncyprus.wocy/db/admin/'+result2.name+'\" width=\"50%\" style=\"margin:10px; border:0px solid red;\"><br />'+result.rows.item(i).description+'<br /></div></li>').trigger('create');
        var gID=result.rows.item(i).galleryid;
		var galleryid=window.localStorage.setItem('newgalleryid'+gID, gID);
		var oID=result.rows.item(i).id;
		var connectionStatus4 = false;
		var visited =  window.localStorage.getItem('visited');
		connectionStatus4 = navigator.onLine ? 'online' : 'offline';
		if(gID){
		if (connectionStatus4=="offline"){
			$('#articlelist').append('<li>In order to view the galleries and maps, please connect to the internet and try again</li>');
			}
			else{
				$('#articlelist').append('<li><div><button data-id=\"'+result.rows.item(i).id+'\" data-inset=\"false\" data-transition=\"none\" data-role=\"button\"  class=\"fnbuttons\" data-icon=\"search\" data-iconpos=\"right\">Gallery</button></div></li>').trigger('create');
				}
			}
		}
		if ( $('#articlelist').hasClass('ui-listview')) {
		$("#articlelist").listview('refresh');
		}
		else {
			$('#articlelist').trigger('create');
			}
		
		$(document).off('click', '#articlelist li [data-id]').on('click', '#articlelist li [data-id]', function(event){
					var $this = $(this).data('id');
					var cID = $this;
					var cID=$.trim(cID);
					var newg=window.localStorage.getItem('newgalleryid'+cID);
					if (cID==newg) {
						window.localStorage.removeItem('galleryid');
						window.localStorage.setItem('galleryid', cID);
						$.mobile.changePage("#gallery");
						}
						});
		}				
		
		}
	
}
//////////////////////////////////////////////////////////////////////////////////////////
function getAll() {
	$('#infolistwho li').remove();
	if (window.openDatabase) {
			db.transaction(queryDBall);
			function queryDBall(tx) {
				tx.executeSql('SELECT * FROM ads WHERE editorial=? ORDER BY name ASC', ['no'], querySuccessall, errorCBindivs);
				}
			function querySuccessall(tx, result) {
		var len = result.rows.length;
		for (var i=0; i<len; i++){
			$('#infolistwho').append("<li><a href='#' id='"+result.rows.item(i).name+"'>"+result.rows.item(i).name+"</a><p>"+result.rows.item(i).area+"</p></li>");
		}
		if ( $('#infolistwho').hasClass('ui-listview')) {
		$("#infolistwho").listview('refresh');
		}
		else {
    $('#infolistwho').trigger('create');
     }
		$(document).off('click', '#infolistwho li a').on('click', '#infolistwho li a', function(e){
		client= $(this).prop('id');
		window.localStorage.setItem('client', client);
			$.mobile.changePage("#indiv");
			});
	}
}
}
//////////////////////////////////////////////////////////////////////////////////////////
function getImg() {
	
var DATADIR;
var knownfiles2 = [];
window.requestFileSystem(LocalFileSystem.PERSISTENT, 1024 * 1024, onFSSuccessi, null); 
function onFSSuccessi(fileSystem) {
    fileSystem.root.getDirectory("Android/data/com.whatsoncyprus.wocy",{create:true},gotDir2,onError2);
}

function gotDir2(d){
    DATADIR = d;
    var reader = DATADIR.createReader();
    reader.readEntries(function(d){
        gotFiles2(d);
        appReady2();
    },onError3);
}

function gotFiles2(entries) {
for (var i=0; i<entries.length; i++) {
        knownfiles2.push(entries[i].name);
        renderPicture2(entries[i].fullPath);
}
}

function renderPicture2(path){
}

function onError2(e){
}
function onError3(e){
}
function onErrorDL(e){
}

function appReady2(){
	$.get("http://www.whatsoncyprus.info/db/getimg.php", {}, function(res) {
        if (res.length > 0) {
            for (var i = 0; i < res.length; i++) {
            if (knownfiles2.indexOf(res[i]) == -1) {
			var ft = new FileTransfer();
			var dlPath2 = DATADIR.fullPath + "/" + res[i];
			if (device.platform === "Android" && dlPath2.indexOf("file://") === 0) {
			dlPath2 = dlPath2.substring(7);
			}
			ft.download("http://www.whatsoncyprus.info/"+ escape(res[i])+"", dlPath2,function(e){renderPicture2(e.fullPath);
			}, onErrorDL);
			}
			}
			}
			}, "json");
			}

}
//////////////////////////////////////////////////////////////////////////////////////////
function loadURL(url) {
	navigator.app.loadUrl(url, { openExternal:true });
	}
//////////////////////////////////////////////////////////////////////////////////////////
function errorCBareas(err) {
    }
	function errorCBcats(err) {
    }	
	function errorCBclients(err) {
    }
	function errorCBindivs(err) {
    }								
//////////////////////////////////////////////////////////////////////////////////////////	
function checkConnection() {
		var visited =  window.localStorage.getItem('visited');
		visited = $.trim(visited);
		var connectionStatus = false;
		connectionStatus = navigator.onLine ? 'online' : 'offline';
		if (connectionStatus=="online" && visited==1) {
			uselocalStorage();
		}
		else if (connectionStatus=="online" && visited!==1) {
			$("#status").html( "As this is your first time using this app we will now download everything and store it for you.");
			runonce();
			}
		
		else if (connectionStatus=="offline" && visited==1) {
			uselocalStorage();
			}
		
		else if (connectionStatus=="offline" && visited!==1) {
			alert("Oops it looks like you have no data stored, you need to connect to the internet");
			}
		}
//////////////////////////////////////////////////////////////////////////////////////////
function populateDB(tx) {
	var output='NULL';
	tx.executeSql('DROP TABLE IF EXISTS [ads]');
	tx.executeSql('CREATE TABLE IF NOT EXISTS [ads] (id, lastModified, name, telephone, email, facebook, twitter, google, linkedin, web, description, image, galleryid, area, category, morestuff, lat, lon, deleted, issponsor, sponsorcat, sponsorloc,editorial)');
		
		$.ajax({
		url: 'http://whatsoncyprus.info/db/syncconn.php',
		dataType: "json",
		async:false,
		error:function(error){
		output.text('There was an error loading the data.');
		navigator.notification.confirm(
					'Something went wrong. Would you like to retry?',
					yourCallback,
					'Error',
					'No,Yes'
				);
		},
		success:function(data) {
			$.each(data.sync, function(i,dat){
				db.transaction(function(tx){
					tx.executeSql("INSERT OR REPLACE INTO [ads] (id, lastModified, name, telephone, email, facebook, twitter, google, linkedin, web, description, image, galleryid, area, category, morestuff, lat, lon, deleted, issponsor, sponsorcat, sponsorloc,editorial) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ", [dat.id, dat.lastModified, dat.name, dat.telephone, dat.email, dat.facebook, dat.twitter, dat.google, dat.linkedin, dat.web, dat.description, dat.image, dat.galleryid, dat.area, dat.category, dat.morestuff, dat.lat, dat.lon, dat.deleted, dat.issponsor, dat.sponsorcat, dat.sponsorloc, dat.editorial]);
											});
										});
										var output = $('#loading').text('Loading your data...');
									}
								});
							
		tx.executeSql('DROP TABLE IF EXISTS [areas]');
		tx.executeSql('CREATE TABLE IF NOT EXISTS [areas] (id, name, image, description)');
		
		$.ajax({
		url: 'http://whatsoncyprus.info/db/areaconn.php',
		dataType: "json",
		async:false,
		error:function(error){
		output.text('There was an error loading the data.');
		navigator.notification.confirm(
					'Something went wrong. Would you like to retry?',
					yourCallback,
					'Error',
					'No,Yes'
				);
		},
		success:function(data) {
			$.each(data.areas, function(i,dat){
				db.transaction(function(tx){
					tx.executeSql("INSERT OR REPLACE INTO [areas] (id, name, image, description) VALUES (?,?,?,?) ", [dat.id, dat.name, dat.image, dat.description]);
											});
										});
										var output = $('#loading1').text('Loading areas...');
									}
								});
						
		tx.executeSql('DROP TABLE IF EXISTS [category]');
		tx.executeSql('CREATE TABLE IF NOT EXISTS [category] (id, name, description)');
		
		$.ajax({
		url: 'http://whatsoncyprus.info/db/catconn.php',
		dataType: "json",
		async:false,
		error:function(error){
		output.text('There was an error loading the data.');
		navigator.notification.confirm(
					'Something went wrong. Would you like to retry?',
					yourCallback,
					'Error',
					'No,Yes'
				);
		},
		success:function(data) {
			$.each(data.cat, function(i,dat){
				db.transaction(function(tx){
					tx.executeSql("INSERT OR REPLACE INTO [category] (id, name, description) VALUES (?,?,?) ", [dat.id, dat.name , dat.description]);
											});
										});
										var output = $('#loading2').text('Loading main categories...');
									}
								});
						
		tx.executeSql('DROP TABLE IF EXISTS [Eating Out]');
		tx.executeSql('CREATE TABLE IF NOT EXISTS [Eating Out] (id, name)');
		
		$.ajax({
		url: 'http://whatsoncyprus.info/db/eatconn.php',
		dataType: "json",
		async:false,
		error:function(error){
		output.text('There was an error loading the data.');
		navigator.notification.confirm(
					'Something went wrong. Would you like to retry?',
					yourCallback,
					'Error',
					'No,Yes'
				);
		},
		success:function(data) {
			$.each(data.eat, function(i,dat){
				db.transaction(function(tx){
					tx.executeSql("INSERT OR REPLACE INTO [Eating Out] (id, name) VALUES (?,?) ", [dat.id, dat.name]);
											});
										});
										var output = $('#loading2').text('Loading Eating Out categories...');
									}
								});
						
		tx.executeSql('DROP TABLE IF EXISTS [Leisure and Pleasure]');
		tx.executeSql('CREATE TABLE IF NOT EXISTS [Leisure and Pleasure] (id, name)');
		
		$.ajax({
		url: 'http://whatsoncyprus.info/db/leisureconn.php',
		dataType: "json",
		async:false,
		error:function(error){
		output.text('There was an error loading the data.');
		navigator.notification.confirm(
					'Something went wrong. Would you like to retry?',
					yourCallback,
					'Error',
					'No,Yes'
				);
		},
		success:function(data) {
			$.each(data.leisure, function(i,dat){
				db.transaction(function(tx){
					tx.executeSql("INSERT OR REPLACE INTO [Leisure and Pleasure] (id, name) VALUES (?,?) ", [dat.id, dat.name]);
											});
										});
										var output = $('#loading4').text('Loading Leisure and Pleasure categories...');
									}
								});
						
		tx.executeSql('DROP TABLE IF EXISTS [Shopping]');
		tx.executeSql('CREATE TABLE IF NOT EXISTS [Shopping] (id, name)');
		
		$.ajax({
		url: 'http://whatsoncyprus.info/db/shoppingconn.php',
		dataType: "json",
		async:false,
		error:function(error){
		output.text('There was an error loading the data.');
		navigator.notification.confirm(
					'Something went wrong. Would you like to retry?',
					yourCallback,
					'Error',
					'No,Yes'
				);
		},
		success:function(data) {
			$.each(data.shopping, function(i,dat){
				db.transaction(function(tx){
					tx.executeSql("INSERT OR REPLACE INTO [Shopping] (id, name) VALUES (?,?) ", [dat.id, dat.name]);
											});
										});
										var output = $('#loading5').text('Loading Shopping categories...');
									}
								});
						
		tx.executeSql('DROP TABLE IF EXISTS [Accommodation]');
		tx.executeSql('CREATE TABLE IF NOT EXISTS [Accommodation] (id, name)');
		
		$.ajax({
		url: 'http://whatsoncyprus.info/db/accomconn.php',
		dataType: "json",
		async:false,
		error:function(error){
		output.text('There was an error loading the data.');
		navigator.notification.confirm(
					'Something went wrong. Would you like to retry?',
					yourCallback,
					'Error',
					'No,Yes'
				);
		},
		success:function(data) {
			$.each(data.accom, function(i,dat){
				db.transaction(function(tx){
					tx.executeSql("INSERT OR REPLACE INTO [Accommodation] (id, name) VALUES (?,?) ", [dat.id, dat.name]);
											});
										});
										var output = $('#loading6').text('Loading Accommodation categories...');
									}
								});
						
		tx.executeSql('DROP TABLE IF EXISTS [More]');
		tx.executeSql('CREATE TABLE IF NOT EXISTS [More] (id, name)');
		
		$.ajax({
		url: 'http://whatsoncyprus.info/db/moreconn.php',
		dataType: "json",
		async:false,
		error:function(error){
		output.text('There was an error loading the data.');
		navigator.notification.confirm(
					'Something went wrong. Would you like to retry?',
					yourCallback,
					'Error',
					'No,Yes'
				);
		},
		success:function(data) {
			$.each(data.more, function(i,dat){
				db.transaction(function(tx){
					tx.executeSql("INSERT OR REPLACE INTO [More] (id, name) VALUES (?,?) ", [dat.id, dat.name]);
											}); 
										});
										var output = $('#loading7').text('Loading More categories...');
									}
								});
						
		tx.executeSql('DROP TABLE IF EXISTS [articles]');
		tx.executeSql('CREATE TABLE IF NOT EXISTS [articles] (id, name, description, image)');
		
		$.ajax({
		url: 'http://whatsoncyprus.info/db/articlesconn.php',
		dataType: "json",
		async:false,
		error:function(error){
		output.text('There was an error loading the data.');
		navigator.notification.confirm(
					'Something went wrong. Would you like to retry?',
					yourCallback,
					'Error',
					'No,Yes'
				);
		},
		success:function(data) {
			$.each(data.articles, function(i,dat){
				db.transaction(function(tx){
					tx.executeSql("INSERT OR REPLACE INTO [articles] (id, name, description, image) VALUES (?,?,?,?) ", [dat.id, dat.name, dat.description, dat.image]);
											});
										});
										var output = $('#loading8').text('Loading articles categories...');
									}
								});
						
		tx.executeSql('DROP TABLE IF EXISTS [sports]');
		tx.executeSql('CREATE TABLE IF NOT EXISTS [sports] (id, name)');
		
		$.ajax({
		url: 'http://whatsoncyprus.info/db/sportsconn.php',
		dataType: "json",
		async:false,
		error:function(error){
		output.text('There was an error loading the data.');
		navigator.notification.confirm(
					'Something went wrong. Would you like to retry?',
					yourCallback,
					'Error',
					'No,Yes'
				);
		},
		success:function(data) {
			$.each(data.sports, function(i,dat){
				db.transaction(function(tx){
					tx.executeSql("INSERT OR REPLACE INTO [sports] (id, name) VALUES (?,?) ", [dat.id, dat.name]);
											});
										});
										var output = $('#loading9').text('Loading sports categories...');
									}
								});
						
	
	}
//////////////////////////////////////////////////////////////////////////////////////////	
    function queryDB(tx) {
        tx.executeSql('SELECT * FROM [ads]', [], querySuccess);
    }
	function queryDB1(tx) {
        tx.executeSql('SELECT * FROM [areas]', [], querySuccess1);
    }
	function queryDB2(tx) {
        tx.executeSql('SELECT * FROM [category]', [], querySuccess2);
    }
	function queryDB3(tx) {
        tx.executeSql('SELECT * FROM [Eating Out]', [], querySuccess3);
    }
	function queryDB4(tx) {
        tx.executeSql('SELECT * FROM [Leisure and Pleasure]', [], querySuccess4);
    }
	function queryDB5(tx) {
        tx.executeSql('SELECT * FROM [Shopping]', [], querySuccess5);
    }
	function queryDB6(tx) {
        tx.executeSql('SELECT * FROM [Accommodation]', [], querySuccess6);
    }
	function queryDB7(tx) {
        tx.executeSql('SELECT * FROM [More]', [], querySuccess7);
    }
	function queryDB8(tx) {
        tx.executeSql('SELECT * FROM [articles]', [], querySuccess8);
    }
	function queryDB9(tx) {
        tx.executeSql('SELECT * FROM [sports]', [], querySuccess9);
    }
//////////////////////////////////////////////////////////////////////////////////////////	
    function querySuccess(tx, result) {
		var len = result.rows.length;
        for (var i=0; i<len; i++){
            }
	}
	
	    function querySuccess1(tx, result) {
		var len = result.rows.length;
        for (var i=0; i<len; i++){
            }
    }
	    
		function querySuccess2(tx, result) {
		var len = result.rows.length;
        for (var i=0; i<len; i++){
            }
    }
	
		function querySuccess3(tx, result) {
		var len = result.rows.length;
        for (var i=0; i<len; i++){
            }
    }
	
		function querySuccess4(tx, result) {
		var len = result.rows.length;
        for (var i=0; i<len; i++){
            }
    }
	
		function querySuccess5(tx, result) {
		var len = result.rows.length;
        for (var i=0; i<len; i++){
            }
    }
		
		function querySuccess6(tx, result) {
		var len = result.rows.length;
        for (var i=0; i<len; i++){
            }
    }
		
		function querySuccess7(tx, result) {
		var len = result.rows.length;
        for (var i=0; i<len; i++){
            }
		}
	
		function querySuccess8(tx, result) {
		var len = result.rows.length;
        for (var i=0; i<len; i++){
			}
		}
		
		function querySuccess9(tx, result) {
		var len = result.rows.length;
        for (var i=0; i<len; i++){
            }
		window.localStorage.setItem('visited',1);
		var visited =  window.localStorage.getItem('visited');
		getHome2();
		$.mobile.loading('hide');
		$('#status').text('All Done...');
		$('#letsgo').show();
		$('#introdiv').show();
		$('#loading').hide();
		$('#loading1').hide();
		$('#loading2').hide();
		$('#loading3').hide();
		$('#loading4').hide();
		$('#loading5').hide();
		$('#loading6').hide();
		$('#loading7').hide();
		$('#loading8').hide();
		$('#loading9').hide();
		$("#syncmsg").html("All done...");
	}
//////////////////////////////////////////////////////////////////////////////////////////	
    function errorCB(err) {
    }
	function errorCB1(err) {
}
	function errorCB2(err) {
}
	function errorCBr(err) {
}
	function errorCBs(err) {
}
    
//////////////////////////////////////////////////////////////////////////////////////////	
    function successCB() {
    	db.transaction(queryDB, errorCBs);
		db.transaction(queryDB1, errorCBs);
		db.transaction(queryDB2, errorCBs);
		db.transaction(queryDB3, errorCBs);
		db.transaction(queryDB4, errorCBs);
		db.transaction(queryDB5, errorCBs);
		db.transaction(queryDB6, errorCBs);
		db.transaction(queryDB7, errorCBs);
		db.transaction(queryDB8, errorCBs);
		db.transaction(queryDB9, errorCBs);
	}
//////////////////////////////////////////////////////////////////////////////////////////	
	function runonce() {
		db = window.openDatabase("WOCYadvertisers", "1.0", "ads", 1000000);
		$('#status').text('Just downloading your data...');
		fadingMsg2('Checking for new images, this could take a little while, hold tight!');
		getImg();
		db.transaction(populateDB, errorCBr, successCB);
		}
	
	function uselocalStorage() {
		$('#letsgo').show();
		$('#status').text('');
		db = window.openDatabase("WOCYadvertisers", "1.0", "ads", 1000000);
		db.transaction(queryDB, errorCBs, successCB);
	}
	
	function onDeviceReady() {
		$.mobile.defaultPageTransition = 'slide';
		var model=device.model;
		var platform=device.platform;
		var version=device.version;
		var locSuccess;
		var locError;
		$('#introdiv').hide();
		checkConnection();
    }