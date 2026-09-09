export default function decorate(block) {
  const textContent = block.querySelector(':scope > .cb-text-content');
  const imageContent = block.querySelector(':scope > .cb-image-content');

  if (!textContent || !imageContent) return;

  const content = document.createElement('div');
  content.className = 'experience-content-block-layout';
  content.append(textContent, imageContent);

  block.replaceChildren(content);
}