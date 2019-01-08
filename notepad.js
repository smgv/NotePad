<input type="text" name="list" id="notes"> 
<button type="submit" class="add">Add</button><br><br>
<input type="text" name="list" id="notes1"> 
<button type="submit" class="add1">search</button><br><br>

<h4 class="a"> Added Notes: </h4>
<ul class="outputs"></ul><br>
<h4 class="s" >Searched Item:</h4>
<ul class="outputs1"></ul>

<script>
var list = document.querySelector(".outputs");
var list1 = document.querySelector(".outputs1");
var note = document.getElementById("notes");
var note1 = document.getElementById("notes1");
var btn = document.querySelector(".add");
var btn1 = document.querySelector(".add1");
var addH = document.querySelector(".a");
var seaH = document.querySelector(".s");

addH.style.display = "none";
seaH.style.display = "none";

list.innerHTML = '';
list1.innerHTML = '';

var body = [];


btn.onclick = function(){
if(note.value !== ''){
	body.unshift(note.value);
	
list.innerHTML = '';    
    
for(var i=0; i<body.length; i++){
	var listItem = body[i];
    var lists = document.createElement("li");
    lists.textContent = listItem;
    addH.style.display = "block";
    list.appendChild(lists);
}
	note.value = '';
    note.focus();
}
}

btn1.onclick = function(){
if(note1.value !== ''){
 var listItem = body.filter(myFunc);
 
 function myFunc(value){
 	return value === note1.value;
 }
 
 for(var i=0; i<listItem.length; i++){
 list1.innerHTML = '';  
	var listItem1 = listItem[i];
    var lists = document.createElement("li");
    lists.textContent = listItem1;
    seaH.style.display = "block";
    list1.appendChild(lists);
}
	note1.value = '';
    note1.focus();
}
}

</script>
