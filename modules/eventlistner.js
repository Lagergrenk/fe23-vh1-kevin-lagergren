export function searchButtonClicked(input) {
  $("form").submit(function (event) {
    event.preventDefault();
    let searchInput = $("#searchInput").val();
    console.log(searchInput);
  });
}
