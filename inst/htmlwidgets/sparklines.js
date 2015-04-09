HTMLWidgets.widget({

  name: 'sparklines',

  type: 'output',

  initialize: function(el, width, height) {
    // pass
  },

  renderValue: function(el, x, instance) {
    el.x = x;
    $(el).sparkline(el.x.values, el.x.config);
  },

  resize: function(el, width, height, instance) {
    // pass
  }

});
