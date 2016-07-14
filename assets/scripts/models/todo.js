'use strict';

const app = {};

app.Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  }
});
