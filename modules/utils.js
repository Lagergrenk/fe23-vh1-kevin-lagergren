export function createElementAndAppendToParent(
  $parent,
  element,
  content,
  className
) {
  let $element;

  if (element === "img") {
    $element = $("<img>").attr("src", content);
  } else {
    $element = $(`<${element}>`).text(content);
  }

  if (className) {
    $element.addClass(className);
  }

  $parent.append($element);
}

export function createPopup(title, content) {
  $(".modal").modal("show");
  $(".modal-title").text(title);
  $(".modal-body p").text(content);

  $('.close, .btn-secondary[data-dismiss="modal"]').click(function () {
    $(".modal").modal("hide");
  });
}

export function createNewsCard(
  $parentSelector,
  title,
  description,
  imageUrl,
  articleUrl
) {
  const $card = $("<div>").addClass("card news-card");
  const $img = $("<img>")
    .addClass("card-img-top news-image")
    .attr("src", imageUrl)
    .attr("alt", title);
  const $cardBody = $("<div>").addClass("card-body");
  const $title = $("<h5>").addClass("card-title news-title").text(title);
  const $description = $("<p>")
    .addClass("card-text news-description")
    .text(description);
  const $link = $("<a>")
    .addClass("btn btn-primary news-link")
    .attr("href", articleUrl)
    .text("Read More");

  $cardBody.append($title, $description, $link);
  $card.append($img, $cardBody);
  $parentSelector.append($card);
}
