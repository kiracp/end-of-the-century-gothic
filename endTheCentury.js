// Change that shit
function changeFonts(tags) {

  Array.prototype.forEach.call(tags, function(ele) {
    var children = ele.children;

    for (var i = 0; i < children.length; i++) {
      // fallback font
      children[i].style.fontFamily = "sans-serif";
      // change to helvetica etc
      children[i].style.fontFamily = "helvetica";
      children[i].style.fontSize = "11pt";
      children[i].style.lineHeight = "1.45em";
    }
  })
}

// First get the ps
var ps = document.getElementsByTagName('p');
changeFonts(ps);

// Then get the lists
var lists = document.getElementsByTagName('li');
changeFonts(lists);

// Are there more?