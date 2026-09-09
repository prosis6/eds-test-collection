export default function decorate(block) {
  const textContent = block.querySelector(':scope > .cb-text-content');
  const imageContent = block.querySelector(':scope > .cb-image-content');

  if (!textContent || !imageContent) return;

  const layout = document.createElement('div');
  layout.className = 'experience-content-block-layout';
  layout.append(textContent, imageContent);
  block.replaceChildren(layout);
}