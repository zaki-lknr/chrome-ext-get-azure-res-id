VERSION=$(shell grep '"version"' src/manifest.json | cut -d ':' -f 2 | sed -e 's/[", ]//g')

buri-$(VERSION).zip: src
	zip -r buri-$(VERSION).zip src
