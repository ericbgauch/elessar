require.config({
  baseUrl: "/static",
  paths: {
    "jquery": "scripts/jquery",
    "elessar": "scripts/elessar",
    "es5-shim": "scripts/es5-shim",
    "estira": "scripts/index",
    "datatables": "scripts/datatables"
  }
});
require(['jquery', 'elessar'],
function($, RangeBar) {
  $('[role=main1]').prepend(r1 = RangeBar({
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
    minSize: 0.18,
    allowDelete: true
  }).on('changing', function(ev, ranges, changed) {
      $('pre.changing1').html(ranges);
  }).on('change', function(ev, ranges, changed) {
      var teste = "";
      for(var i=0;i<ranges.length;i++){
          for(var j=0;j<2;j++){
              teste += " - " + ranges[i][j];
          }
          teste += "\n";
      }
      $('pre.changing1').html(teste);

      var minHc, maxHc, rangeCountHc, valorHc, i, j;
      window.hc = [];
      for(i=0;i<ranges.length;i++){
          minHc = ranges[i][0];
          maxHc = ranges[i][1];
          valorHc = parseFloat(minHc);
          window.hc.push(minHc);
          rangeCountHc = (maxHc - minHc)/0.18;
          rangeCountHc = rangeCountHc.toFixed(2);
          for(j=0;j<rangeCountHc;j++){
            valorHc += 0.18;
            window.hc.push(valorHc.toFixed(2));
          };
      };
  }).$el);

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
      $('pre.changing2').html(ranges);
  }).on('change', function(ev, ranges, changed) {
      var teste = "";
      for(var i=0;i<ranges.length;i++){
          for(var j=0;j<2;j++){
              teste += " - " + ranges[i][j];
          }
          teste += "\n";
      }
      $('pre.changing2').html(teste);
      //console.log(teste);

      var minPh, maxPh, rangeCountPh, valorPh, i, j;
      window.ph = [];
      for(i=0;i<ranges.length;i++){
          minPh = ranges[i][0];
          maxPh = ranges[i][1];
          valorPh = parseFloat(minPh);
          window.ph.push(minPh);
          rangeCountPh = (maxPh - minPh)/6.18;
          rangeCountPh = rangeCountPh.toFixed(2);
          for(j=0;j<rangeCountPh;j++){
            valorPh += 6.18;
            window.ph.push(valorPh.toFixed(2));
          };
      };
  }).$el);

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
      $('pre.changing3').html(ranges);
  }).on('change', function(ev, ranges, changed) {
      var teste = "";
      for(var i=0;i<ranges.length;i++){
          for(var j=0;j<2;j++){
              teste += " - " + ranges[i][j];
          }
          teste += "\n";
      }
      $('pre.changing3').html(teste);
      //console.log(teste);

      var minEp, maxEp, rangeCountEp, valorEp, i, j;
      window.ep = [];
      for(i=0;i<ranges.length;i++){
          minEp = ranges[i][0];
          maxEp = ranges[i][1];
          valorEp = parseFloat(minEp);
          window.ep.push(minEp);
          rangeCountEp = (maxEp - minEp)/0.08;
          rangeCountEp = rangeCountEp.toFixed(2);
          for(j=0;j<rangeCountEp;j++){
            valorEp += 0.08;
            window.ep.push(valorEp.toFixed(2));
          };
      };
  }).$el);

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
      $('pre.changing4').html(ranges);
  }).on('change', function(ev, ranges, changed) {
      var teste = "";
      for(var i=0;i<ranges.length;i++){
          for(var j=0;j<2;j++){
              teste += " - " + ranges[i][j];
          }
          teste += "\n";
      }
      $('pre.changing4').html(teste);
      //console.log(teste);

      var minLd, maxLd, rangeCountLd, valorLd, i, j;
      window.ld = [];
      for(i=0;i<ranges.length;i++){
          minLd = ranges[i][0];
          maxLd = ranges[i][1];
          valorLd = parseFloat(minLd);
          window.ld.push(minLd);
          rangeCountLd = (maxLd - minLd)/0.08;
          rangeCountLd = rangeCountLd.toFixed(2);
          for(j=0;j<rangeCountLd;j++){
            valorLd += 0.08;
            window.ld.push(valorLd.toFixed(2));
          };
      };
  }).$el)
});

function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true;
};

require(['jquery', 'datatables'], function($, datatables){
  $( "#botaoTab" ).click(function() {
    if((typeof window.hc !== 'undefined' && !isEmpty(window.hc)) && (typeof window.ph !== 'undefined' && !isEmpty(window.ph)) && (typeof window.ep !== 'undefined' && !isEmpty(window.ep)) && (typeof window.ld !== 'undefined' && !isEmpty(window.ld))){

      window.jobs = [];
      window.job = [];
      for(var i=0;i<window.hc.length;i++){
        for(var j=0;j<window.ph.length;j++){
          for(var k=0;k<window.ep.length;k++){
            for(var l=0;l<window.ld.length;l++){
              window.job.push(window.hc[i]);
              window.job.push(window.ph[j]);
              window.job.push(window.ep[k]);
              window.job.push(window.ld[l]);

              jobs.push(job);
              window.job = [];
            }
          }
        }
      }
      // console.log(jobs);

      if($.fn.dataTable.isDataTable('#jobsTable')){
        table = $('#jobsTable').DataTable();
        table.clear().rows.add(window.jobs).draw();
        //console.log(table.data());
      }
      else {
        table = $('#jobsTable').DataTable({
          data: window.jobs,
          columns: [
            { title: "HC" },
            { title: "PH" },
            { title: "EP" },
            { title: "LD" }
          ],
          scrollY: "300px",
          scrollCollapse: true,
          paging: false,
          searching: false,
          ordering: false
        });
      }
    }
    else{
      alert("Select the ranges");
    };
  });
});

require(['jquery', 'datatables'], function($, datatables){
  $("#botaoSub").click(function(){
    if($.fn.dataTable.isDataTable('#jobsTable')){
      table = $('#jobsTable').DataTable();
      window.jobsToRun = [];
      for(var i=0; i<table.column(0).data().length; i++){
        window.jobsToRun.push(table.row(i).data());
      }
      $("#runjobs").html(window.jobsToRun);
    }
    else{
      alert("Select the ranges");
    }
  })
})