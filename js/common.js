// Initialize select function alias for Foundation.utils.S selector
var select;
select = Foundation.utils.S;

var deferreds = {
  "navbar": new $.Deferred,
  "footer": new $.Deferred
}

// Load html files and resolve their respective deferred object
console.log("Loading navbar.html...");
$("#navbar").load("navbar.html", function() {
  console.log("Loaded navbar.html");
  deferreds["navbar"].resolve();
})

console.log("Loading footer.html...");
$("#footer").load("footer.html", function() {
  console.log("Loaded footer.html");
  deferreds["footer"].resolve();
})

// Initialize the page after all the files are loaded (all the deferred objects are resolved)
$.when.apply(null, $.map(deferreds, function(value, index) {return value;}) )
.then(function() {
  console.log('Initializing Foundation...');
  $(document).foundation();
  console.log('Initialized Foundation.');
});