require.config({
  paths: {
    "jquery": "/bower_components/jquery/dist/jquery",
    "elessar": "/bower_components/elessar/dist/elessar",
    "moment": "/bower_components/moment/moment",
    "es5-shim": "/bower_components/es5-shim/es5-shim",
    "estira": "/bower_components/estira/index"
  }
});
require(['jquery', 'elessar', 'moment'],
function($, RangeBar) {
  $('body').prepend(r = RangeBar({
    min: 0.1,
    max: 1,
    valueFormat: function(a) {
      return a;
    },
    valueParse: function(a) {
      return a;
    },
    vertical: true,
    label: function(a){return JSON.stringify(a)},
    snap: 0.18,
    minSize: 0.1
  }).$el).on('changing', function(ev, ranges) {
    $('pre.changing').html(JSON.stringify(ranges,null,2));
  }).on('change', function(ev, ranges) {
    $('pre.changing').after($('<pre>').html('changed'+JSON.stringify(ranges,null,2)));
  });
});