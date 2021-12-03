import { ObjectSources } from '../appView';
import './sources.css';

interface ClassSources {
  draw(data: Array<ObjectSources>): void;
}
class Sources implements ClassSources {
  draw(data: Array<ObjectSources>): void {
    const fragment: DocumentFragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

    data.forEach((item: ObjectSources): void => {
      const sourceClone: HTMLTemplateElement = sourceItemTemp.content.cloneNode(true) as HTMLTemplateElement;
      //TODO enum
      (sourceClone.querySelector('.source__item-name') as HTMLTemplateElement).textContent = item.name;
      (sourceClone.querySelector('.source__item') as HTMLTemplateElement).setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    (document.querySelector('.sources') as HTMLTemplateElement).append(fragment);
  }
}

export default Sources;
