var queAdd = $("#add-queue");
var queRem = $("#take-queue");
var appQ = new QueueDataStructure();

queAdd.click(function() {
  var item = $("#input-queue");
  if (item.val() !== "") {
    appQ.enqueue(item.val());
    updatequeues();
    item.val("");
    $("#q-underflow").addClass("invisible");
  }
  if (appQ.canEnqueue() == false) {
    $("#q-overflow").removeClass("invisible");
  } else {
    $("#q-overflow").addClass("invisible");
  }
});

queRem.click(function() {
  appQ.dequeue();
  updatequeues();
  $("#q-overflow").addClass("invisible");
  if (appQ.isEmpty() == true) {
    $("#q-underflow").removeClass("invisible");
  } else {
    $("#q-underflow").addClass("invisible");
  }
});

function updatequeues() {
  for (var i = 0; i < 8; i++) {
    if (i >= appQ.queueControl.length) {
      $("#q-" + (i + 1)).html(" ");
    } else {
      $("#q-" + (i + 1)).html(appQ.queueControl[i]);
    }

    if ($("#q-" + (i + 1)).html() !== " ") {
      $("#q-" + (i + 1)).addClass("active");
    } else {
      $("#q-" + (i + 1)).removeClass("active");
      $("#q-" + (i + 1)).html(" ");
    }
  }
}
