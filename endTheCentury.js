// Recursively change that shit
function stripFont(tags) {

  Array.prototype.forEach.call(tags, function(ele) {
    // Check if there are children
    if (ele.children.length > 0){
      var children = ele.children;

      for (var i = 0; i < children.length; i++) {
        // fallback font
        children[i].style.fontFamily = "sans-serif";
        // change to helvetica etc
        children[i].style.fontFamily = "helvetica";
        children[i].style.fontSize = "11pt";
        children[i].style.lineHeight = "1.45em";
      }

      // Recursive call on sub elements
      stripFont(children);
    }

    // Base case, if no children found we're done
    else {return}
  })
}

// First get the ps
var ps = document.getElementsByTagName('p');
stripFont(ps);

// Then get the lists
var lists = document.getElementsByTagName('li');
stripFont(lists);
