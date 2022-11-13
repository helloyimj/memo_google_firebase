



var db = firebase.database();
var ref = null;

var ins = {
	content: "테스트"
};
db.ref("root/tests").on("child_added", onAdd);
db.ref("root/tests").on("child_removed", onRev);
function onAdd(data){
	var html = `
	<li id="${data.key}">
	<span>${data.val().content}</span>
	<i class="fas fa-window-close" onclick="dataRev(this);"></i>
	</li>`;
	$(".conts").prepend(html);
}
function onRev(data) {
	$("#"+data.key).remove();
}

$("#bt_save").on("click", function(){
	db.ref("root/tests").push({
		content: $("#content").val()
	}).key;
	$("#content").val('');
	});
	
	function dataRev(obj) {
	var key = $(obj).parent().attr("id");
	db.ref("root/tests/"+key).remove();
	
	}

