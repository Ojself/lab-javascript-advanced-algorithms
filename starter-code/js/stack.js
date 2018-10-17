var stackAdd = $("#add-stack");
var stackRemover = $("#take-stack");
var app = new StackDataStructure();

stackAdd.click(function() {
  var item = $("#input-stack");
  if (item.val() !== "") {
    app.push(item.val());
    updateStacks();
    item.val("");
    $("#s-underflow").addClass("invisible");
  }
  if (app.canPush() == false) {
    $("#s-overflow").removeClass("invisible");
  } else {
    $("#s-overflow").addClass("invisible");
  }
});

stackRemover.click(function() {
  app.pop();
  updateStacks();
  $("#s-overflow").addClass("invisible");
  if (app.isEmpty() == true) {
    $("#s-underflow").removeClass("invisible");
  } else {
    $("#s-underflow").addClass("invisible");
  }
});

function updateStacks() {
  for (var i = 0; i < 8; i++) {
    if (i >= app.stackControl.length) {
      $("#s-" + (i + 1)).html(" ");
    } else {
      $("#s-" + (i + 1)).html(app.stackControl[i]);
    }

    if ($("#s-" + (i + 1)).html() !== " ") {
      $("#s-" + (i + 1)).addClass("active");
    } else {
      $("#s-" + (i + 1)).removeClass("active");
      $("#s-" + (i + 1)).html(" ");
    }
  }
}
