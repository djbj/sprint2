document.links.forEach = Array.prototype.forEach;
document.links.forEach(function (element) {
  const today = new Date()
  // if (element.id < today.getDate()) {
  if (element.id < 1) {
    element.href = '#';
  }
});



elem
