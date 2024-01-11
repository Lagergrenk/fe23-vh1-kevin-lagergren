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
