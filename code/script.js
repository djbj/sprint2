document.links.forEach = Array.prototype.forEach;
document.links.forEach(function (element) {
  const today = new Date()
  if (element.id < today.getDate()) {
    element.href = '#';
  }
});
