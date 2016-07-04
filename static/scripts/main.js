require.config({
  baseUrl: "/static",
  paths: {
    "jquery": "scripts/jquery",
    "elessar": "scripts/elessar",
    "es5-shim": "scripts/es5-shim",
    "estira": "scripts/index"
  } 
});
require(['jquery', 'elessar'],
function($, RangeBar) {
  $('[role=main1]').prepend(r = RangeBar({
    min: 0.1,
    max: 1,
    valueFormat: function(a) {
      return (a.toFixed(2));
    },
    valueParse: function(a) {
      return a;
    },
    vertical: true,
    snap: 0.18,
    minSize: 0.1,
    allowDelete: true
  }).on('changing', function(ev, ranges, changed) {
      $('pre.changing1').html("\nRange: "+ranges);
  }).on('change', function(ev, ranges, changed) {
      var teste = "\n"
      for(var i=0;i<ranges.length;i++){
          for(var j=0;j<2;j++){
              teste += ranges[i][j]+"\n";
          }
      }
      $('pre.changing1').html("\nRange: "+teste);

      var min, max, rangeCount, valor;
      var hc = [];
      for(var i=0;i<ranges.length;i++){
          min = ranges[i][0];
          console.log("min "+min);
          max = ranges[i][1];
          console.log("max "+max);
          hc.push(JSON.stringify(min));
          rangeCount = (max - min)/0.18;
          rangeCount = rangeCount.toFixed(2);
          console.log("range "+rangeCount);
          for(var j=0;j<rangeCount;j++){
            valor = (parseFloat(min) + 0.18).toFixed(2);
            console.log("valor " + valor);
            hc.push(JSON.stringify(valor));
          }
      }
      console.log(hc);
  }).$el);

  $('[role=main2]').prepend(r1 = RangeBar({
    min: 0.1,
    max: 31,
    valueFormat: function(a) {
      return (a.toFixed(2));
    },
    valueParse: function(a) {
      return a;
    },
    vertical: true,
    snap: 6.18,
    minSize: 6.18,
    allowDelete: true
  }).on('changing', function(ev, ranges, changed) {
      $('pre.changing2').html("\nRange: "+ranges);
  }).on('change', function(ev, ranges, changed) {
      var teste = "\n"
      for(var i=0;i<ranges.length;i++){
          for(var j=0;j<2;j++){
              teste += ranges[i][j]+"\n";
          }
      }
      $('pre.changing2').html("\nRange: "+teste);
      console.log(teste);
  }).$el)
})
