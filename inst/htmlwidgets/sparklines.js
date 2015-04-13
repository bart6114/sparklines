HTMLWidgets.widget({

  name: 'sparklines',
  type: 'output',

  renderValue: function(el, params) {
    $(el).sparkline(params.values, params.config);
  }

});
