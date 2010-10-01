/*
---

name: SVR (Separated Variable Reader)

description: Base Class for SVR classes.

authors: Olmo Maldonado (@ibolmo)

license: MIT-style license.

requires: [Core/Class, Core/Class.Extras]

provides: SVR

...
*/

(function(){

this.SVR = new Class({
	
	options: {
		newLine: /\n/g,
		delimeter: '\t',
	},
	
	
	initialize: function(raw, options){
		this.setOptions(options);		
		this.lines = [];
		this.input = raw;
		this.headers = this.next();
	},
	
	index: -1,
	
	next: function(){
		if (!this.input) return null;
		var line = this.lines[++this.index];
		if (!line){
			var index = this.input.search(this.options.newLine);
			if (index != -1){
				line = this.input.slice(0, index).split(this.options.delimeter);
				this.lines[this.index] = line;
				this.input = this.input.slice(index + 1);
			}
		}
		return line;
	},
	
	current: function(){
		return this.lines[this.index];
	},
	
	prev: function(){
		return (this.index > -1) && this.lines[--this.index];
	},
	
	end: function(){
		if (!this.input) return this.lines[this.index = this.lines.length];
		do {} while (this.next());
		return this.current();
	},
	
	reset: function(){
		return this.lines[this.index = 0]; 
	}
	
});
	
}).call(typeof exports != 'undefined' ? exports : this);
