import { observable, action, computed } from 'mobx';

class BirdStore {
  @observable birds = [];

  @action addBird = (bird) => {
    this.birds.push(bird);
  }

  @computed get birdCount() {
    return this.birds.length;
  }


}

//creates one instance of the class for access, can't have new ones constantly created
const store = new BirdStore();
export default store;
