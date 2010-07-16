JS_COMPILER = \
	java -jar /Library/Google/Compiler/compiler-20100201.jar \
	--charset UTF-8

all: nns.min.js

nns.min.js: nns.js Makefile
	rm -f $@
	$(JS_COMPILER) < nns.js >> $@
	chmod a-w $@

clean:
	rm nns.min.js
