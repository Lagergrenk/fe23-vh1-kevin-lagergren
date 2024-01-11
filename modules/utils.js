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
  $(".modal-title").text(title);
  $(".modal-body p").text(content);
  $(".modal").modal("show");

  $('.close, .btn-secondary[data-dismiss="modal"]').click(function () {
    $(".modal").modal("hide");
  });
}
