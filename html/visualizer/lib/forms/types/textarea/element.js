'use strict';define([],function(){"use strict";var a=function(){};return a.prototype.__makeDom=function(){var a=this,b=$("<div />"),c=$("<textarea />").addClass("field-list").appendTo(b).bind("keyup blur",function(){var b;a.value!==(b=$(this).val())&&(a.value=$(this).val())});return this.dom=b,this.input=c,b},a.prototype.checkValue=function(){this.dom&&this.input.val(this.value)},a});
