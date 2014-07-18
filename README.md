# Custom Styling
Sometimes the generic themes just won't be enough to get to the look and feel you're looking for for your docs.  Not a problem, we have custom styling built in as well.

## Style Template
We offer a complete [stylesheet template](https://github.com/helppages/stylesheet-template) for theming your HelpPag.es documentation.  Also included is a test html file that loads the same initial styles as the site.  It should be everything you need to get going.

## Considerations
Just a few basic rules:

 * Multiple stylesheets are merged into a single one in alphabetical order
 * We run the CSS through a sanitizer, so things like imports will get removed.
   * Let us know if you need something special and we'll work with you.
 * Be nice, these are your users, don't do anything shady
 * Your stylesheet will be loaded on top of bootstrap.  The test file includes everything that will be included with your real docs.

## How to use
Download the repo, launch the test/index.html file and start editing the stylesheet.css file.  Once your'e done, drop it in your documentation repo and push it up.  We'll take care of the rest.

### But my styles aren't updating
If you've just pushed your changes, then it's possible that we're in the process of pulling the changes.  The whole process can unfortunately take a bit of time, because we have to submit cache expires to a few places.

### Contributing
Right now the css file is just the css from our Minimal theme.  It'll definitely be fleshed out better over time.  If you have some useful additions, please submit a pull request and we'll merge it in for everyone to use.
