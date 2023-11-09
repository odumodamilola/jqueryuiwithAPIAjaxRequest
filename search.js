const tags = [
  "html",
  "css",
  "bootstrap",
  "javascript",
  "php",
  "laravel",
  "api",
];

$("#search").autocomplete({ source: tags });
function looper() {
let html = "test";
    $.each(tags, (i, val) => {
        html += `<span>${val}</span> -`;
    })
    $(".output").html(html);
}
