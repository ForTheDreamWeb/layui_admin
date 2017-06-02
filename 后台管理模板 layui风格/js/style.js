(function(){
    
    //侧边栏导航特效
    var animationSpeed = 300;
	$('.sideBar-nav-items').on('click','li a',function(e){
        var $this = $(this);
        var checkElement = $this.next();
		if (checkElement.is('.child-nav-item') && checkElement.is(':visible')) {
			checkElement.slideUp(animationSpeed, function() {
				checkElement.removeClass('menu-open');
			});
			$this.children('.fa').attr('class','fa fa-angle-left fa-fw pull-right');
		}
		else if ((checkElement.is('.child-nav-item')) && (!checkElement.is(':visible'))) {
            
            $('.child-nav-item').each(function(index,ele){
	            if($(ele).is(':visible')){
		            $(ele).prev('a').children('.fa').attr('class','fa fa-angle-left fa-fw pull-right');
		            $(ele).slideUp(animationSpeed);
	            }
            })

            checkElement.slideDown(animationSpeed, function() {
				checkElement.addClass('menu-open');
			});

			$this.children('.fa').attr('class','fa fa-angle-down fa-fw pull-right');

			if (checkElement.is('.child-nav-item')) {
			e.preventDefault();
			}
		}

	})

    //导航下拉菜单特效
    $('#header-user').on('mouseenter',function(){
    	$(this).children('.drop-menu').show();
    }).on('mouseleave',function(){
    	$(this).children('.drop-menu').hide();
    })

    //点击切换函数
	$.fn.toggle = function( fn, fn2 ) {
	    var args = arguments,guid = fn.guid || $.guid++,i=0,
	    toggle = function( event ) {
	      var lastToggle = ( $._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
	      $._data( this, "lastToggle" + fn.guid, lastToggle + 1 );
	      event.preventDefault();
	      return args[ lastToggle ].apply( this, arguments ) || false;
	    };
	    toggle.guid = guid;
	    while ( i < args.length ) {
	      args[ i++ ].guid = guid;
	    }
	    return this.click( toggle );
	};
    
    //按钮切换显示和隐藏
    $('#header-toggle').toggle(function(){
    	$('#main').css('marginLeft','0');
    	$('#sideBar-nav').css('left','-200px');
    	$('#footer span').css('marginLeft','0');
    },function(){
    	$('#main').css('marginLeft','200px');
    	$('#sideBar-nav').css('left','0');
    	$('#footer span').css('marginLeft','200px');
    })

})()

