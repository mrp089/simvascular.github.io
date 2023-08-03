# SimVascular Website

This is the repository for the SimVascular website.

## Usage

The SimVascular website documentation can be found in the documentation folder, and the SimVascular website clinical test cases can be found in the clinical folder. In each folder, there are `html` files and their corresponding folder, which share the same name. For example, the folder associated with the `quickguide.html` file is named quickguide.

In each folder, there are markdown files from which the content in the `html` files is generated. [Markdown](https://daringfireball.net/projects/markdown) is a lightweight markup language with plain text formatting syntax that can be editied using a text editor.

The markdown files are accessed and translated into `html` through the `<zero-md>` element, which is placed in the `html` file. Documentation on `<zero-md>` can be found [here](https://zerodevx.github.io/zero-md/).

Before editing, you should first fork **simvascular.github.io** to your own repository and sync it with https://github.com/SimVascular/simvascular.github.io.

### Notes on writing markdown files

Because the markdown files are rendered through the `<zero-md>` element, there are a few specifications to ensure that the markdown is rendered correctly. These are detailed below.

#### Naming all documentation markdown files "readme.md"

Because the SimVascular website is hosted directly from github.io, markdown files that are not named `readme.md` are not considered by the github.io compiler even if they are linked in the rendered `html` page. For the markdown file to be read by github.io when compiling the website, it must be named "readme.md."

In order to differentiate between the different markdown files all titled "readme.md," the markdown files are placed in their own folders.

#### Embedding HTML in markdown files

Markdown is very compatible with `html`, so you can use `html` and markdown interchangebly in a markdown file, and it will render `html` correctly. However, you cannot use markdown styling inside `html` elements.

For example:

`<h4> An example **header** </h4>` will display "An example \*\*header\*\*" instead of bolding the word "header" because the markdown styling with the \*\* to signify bolding was placed inside the `<h4>` element.

To still be able to bold the word that you want inside an `html` element, you can use the `html` styling. In this case, instead of writing `<h4> An example **header**</h4>`, which will not render correctly, you can write `<h4> An example <b>header</b></h4>`, where `<b>` is the element to bold words in `html`.

Another detail to make sure the page renders the styling correctly is to add new lines between code in html and in markdown.

For example, this code

```
<h4> An example header </h4>
This is styled with **html** and not markdown because there is no new line

This has a new line so it is styled with **markdown**
```

will renders as follows

<h4> An example header </h4>
This is styled with **html** and not markdown because there is no new line

This has a new line so it is styled with **markdown**.

#### Writing math equations in markdown

Math in markdown files that are written in LaTex is rendered using [Mathjax](https://www.mathjax.org/). Inline math symbols are set apart with a set of $ and math equations that have their own line are set apart with a set of $$.

In order to render the math equations correctly, the `<zero-md>` elements must have the `no-shadow` attribute, and one `<zero-md>` element must have the `id="math"` attribute. The `id="math"` is used later to link each `<zero-md>` element with a Mathjax CDN with the following code.

```
<script>
    math.addEventListener('zero-md-rendered', () => {
      var el = document.createElement('script');
      el.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js';
      document.head.appendChild(el);
    });
</script>
```

With this system of adding the links after the `<zero-md>` element has rendered the markdown file, the markdown file is first translated to `html` then converted with Mathjax.

For this reason, the way LaTex is written in markdown differs slightly from the default, and the symbols `\,`, `\_`, and `\~` in LaTex should be written as `\\,`, `\\_`, and `\\~` in the markdown file.

When the markdown is translated to `html`, the single `\` disappears, which removes the ability to properly convert the LaTex with Mathjax. By making the single `\` a double `\\`, when the markdown is translated, the `html` will have a single `\`, which will properly render.

#### How to write the paths and links

When the markdown file is rendered using the `<zero-md>` element, the element translates the file to `html`, which is read directly when viewing the `html` page. For this reason, the paths in the markdown files should be written relative to the `html` page, not relative to the markdown file.

For example, in the `template` markdown files, which is placed in multiple folders, the path to the `quickguide.html` file would normally be "../../quickguide.html". However, because the file is rendered into an `html` page that will be next to the `quickguide.html` page, you should write the path as only "quickguide.html." This is because "quickguide.html" is the path relative to the `html` page into which the markdown will be translated.

### Editing existing documentation

To edit existing documentation without creating new sections or `html` pages, go to the markdown file of the section that you want to edit and make your changes. While making changes, it can help to render the `html` page on a local server to see how your changes render. If you aren't seeing your changes to the markdown files render, try refreshing the `html` page you are rendering.

Once your changes have been pushed, the website documentation will render with the update. Due to caching in browsers, you may be able to see your changes more quickly if you clear your cache or view the website in incognito mode, which does not use cache.

### Adding new sections on the same `html` page

To add a new section of documentation in a documentation page, first find folder that corresponds to the `html` file that renders the page you want to change. Create a new folder with the title of the section you want to add, create a markdown file named `readme.md`, and place the `readme.md` file in the folder that you created. Write your new documentation section in this `readme.md` file.

To add the markdown file you have written to the `html` page, find the `html` file that renders the page you want to change. First locate the section `<section class="docsSection">` which contain `<span>` elements with `<zero-md>` elements in them.

Add your own <span> element with a <zero-md> element in it. The `<span>` element should have a unique `id` that corresponds to the section you have added, and the `<zero-md>` element should have a `src` attribute that links to the path to your markdown file.

When choosing an `id` for the `<span>` elements, consider that it will be used as a class in the navigation section. Some classes like `class="intro"` and `class="container"` have styles applied to them in other contexts, so try to choose a unique name for the `id`.

<span id="title_of_your_section">
    <zero-md src="path_to_the_markdown_file" no-shadow></zero-md>
</span>

After updating the `docsSection` of the `html` page, add the section you have written to the section `class="navigationSection"` in the same `html` page.

If the section you have written is a category on its own, create a new `<div>` and use a `<h4>` element as exemplified below.

```
<div>
    <h4 class="skipTo title_of_your_section">Label</h4>
</div>
```

If the section you have written is a subcategory of a category, group it together under the category's under the `<div>` element after the `<h4>` element and label it with a `<p>` element.

```
<div>
    <h4 class="skipTo section_1">Section #1</h4>
    <div>
        <p class="skipTo title_of_your_section">Label</p>
    </div>
</div>
```

Once you have updated the `docsSection` and the `navigationSection`, render the updated documentation page in a local server to see how it looks.

### Creating documentation or clinical test case pages

If you want to create a new documentation page, find and copy the `template.html` page in the documentation folder. If you want to create a new clinical test case page, find and copy the `template.html` page in the clinical folder. These pages will have the foundational `html` necessary for the documentation or clinical case page. Rename this file to describe your new documentation page.

Before creating the `html` page for the new documentation or clinical test case, you may want to begin by writing the documentation in markdown files. First, create a folder with the same name as the `html` page you want to create. In this folder, for each markdown file, create a new folder with a relevant name for the section and place a `readme.md` file inside that folder. Write your documentation for each section in these `readme.md` files.

Once you have created the markdown files you seek to render in `html`, there are three places in this file to find and update in order to create a new documentation or clinical test case page: the navigation bar in the header, the navigation section on the left of the documentation page, and the paths to the new markdown files from the `<zero-md>` element.

#### Updating the navigation bar

Find the section in the `template.html` page where there are `<div>` elements with the class `class="navSubLink"` as exemplified below:

```
<div class="navSubLink">
    <a href="references.html">References</a>
</div>
```

Copy one of these elements and re-label their `href` and label with the path and name of the new page you created respectively. Then, add the class `active` alongside the class `navSubLink` in the `<div>` element, so that the label in the navigation bar is highlighted when someone views that page. The new `<div>` element should resemble the following.

```
<div class="navSubLink active">
    <a href="your_page.html">Your page</a>
</div>
```

#### Changing the navigation section

In the `<section class="mainSection">` section, under `<section class="navigationSection">`, there is a template structure for the navigation section. Every new category is placed in its own `<div>` section, and category titles are labeled with the `<h4>` element. Subcategories are grouped together under a `<div>` after the `<h4>` element and labeled with a `<p>` element.

```
<div>
    <h4 class="skipTo section_1">Section #1</h4>
    <div>
        <p class="skipTo section_1_sub_section_1">Sub section #1</p>
        <p class="skipTo section_1_sub_section_2">Sub section #2</p>
        <p class="skipTo section_1_sub_section_3">Sub section #3</p>
    </div>
</div>
```

Other navigation sections may have slightly varying structures. The organization can depend on how the page is laid out and what presentation makes the most sense.

Every element in the navigtion section has the same class structure, `class="skipTo id"`. The first class is always `skipTo`, which styles the label and allows the element to act as a navigation link. The second class is the `id` of the `<span>` element that surrounds the `<zero-md>` element. More information on this can be found in the "Linking the markdown files with `<zero-md>`" section of this documentation.

When choosing an `id` for the `<span>` elements, consider that it will be used as a class in the navigation section. Some classes like `class="intro"` and `class="container"` have styles applied to them in other contexts, so try to choose a unique name for the `id` and check how the navigation section looks to proofread for styling issues.

#### Linking the markdown files with `<zero-md>`

In the `<section class="docsSection">`, the `template.html` page has a template strucutre setting up the example for linking the markdown files to the html page using the `<zero-md>` file. Every `<zero-md>` element is surrounded with a `<span>` element, which has the `id` that should be referenced to skip to the section written in the markdown file that is linked to the `<zero-md>` element.

The first `<zero-md>` element must have the `id="math"` attribute, but the following <zero-md> elements do not. Having at least one `<zero-md>` element with the `id="math"` attribute will allow any mathematical equations written in the markdown files to be renders correctly on the page using [Mathjax](https://www.mathjax.org/).

```
<span id="section_1">
    <zero-md id="math" src="template/section_1/intro/readme.md" no-shadow></zero-md>
</span>
<span id="section_1_sub_section_1">
    <zero-md src="template/section_1/sub_section_1/readme.md" no-shadow></zero-md>
    </span>
```

To link a markdown file to the `<zero-md>` file, change the `src` attribute to the path of the markdown file you wish to link.

Every markdown file associated to this new `html` page should represent a section in the `html` file. This way, the navigation section can link to all of the separate markdown sections through the `id` attribute of the `<span>` element. Structure the `<zero-md>` elements in the order that you want the markdown files to be rendered on the page.

When choosing an `id` for the `<span>` elements, consider that it will be used as a class in the navigation section. Some classes like `class="intro"` and `class="container"` have styles applied to them in other contexts, so try to choose a unique name for the `id`.

After this page has been modified, check how it displays on a local server. A few key places to check are: the navigation bar in the header, the navigation section, and the body of the documentation. When viewing the rendered `html` page in a local server, you can ctrl F for "#" and "$" to check for errors rendering headers or math equations respectively.

Once you are happy with this page, update the navigation bar in the headers of all the documentation and clinical test case files to add the new page you have created and update the landing page's [Documentation](https://simvascular.github.io/#documentation) section to include the new page of documentation you have created.

#### Updating the navigation bar in page headers

When adding a new `html` page, its path should be added to the navigation bar in the headers of the other documentation and clinical test case `html` files to keep the website's headers consistent.

If you are adding a documentation or user guide page, add the navigation element under the `<summary>` element that has the label "User Guides." The element will resemble the following: a `<div>` element with the `class="navSubLink` and an updated `href` link for the `<a>` directing to the new page.

```
<div class="navSubLink">
    <a href="path_to_html_file.html">Page_Name</a>
</div>
```

If you are adding a clinical test case page, add the navigation element under the `<summary>` element that has the label "Clinical Cases." The element will resemble the following: a `<div>` element with the `class="navSubLink` and an updated `href` link for the `<a>` directing to the new page.

```
<div class="navSubLink">
    <a href="path_to_html_file.html">Page_Name</a>
</div>
```

Once you have updated the navigation bars in the headers of the documentation and clinical test case ages, render the website on a local version to check the navigation links to make sure that they work correctly and that the order in which the page links appear in the navigation section is consistent throughout the headers.

#### Updating the landing page documentation section

Unlike the documentation and clinical test cases, the landing page of the SimVascular website is written purely in `html` and is not generated from `md` files. The landing `html` file is named `index.html`. You can find the documentation section of the landing page by searching for `id="documentation"`.

If you are adding the link to a new documentation or User Guide page, copy an anchor element from another link under the "User Guide" section. It may resemble the following `<a>` element with the following attributes: `class="docLinks"`, `target="_blank"`, and an `href` that has the path to the `html` file you have created. After the `<a>` element, add a `<br>` for styling consistency.

```
<a class="docLinks" target="_blank" href="documentation/name_of_html_file">Label</a><br>
```

If you are adding the link to a new clinical test case page, copy an anchor element from another link under the "Clinical Case Studies" section. It may resemble the following `<a>` element with the following attributes: `class="docLinks"`, `target="_blank"`, and an `href` that has the path to the `html` file you have created. After the `<a>` element, add a `<br>` for styling consistency.

```
<a class="docLinks" target="_blank" href="clinical/name_of_html_file">Label</a><br>
```

Try to keep the order of the pages in the Documentation section of the landing page the same as that in the navigation bar in the headers of the documentation pages for consistency. After updating the Documentation section, render the landing page in a local server to check how it looks and if the link paths are correct.

### Editing the landing page

Unlike the documentation and clinical test cases, the landing page is written purely in `html` and is not generated from `md` files.
