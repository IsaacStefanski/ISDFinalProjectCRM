//script.js
$(document).ready(function(e){
	
	$("#updateForm").hide();
	$("#newMembershipCreated").hide();
	$("#membershipUpdated").hide();
	$("#newSessionScheduled").hide();
	$("#newClassAdded").hide();
	
	$("#financialRptBtn").hover(function(e){
		$("#adminReq").fadeOut().fadeIn();
	});
	
	$("#employeeRptBtn").hover(function(e){
		$("#adminReq").fadeOut().fadeIn();
	});
	
	var idSpan = $("#memberIDspan");
	var newID = Math.floor(Math.random() * 10000) + 1;
	Cookie.setCookie("newID", newID);
	idSpan.html(Cookie.getCookie("newID"));
	
	$("#enteredMemberIDForm").submit(function(e){
		e.preventDefault();
		Cookie.setCookie("idNum", $("#idNumIn").val());
		$("#enteredMemberID").html(Cookie.getCookie("idNum"));
		$("#enterID").hide();
		$("#updateForm").show();
	});
	
	$("#submitNewMembershipBtn").click(function(e){
		Cookie.setCookie("id", Cookie.getCookie("newID"));
		Cookie.setCookie("type", $("input[name='membershipType']:checked").val());
		Cookie.setCookie("fname", $("#fname").val());
		Cookie.setCookie("lname", $("#lname").val());
		Cookie.setCookie("email", $("#email").val());
		Cookie.setCookie("address", $("#address").val());
		Cookie.setCookie("city", $("#city").val());
		Cookie.setCookie("state", $("#state").val());
		Cookie.setCookie("zip", $("#zip").val());
		Cookie.setCookie("payment", $("input[name='paymentType']:checked").val());
		
		$("#createdMemberID").html(Cookie.getCookie("id"));
		$("#createdMembershipType").html(Cookie.getCookie("type"));
		$("#createdMembershipName").html(Cookie.getCookie("fname") + " " + Cookie.getCookie("lname"));
		$("#createdMembershipEmail").html(Cookie.getCookie("email"));
		$("#createdMembershipAddress").html(Cookie.getCookie("address"));
		$("#createdMembershipCity").html(Cookie.getCookie("city"));
		$("#createdMembershipState").html(Cookie.getCookie("state"));
		$("#createdMembershipZip").html(Cookie.getCookie("zip"));
		$("#createdMembershipPayment").html(Cookie.getCookie("payment"));
		
		$("#formDiv").hide();
		$("#newMembershipCreated").show();
	});
	
	$("#updateExistingMembershipBtn").click(function(e){
		Cookie.setCookie("updid", $("#enteredMemberID").html());
		Cookie.setCookie("updtype", $("input[name='updMembershipType']:checked").val());
		Cookie.setCookie("updfname", $("#updFname").val());
		Cookie.setCookie("updlname", $("#updLname").val());
		Cookie.setCookie("updemail", $("#updEmail").val());
		Cookie.setCookie("updaddress", $("#updAddress").val());
		Cookie.setCookie("updcity", $("#updCity").val());
		Cookie.setCookie("updstate", $("#updState").val());
		Cookie.setCookie("updzip", $("#updZip").val());
		Cookie.setCookie("updpayment", $("#updPaymentType").val());
		Cookie.setCookie("updwork", $("#updWork").val());
		Cookie.setCookie("updcoID", $("#updCompanyID").val());
		
		$("#updatedMemberID").html(Cookie.getCookie("updid"));
		$("#updatedMembershipType").html(Cookie.getCookie("updtype"));
		$("#updatedMembershipName").html(Cookie.getCookie("updfname") + " " + Cookie.getCookie("updlname"));
		$("#updatedMembershipEmail").html(Cookie.getCookie("updemail"));
		$("#updatedMembershipAddress").html(Cookie.getCookie("updaddress"));
		$("#updatedMembershipCity").html(Cookie.getCookie("updcity"));
		$("#updatedMembershipState").html(Cookie.getCookie("updstate"));
		$("#updatedMembershipZip").html(Cookie.getCookie("updzip"));
		$("#updatedMembershipPayment").html(Cookie.getCookie("updpayment"));
		$("#updatedMembershipWork").html(Cookie.getCookie("updcoID") + " " + Cookie.getCookie("updwork"));
				
		$("#updateForm").hide();
		$("#membershipUpdated").show();
	});
	
	$("#schedulePTBtn").click(function(e){
		Cookie.setCookie("trainerName", $("#tName").val());
		Cookie.setCookie("triainerID", $("#tID").val());
		Cookie.setCookie("ptMemberName", $("#mName").val());
		Cookie.setCookie("ptMemberID", $("#mID").val());
		Cookie.setCookie("ptDate", $("#ptDate").val());
		Cookie.setCookie("ptTime", $("#ptTime").val());
		
		$("#ptMemberName").html(Cookie.getCookie("ptMemberID") + " " + Cookie.getCookie("ptMemberName"));
		$("#ptTrainerName").html(Cookie.getCookie("triainerID") + " " + Cookie.getCookie("trainerName"));
		$("#ptScheduledDate").html(Cookie.getCookie("ptDate"));
		$("#ptScheduledTime").html(Cookie.getCookie("ptTime"));
		
		$("#ptFormDiv").hide();
		$("#newSessionScheduled").show();
	});
	
	$("#addClassBtn").click(function(e){
		Cookie.setCookie("instructorName", $("#instructorName").val());
		Cookie.setCookie("instructorID", $("#instructorID").val());
		Cookie.setCookie("className", $("#cName").val());
		Cookie.setCookie("room", $("#room").val());
		Cookie.setCookie("classDate", $("#cDate").val());
		Cookie.setCookie("classTime", $("#cTime").val());
		
		$("#className").html(Cookie.getCookie("className"));
		$("#instName").html(Cookie.getCookie("instructorID") + " " + Cookie.getCookie("instructorName"));		
		$("#classDate").html(Cookie.getCookie("classDate"));
		$("#roomNum").html(Cookie.getCookie("room"));
		$("#classTime").html(Cookie.getCookie("classTime"));
		
		$("#addClassFormDiv").hide();
		$("#newClassAdded").show();
	});
});