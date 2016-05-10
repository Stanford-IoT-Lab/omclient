# The Omlet Javascript Client library

Omlet is a chat application developed by Mobisocial Inc.

This package contains the nodejs client module. Source code is in the 'src/' directory-- do NOT modify code in the lib/ directory, which is compiled from src/ via Babel.

Build the browser-friendly library using:
`gulp browserify`

Or build a node package as:
`npm pack`

Code cleanup:
`js-beautify -r -t [file.js]`