require.config({
  baseUrl: "/static",
  paths: {
    "jquery": "scripts/jquery",
    "elessar": "scripts/elessar",
    "es5-shim": "scripts/es5-shim",
    "estira": "scripts/index",
    "ranges": "scripts/ranges"
  }
});

require(['ranges', 'jquery', 'elessar'],function(createBar, $, RangeBar){
  bar1 = createBar("r1", 0.1, 0.5, 0.1);
  $('[role=main1]').prepend(bar1).on('changing', function(ev, ranges, changed) {
      $('pre.changing1').html("\nRange: "+ranges);
  }).on('change', function(ev, ranges, changed) {
      var teste = "\n"
      for(var i=0;i<ranges.length;i++){
          for(var j=0;j<2;j++){
              teste += ranges[i][j]+"\n";
          }
      }
      $('pre.changing1').html("\nRange: "+teste);
      console.log(teste);

      var minPh, maxPh, rangeCountPh, valorPh, i, j;
      var ph = [];
      for(i=0;i<ranges.length;i++){
          minPh = ranges[i][0];
          maxPh = ranges[i][1];
          valorPh = parseFloat(minPh);
          ph.push(JSON.stringify(minPh));
          rangeCountPh = (maxPh - minPh)/6.18;
          rangeCountPh = rangeCountPh.toFixed(2);
          for(j=0;j<rangeCountPh;j++){
            valorPh += 6.18;
            ph.push(JSON.stringify(valorPh.toFixed(2)));
          };
      };
  }).$el;

/////////////////////////PH//////////////////////////////////////

  $('[role=main2]').prepend(r2 = RangeBar({
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

      var minPh, maxPh, rangeCountPh, valorPh, i, j;
      var ph = [];
      for(i=0;i<ranges.length;i++){
          minPh = ranges[i][0];
          maxPh = ranges[i][1];
          valorPh = parseFloat(minPh);
          ph.push(JSON.stringify(minPh));
          rangeCountPh = (maxPh - minPh)/6.18;
          rangeCountPh = rangeCountPh.toFixed(2);
          for(j=0;j<rangeCountPh;j++){
            valorPh += 6.18;
            ph.push(JSON.stringify(valorPh.toFixed(2)));
          };
      };
  }).$el)

////////////////////////////EP//////////////////////////////////

  $('[role=main3]').prepend(r3 = RangeBar({
    min: 0.1,
    max: 0.5,
    valueFormat: function(a) {
      return (a.toFixed(2));
    },
    valueParse: function(a) {
      return a;
    },
    vertical: true,
    snap: 0.08,
    minSize: 0.08,
    allowDelete: true
  }).on('changing', function(ev, ranges, changed) {
      $('pre.changing3').html("\nRange: "+ranges);
  }).on('change', function(ev, ranges, changed) {
      var teste = "\n"
      for(var i=0;i<ranges.length;i++){
          for(var j=0;j<2;j++){
              teste += ranges[i][j]+"\n";
          }
      }
      $('pre.changing3').html("\nRange: "+teste);
      console.log(teste);

      var minEp, maxEp, rangeCountEp, valorEp, i, j;
      var ep = [];
      for(i=0;i<ranges.length;i++){
          minEp = ranges[i][0];
          maxEp = ranges[i][1];
          valorEp = parseFloat(minEp);
          ep.push(JSON.stringify(minEp));
          rangeCountEp = (maxEp - minEp)/0.08;
          rangeCountEp = rangeCountEp.toFixed(2);
          for(j=0;j<rangeCountEp;j++){
            valorEp += 0.08;
            ep.push(JSON.stringify(valorEp.toFixed(2)));
          };
      };
  }).$el)

////////////////////////////LD//////////////////////////////////

  $('[role=main4]').prepend(r4 = RangeBar({
    min: 0.1,
    max: 0.5,
    valueFormat: function(a) {
      return (a.toFixed(2));
    },
    valueParse: function(a) {
      return a;
    },
    vertical: true,
    snap: 0.08,
    minSize: 0.08,
    allowDelete: true
  }).on('changing', function(ev, ranges, changed) {
      $('pre.changing4').html("\nRange: "+ranges);
  }).on('change', function(ev, ranges, changed) {
      var teste = "\n"
      for(var i=0;i<ranges.length;i++){
          for(var j=0;j<2;j++){
              teste += ranges[i][j]+"\n";
          }
      }
      $('pre.changing4').html("\nRange: "+teste);
      console.log(teste);

      var minLd, maxLd, rangeCountLd, valorLd, i, j;
      var ld = [];
      for(i=0;i<ranges.length;i++){
          minLd = ranges[i][0];
          maxLd = ranges[i][1];
          valorLd = parseFloat(minLd);
          ld.push(JSON.stringify(minLd));
          rangeCountLd = (maxLd - minLd)/0.08;
          rangeCountLd = rangeCountLd.toFixed(2);
          for(j=0;j<rangeCountLd;j++){
            valorLd += 0.08;
            ld.push(JSON.stringify(valorLd.toFixed(2)));
          };
      };
  }).$el)
})
