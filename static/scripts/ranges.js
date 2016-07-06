require.config({
	baseUrl: "/static",
	paths: {
    "jquery": "scripts/jquery",
    "elessar": "scripts/elessar",
    "es5-shim": "scripts/es5-shim",
    "estira": "scripts/index"
  }
});

define(['jquery','elessar'],function($, RangeBar) {
  function createBar(barName, emin, emax, esnap){
    barName = new RangeBar({
      min: emin,
      max: emax,
      valueFormat: function(a) {
        return (a.toFixed(2));
      },
      valueParse: function(a) {
        return a;
      },
      vertical: true,
      snap: esnap,
      minSize: esnap,
      allowDelete: true
    });
    return barName;
  };
})