export function createElementAndAppendToParent($parent, element, text) {
  const $element = $(`<${element}>`).text(text);
  $parent.append($element);
}
