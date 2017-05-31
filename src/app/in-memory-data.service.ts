import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
        { id: 11, name: 'Cyclops' },
        { id: 12, name: 'Magneto' },
        { id: 13, name: 'Professor X' },
        { id: 14, name: 'Kitty Pryde' },
        { id: 15, name: 'Colossus' },
        { id: 16, name: 'Magik' },
        { id: 17, name: 'Wolverine' },
        { id: 18, name: 'Prince Namor' },
        { id: 19, name: 'Beast' },
        { id: 20, name: 'Emma Frost' }
    ];
    return {heroes};
  }
}
