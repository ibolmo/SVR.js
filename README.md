Separated Variable Reader (SVR) - Copyright (c) 2010 [Olmo Maldonado](http://ibolmo.com/)
=========================================================================================

Simple reader for csv, tsv, or in general any character separated string. The reader instance acts like a doubly linked list: prev, next, current, end. 

In addition, it's a little smart about how it reads. SVR will not parse the complete string buffer until you want to read the `next` line. 

Build
-----

Build via [Packager](http://github.com/kamicane/packager), requires MooTools Core to be registered to Packager already

	./packager register /path/to/SVR
	./packager build SVR/* > SVR.js

How to use
----------

### Log each line
	var line, reader = new SVR(my_tsv); // tab separate variable, the default 
	while (line = reader.next()) console.log(line);
	
### First 5 lines
	var line, reader = new SVR(my_csv, {delimeter: ','});
	while (line = reader.next() && reader.index < 5) console.log(line);
	
### Reverse Reading
	var reader = new SVR(my_tsv);
	for (var line = reader.end(); reader.prev();) console.log(line); 

TODO
----
* End could be more optimal. I shouldn't have to parse all of the buffer to iterate backwards.
* Do something with the headers (assumed to be line 0). 
* Web 2.0. Could hook into JSONP, XHR, etc., to grab the inputs. Right now it's on the developer to provide the string buffer as the first argument.
* The reading is one-dimensional (per line). What if it was two-dimensional with a per column?