(function() {
  var clearVerticalAlign, disableBodyScroll, enableBodyScroll, toggleBodyScroll, triggerVerticalAlign, verticalAlign;

  disableBodyScroll = function() {
    $("body").addClass('no-scroll');
    return $("body").bind("touchmove", function(e) {
      e.preventDefault();
    });
  };

  enableBodyScroll = function() {
    $("body").removeClass('no-scroll');
    return $("body").unbind('touchmove');
  };

  toggleBodyScroll = function() {
    if ($('body').hasClass('no-scroll')) {
      return enableBodyScroll();
    } else {
      return disableBodyScroll();
    }
  };

  verticalAlign = function(child) {
    var $child, $parent, topMargin;
    $child = $(child);
    $parent = $(child).parents('[data-vertical-align-parent]');
    topMargin = ($parent.height() - $child.height()) / 2;
    $parent.css({
      position: 'relative'
    });
    return $child.css({
      'margin-top': topMargin,
      position: 'absolute'
    });
  };

  clearVerticalAlign = function(child) {
    var $child, $parent;
    $child = $(child);
    $parent = $(child).parents('[data-vertical-align-parent]');
    $parent.css({
      position: 'inherit'
    });
    return $child.css({
      'margin-top': 0,
      position: 'inherit'
    });
  };

  triggerVerticalAlign = function() {
    return $('[data-vertical-align-to]').each(function() {
      if ($(window).width() < $(this).attr('data-vertical-align-to')) {
        return verticalAlign(this);
      } else {
        return clearVerticalAlign(this);
      }
    });
  };

  $(function() {
    $('#nav').onePageNav({
      begin: function() {
        $('#page-nav').removeClass('active');
        return enableBodyScroll();
      }
    });
    triggerVerticalAlign();
    $('[data-toggle-nav]').click(function() {
      var target;
      target = $(this).attr('data-toggle-nav');
      $(target).toggleClass('active');
      return toggleBodyScroll();
    });
    return $("#post-0").waypoint(function(direction) {
      if (direction === "down") {
        $("#page-nav").addClass("invert");
      }
      if (direction === "up") {
        $("#page-nav").removeClass("invert");
      }
    }, {
      offset: -($('#post-0').height() - 80)
    });
  });

  $(window).load(function() {});

  $(window).resize(function() {
    return triggerVerticalAlign();
  });

}).call(this);
