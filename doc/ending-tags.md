## Ending tags  

Some of the mjml components are "ending tags". These are mostly the components that will contain text contents, like `mj-text` or `mj-buttons`.
These components can contain not only text, but also any HTML content, which will be completely unprocessed and left as it is. This means you cannot use other MJML components inside them, but you can use any HTML tag, like `<img>` or `<a>`.

This has a little downside : The content is not modified at all, this means that the text won't be escaped, so if you use characters that are used to define html tags in your text, like `<` or `>`, you should use the encoded characters `&lt;` and `&lt;`. If you don't, sometimes the browser can be clever enough to understand that you're not really trying to open/close an html tag, and display the unescaped character as normal text, but this may cause problems in some cases.

Here is the list of all ending tags :
- mj-accordion-text
- mj-accordion-title
- mj-button
- mj-navbar-link
- mj-raw
- mj-social-element
- mj-text
- mj-table
