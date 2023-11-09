const tags = [];

$("#search").autocomplete({ source: tags, minLenght: 3 });

const url = "https://api.randomuser.me/";
const results = "?results=100";
$("#search").keyup(() => {
  console.log("test");
  $.ajax({
    url: url + results,
    dataType: "json",
    success: (data) => {
      // console.log(data.results);
      //   looper(data.results);
      $.each(data.results, (i, val) => {
        // console.log(val.name.first);
        const first = val.name.first;
        if ($.inArray(first, tags) == -1) {
          tags.push(first);
          $(".output").append(first + '');
        } else {
            console.log(first)
        }
      });
    },
  });
});

function looper(data) {
  let html = "test";
  $.each(tags, (i, val) => {
    html += `<span>${val}</span> -`;
  });
  $(".output").html(html);
}
