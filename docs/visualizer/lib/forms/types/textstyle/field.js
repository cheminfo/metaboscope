'use strict';define([require,"../../field"],function(a,b){"use strict";var c=function(a){this;this.name=a};return c.prototype=new b,c.prototype.getOptions=function(a){return a.getOptions()||this.options.options},c});