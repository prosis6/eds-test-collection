export default function decorate(block) {
  const rows = [...block.children];
  const layout = document.createElement('div');
  layout.className = 'experience-showcase-layout';

  rows.forEach((row) => {
    const [imageCell, headingCell, descriptionCell] = [...row.children];
    const section = document.createElement('section');
    if (imageCell?.innerHTML.trim()) section.insertAdjacentHTML('beforeend', imageCell.innerHTML);
    const content = document.createElement('div');
    const heading = headingCell?.textContent.trim();
    if (heading) content.insertAdjacentHTML('beforeend', `<h2>${heading}</h2>`);
    if (descriptionCell?.innerHTML.trim()) content.insertAdjacentHTML('beforeend', `<p>${descriptionCell.innerHTML}</p>`);
    section.append(content);
    layout.append(section);
  });

  block.textContent = '';
  block.append(layout);
}