angular.module("GITALO").directive("loading",function(){return{restrict:"E",replace:!0,template:'<div class="loading"><img src="http://www.nasa.gov/multimedia/videogallery/ajax-loader.gif" width="100" height="100" />LOADING...</div>',link:function(i,a,e){i.$watch("loading",function(i){i?$(a).show():$(a).hide()})}}});