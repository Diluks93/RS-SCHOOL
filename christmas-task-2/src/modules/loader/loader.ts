export default class Loader {
  constructor(readonly baseLink: string) {
    this.baseLink = baseLink;
  }

  async load() {
    const response: Response = await fetch(this.baseLink);
    const data = await response.json();

    return data;
  }
}
