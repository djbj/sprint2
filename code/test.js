var boxes = document.querySelectorAll('.imagebox');
for (var i = 0; i < boxes.length; i++){
	var box = boxes[i];
	box.addEventListener("click", function(){
	this.classList.add("open");
});
}



document.links.forEach = Array.prototype.forEach;
document.links.forEach(function (element) {
  const today = new Date()
  if (element.id < today.getDate()) {
    element.href = '#';
  }
});
