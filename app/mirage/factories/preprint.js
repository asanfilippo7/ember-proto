import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({  
    title(i) { return `Preprint title ${i + 1}`; },
    author(i) { return `Preprint author ${i + 1}`; },
    category: faker.list.random('psychology','sociology'),
    abstract(i) { return `Preprint ${i + 1} abstract`; }
});