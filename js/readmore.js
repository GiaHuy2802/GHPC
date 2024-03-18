document.getElementById("read-more").addEventListener("click", function(event){
  event.preventDefault(); // Prevent default link behavior
  var leftDesc = document.querySelector(".left_desc");
  leftDesc.style.display = "block"; // Show the description
  document.getElementById("read-more").style.display = "none"; // Hide read more link
  document.getElementById("read-less").style.display = "inline"; // Show read less link

  // Show spans
  var spans = leftDesc.querySelectorAll("span");
  spans.forEach(function(span) {
    span.style.display = "inline-block";
  });

  // Show table
  var table = leftDesc.querySelector("table");
  table.style.display = "table";

  // Reset max-height for .col_mid p.desc_row.active
  var activeDesc = document.querySelector(".col_mid p.desc_row.active");
  activeDesc.style.maxHeight = "unset";
});

document.getElementById("read-less").addEventListener("click", function(event){
  event.preventDefault(); // Prevent default link behavior
  var leftDesc = document.querySelector(".left_desc");
  leftDesc.style.display = "none"; // Hide the description
  document.getElementById("read-more").style.display = "inline"; // Show read more link
  document.getElementById("read-less").style.display = "none"; // Hide read less link

  // Set max-height for .col_mid p.desc_row.active when hiding description
  var activeDesc = document.querySelector(".col_mid p.desc_row.active");
  activeDesc.style.maxHeight = "100px"; // Set to your desired max height
});
