'use strict';

(function () {
  class Store {
    constructor(reducers) {
      this.state = {};

      this._reducers = reducers;

      // Object.keys(reducers).forEach((key) => {
      //   this.state[key] = reducers[key](this.state[key]);
      // });
    }
    subscribe(fn) {
      if (!this.subscribers) {
        this.subscribers = [];
      }

      this.subscribers.push(fn);
    }
    unsibscribe(fn) {
      if (this.subscribers) {
        this.subscribers = this.subscribers.filter((s) => s !== fn);
      }
    }
    dispatch(name, action) {
      this.state[name] = this._reducers[name](this.state[name], action);

      if (this.subscribers) {
        this.subscribers.forEach((s) => {
          s.call(this);
        });
      }
    }
  }

  var store = new Store();

  class Building {
    constructor(props) {
      this.name = props.name;
      this.store = props.store;
    }
    update() {
      console.log('update building');
    }
  }

  class FavoriteControl {
    constructor(props) {
      this.name = props.name;
      this.store = props.store;
    }
    update() {
      console.log('update favorite control');
    }
  }
  // buildingsManager.notify = function (method, data) {
  //   this.buildings.forEach((b) => {
  //     b[method](data);
  //   });
  // }
  var store = new Store({
    buildings(state, action) {
      switch(action.type) {
        case 'ADD_FAVORITE': {
          // buildingsManager.notify('onChangeFavorite', action);
          return [1];
        }
      }

      return null;
      // console.log('buildings reducer');
    },
    favorites(state, action) {
      console.log('favorites reducer');
    }
  });
  console.log(store);

  var building1 = new Building({name: 'Middletone', store}),
    building2 = new Building({name: 'Ocean Plaza', store});

  var favorite1 = new FavoriteControl({name: 'Fav control 1', store}),
    favorite2 = new FavoriteControl({name: 'Fav control 2', store});

  store.subscribe(function () {
    console.log(this.state);
  });

  favorite1.store.dispatch('buildings', {
    type: 'ADD_FAVORITE',
    id: 0
  });
  
  // console.log(store);
}());
