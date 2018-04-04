jQuery.fn.modalSlider = function(modal_selector, callback){
    var modal = jQuery(modal_selector),
        modal_body = modal.find('.modal-body'),
        items = jQuery(this),
        items_count = items.length,
        index = 0;
    
    var slide = function(){
        modal_body.fadeOut(300, function(){
            callback(items.eq(index));
            modal_body.fadeIn(300);
        });
    };
    
    items.on('click', function(){
        index = items.index(jQuery(this));
        slide();
    });
    
    jQuery('<a class="left carousel-control modal-slider-control" href="#"><span class="glyphicon glyphicon-chevron-left"></span></a>')
        .on('click', function(){
            index = index <= 0 ? items_count - 1 : index - 1;
            slide();
            return false;
        })
        .appendTo(modal_body);
    jQuery('<a class="right carousel-control modal-slider-control" href="#"><span class="glyphicon glyphicon-chevron-right"></span></a>')
        .on('click', function(){
            index = index >= (items_count - 1) ? 0 : index + 1;
            slide();
            return false;
        })
        .appendTo(modal_body);
};