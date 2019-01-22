import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return [
      {
        id: 1,
        miejsce: 'Szczebrzeszyn',
        dataObserwacji: new Date('2016-11-07')
      },
      {
        id: 2,
        miejsce: 'Szczebrzeszyn',
        dataObserwacji: new Date('2016-11-07')
      },
      {
        id: 3,
        miejsce: 'Szczebrzeszyn',
        dataObserwacji: new Date('2016-11-07')
      },
      {
        id: 4,
        miejsce: 'Szczebrzeszyn',
        dataObserwacji: new Date('2016-11-07')
      },
      {
        id: 5,
        miejsce: 'Szczebrzeszyn',
        dataObserwacji: new Date('2016-11-07')
      },
      {
        id: 6,
        miejsce: 'Szczebrzeszyn',
        dataObserwacji: new Date('2016-11-07')
      }
    ];
  }
});
