// Creates a element and appends to parent with content and className
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

// Show popup with title and content
export function showPopupModal(title, content) {
  $(".modal").modal("show");
  $(".modal-title").text(title);
  $(".modal-body p").text(content);

  $('.close, .btn-secondary[data-dismiss="modal"]').click(function () {
    $(".modal").modal("hide");
  });
}

// Create news card and append to parent
export function createNewsCard(
  $parentSelector,
  title,
  description,
  imageUrl,
  articleUrl
) {
  const placeholderImage = "https://placehold.co/300x200";
  if (imageUrl == "None") {
    imageUrl = placeholderImage;
  }

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
