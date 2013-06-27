#jQuerySelectorAll

jQuerySelectorAll is a wrapper of querySelectorAll with jquery style, and some good small tools for css modification sequence.  
*THIS IS REALY FAR FROM JQUERY and THERE AER NO COMPATIBILITIES.*

###jQuerySelectorAll supports following methods in 4kB.
    $.fn.extend([object])
    $([CSS Query]/[html]/[DOM Elem]).eq([index])
    $([CSS Query]/[html]/[DOM Elem]).get([index])
    $([CSS Query]/[html]/[DOM Elem]).each([function])
    $([CSS Query]/[html]/[DOM Elem]).map([function])
    $([CSS Query]/[html]/[DOM Elem]).find([CSS Query])
    $([CSS Query]/[html]/[DOM Elem]).bind([event type],[function]/[object(like $.on method)])
    $([CSS Query]/[html]/[DOM Elem]).click([function])
    $([CSS Query]/[html]/[DOM Elem]).hasClass([class name])
    $([CSS Query]/[html]/[DOM Elem]).addClass([class name],...)
    $([CSS Query]/[html]/[DOM Elem]).removeClass([class name],...)
    $([CSS Query]/[html]/[DOM Elem]).toggleClass([class name])(*2nd argument is not supported)
    $([CSS Query]/[html]/[DOM Elem]).css([css property],([value])/[object])
    $([CSS Query]/[html]/[DOM Elem]).attr([name],([value])/[object])
    $([CSS Query]/[html]/[DOM Elem]).hide()
    $([CSS Query]/[html]/[DOM Elem]).show()
    $([CSS Query]/[html]/[DOM Elem]).append()
    $([CSS Query]/[html]/[DOM Elem]).html(([html]))
    $([CSS Query]/[html]/[DOM Elem]).text(([text]))
    $([CSS Query]/[html]/[DOM Elem]).val(([value]))

###And add new concept for time-sequencial modifications
#### $([CSS Query]/[html]/[DOM Elem]).wait([milli-second])
    $(".class").addClass("move").wait(1000).removeClass("move").wait(1000).hide();
... is same as ...

    $(".class").addClass("move");
    setTimeout(function(){
      $(".class").removeClass("move");
      setTimeout(function(){
        $(".class").hide();
      },1000);
    },1000);
    
#### $([CSS Query]/[html]/[DOM Elem]).seq([milli-second])
    $(".class").addClass("move").seq(200).removeClass("move").wait(1000).hide();
... is same as ...

    var index=0, timerID;
    $(".class").addClass("move");
    timerID = setInterval(function(){
      var $e=$(".class").eq(index);
      $e.removeClass("move");
      setTimeout(function(){
        $e.hide();
      },1000);
      if (++index==$(".class").length) clearInterval(timerID);
    },200);

#### $([CSS Query]/[html]/[DOM Elem]).$([CSS Query]/[html]/[DOM Elem])
    $(".class1").addClass("move").wait(1000).$(".class2").addClass("move").wait(1000).hide();
... is same as ...

    $(".class1").addClass("move");
    setTimeout(function(){
      $(".class2").addClass("move");
      setTimeout(function(){
        $(".class2").hide();
      },1000);
    },1000);
    
(This method is available only after wait() or seq())

#### $.stop()
stop time sequencial modifications. (available only after wait() or seq())
