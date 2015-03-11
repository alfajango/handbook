---
layout: page
title: "Cms Tips"
description: ""
---
{% include JB/setup %}

When creating and editing pages in your Content Management System (CMS), there are several buttons abover the text box which help you format your site's content.

![cms screenshot](/assets/images/Screen+Shot+2012-08-25+at+12.56.56+AM.png)

It's important to understand what these do, and to think about the best way to format your site's content.

## Why it's important

It's important that your site's content be formatted well, so that it displays properly and is easily consumed and understood by your site's visitors.

All text written for the web (including the text you're reading now) has meta-data associated with it, which tells the browser what type of text it is. This type-meta-data tells browsers how to display the text, it tells screen-readers (used by visually-impaired visitors) how to describe the text, and it also tells search engines, such as Google and Bing, how to determine the relavence of a page in its search results.

## Text types

Keey in mind that the different text types will look different in the content editor than they will look on the front-end website, since the actual styling of the page is handled differently based on your site's design.

### Headings

Headings are equivalent to titles for sections of the page. Headings are generally short (generally 1 - 5 words). The `H1`, `H2`, and `H3` buttons correspond to heading levels.

#### H1

![Refinery H1](/assets/images/refinery-h1.png)

`H1` is the top-level heading. **There should be only one `H1` heading per page!** If there are more than one `H1` headings in a single page, search engines such as Google consider the page to be poorly organized and may reduce the credibility of the page in their search algorithms.

The `H1` text in this page is "CMS Tips" at the top of the page.

#### H2

![Refinery H2](/assets/images/refinery-h2.png)

`H2` is a sub-heading, which can help break the page down further into sub-sections. There can be multiple `H2` tags in a single page.

The `H2` tags in this page include "Why it's important" and "Text types".

#### H3

![Refinery H3](/assets/images/refinery-h3.png)

Likewise, `H3` is a sub-heading of an `H2` heading.

The `H3` tags in this page include "Headings" above.

### Paragraphs

![Refinery P](/assets/images/refinery-p.png)

Paragraphs are denoted by the `P` button. When you're typing text in a paragraph and hit the `Enter` button, it will automatically create a new paragraph for you.

### Bold and Italic

![Refinery B](/assets/images/refinery-b.png)

![Refinery I](/assets/images/refinery-i.png)

The `B` and `I` buttons correspond to bold and italic text, respectively. These are meant to provide emphasis to sections of text.

**They should not be used in place of headings. Whenever you find yourself writing bold or italic text, ask yourself if a heading would be more appropriate.**

Bold and italic text are typically used to make certain words, sentences, or paragraphs stand out, such as the paragraph above.

Bold and italic text can be inside paragraphs and can span multiple paragraphs if needed.

### Lists

Lists are basically bullet-point lists. There are two types.

#### Unordered lists

![Refinery UL](/assets/images/refinery-ul.png)

These are for bullet-point lists where the order makes no difference or is insignificant. An unordered list:

* Shows bullet points
* And looks like this

#### Ordered lists

![Refinery OL](/assets/images/refinery-ol.png)

Ordered lists are for lists where order matters, such as when ranking items or describing a series of steps. Ordered list:

1. Shows numbers
2. Then looks like this

#### Nested lists

Lists can also be nested within other lists. Furthermore, ordered lists can be nested within unordered lists and vice versa.

1. Start with a list.
2. Realize you need multiple items within a step.
  * Use unordered list if order *doesn't* matter.
  * Use ordered list if order *does* matter.
3. Reflect.
  1. Smile in approval of your listing skills.
  2. Reward yourself with a break.
     * This may include stretching.
     * It also may include getting up and walking around.
4. Finish reading this article.

### Links

![Refinery A](/assets/images/refinery-a.png)

Links give users a way of clicking to other related pages on your website and anywhere on the web. They also tell search engines what related pages are to the current page.

It's important to make the clickable text sufficiently descriptive of the page it links to. In other words, links that say nothing more than "click here" aren't very helpful. Instead, try, "click here for agenda".

### Images

![Refinery IMG](/assets/images/refinery-img.png)

Images embed pictures into the page. However, search engines and screen-readers cannot infer meaning from image files the same way they can from text. So, it's imporant to provide `alt` text which briefly describes the image. This also helps people with slow connections which can prevent the image form loading in a timely manner.

### Tables

Tables show tabular data.

<table>
<thead>
<tr><th>First Name</th><th>Last Name</th><th>Awesomeness Level</th></tr>
</thead>
<tbody>
<tr><td>Bruce</td><td>Wayne</td><td>7</td></tr>
<tr><td>Tony</td><td>Stark</td><td>8</td></tr>
<tr><td>Hal</td><td>Jordan</td><td>5</td></tr>
</tbody>
</table>

### HTML

HTML stands for "HyperText Markup Language", and describes the code that marks up the text with the meta-data described above. Each of the text types discussed above are HTML tags.

The HTML view gives you ultimate fine-grained control over the structure of your content. **Do not use this view unless you know exactly what you're doing.**

But, for the curious, here are the elements discussed so far in their HTML tag form:

<table>
<thead>
<tr><th>Element name</th><th>HTML Tag</th></tr>
</thead>
<tbody>
<tr><td>Heading, level 1</td><td><code>&lt;h1&gt;</code></td></tr>
<tr><td>Heading, level 2</td><td><code>&lt;h2&gt;</code></td></tr>
<tr><td>Heading, level 3</td><td><code>&lt;h3&gt;</code></td></tr>
<tr><td>Paragraph</td><td><code>&lt;p&gt;</code></td></tr>
<tr><td>Bold</td><td><code>&lt;strong&gt;</code></td></tr>
<tr><td>Italic (aka emphasis)</td><td><code>&lt;em&gt;</code></td></tr>
<tr><td>Unordered list</td><td><code>&lt;ol&gt;</code></td></tr>
<tr><td>Ordered list</td><td><code>&lt;ul&gt;</code></td></tr>
<tr><td>Image</td><td><code>&lt;img&gt;</code></td></tr>
<tr><td>Table</td><td><code>&lt;table&gt;</code></td></tr>
</tbody>
</table>
