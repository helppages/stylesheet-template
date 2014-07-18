# Headers

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

# Paragraph

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

This is another paragraph, this time with an [embeded link in it](http://helppag.es). Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

# List Types

## Unordered List

* List item 1
* List item 2
* List item 3
* List item 4

## Ordered List

1. List item 1
2. List item 2
3. List item 3
4. List item 4

# Tables
| Header 1 | Header 2 | Header 3 |
|---|---|---|
| Division 1 | Division 2 | Division 3|
| Division 1 | Division 2 | Division 3|
| Division 1 | Division 2 | Division 3|

# Code
HelpPag.es supports many different languages, here's just a quick example of a few.

```ruby
module HelpPages
  class ClassName
    def initialize
      @option = "asdf"
    end
  end
end
```

```http
GET http://www.helppag.es

{
  "field" : "value"
}
```

And here's what your code will look like if we don't support your language.  But don't worry, just let us know and we'll get it added for you

```
var key = "value"
```

You can also put code `inline` as well.

# Media

## Images

![Arches National Park](test/arches_park.jpg)

## Youtube Videos
You can embed youtube videos directly in your docs just by linking to them.  They'll get rendered like this:

<http://www.youtube.com/watch?v=HzypOnklG60>
