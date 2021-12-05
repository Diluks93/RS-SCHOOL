import { EnumSource } from '../../utils/enums';
import { ClassSources, ObjectSources } from '../../utils/interfaces';
import './sources.css';

class Sources implements ClassSources {
  draw(data: Array<ObjectSources>): void {
    const fragment: DocumentFragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

    data.forEach((item: ObjectSources): void => {
      const sourceClone: HTMLTemplateElement = sourceItemTemp.content.cloneNode(true) as HTMLTemplateElement;

      (sourceClone.querySelector('.source__item-name') as HTMLTemplateElement).textContent = item.name;
      (sourceClone.querySelector('.source__item') as HTMLTemplateElement).setAttribute(EnumSource.sourceId, item.id);

      fragment.append(sourceClone);
    });

    (document.querySelector('.sources') as HTMLTemplateElement).append(fragment);
  }
}

export default Sources;
