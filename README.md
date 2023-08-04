# SimVascular Website

This is the repository for the SimVascular website.

You can use the following table with links to quickly skip to sections.

<table>
        <tr>
                <th>
                        Updating the landing page     
                </th>
                <th>
                        Updating the documentation
                </th>
        </tr>
        <tr>
                <th>
                        <a href="#updating-the-recent-news-section">The Recent News section</a>
                </th>
                <th>
                        <a href="#editing-existing-documentation">Editing existing documentation</a>
                </th>
        </tr>
        <tr>
                <th>
                         <a href="#updating-the-capabilities-section">The Capabilities section</a>
                </th>
                <th>
                        <a href="#adding-new-sections-on-the-same-html-page">Adding new sections</a>
                </th>
        </tr>
         <tr>
                <th>
                        <a href="#updating-the-team-section">The Team section</a>
                </th>
                <th>
                        <a href="#creating-new-user-guide-or-clinical-test-case-pages">Creating new documentation pages</a>
                </th>
        </tr>        
</table>

If markdown does not seem to be rendering properly, check out the <a href="#notes-on-writing-markdown-files">Notes on writing markdown files</a> section.

## Updating the documentation

Thank you for updating SimVascular's documentation.

The SimVascular website user guides can be found in the documentation folder, and the SimVascular website clinical test cases can be found in the clinical folder. In each folder, there are `html` files and their corresponding folder, which share the same name. For example, the folder associated with the `quickguide.html` file is named quickguide.

In each folder, there are markdown files from which the content in the `html` files is generated. [Markdown](https://daringfireball.net/projects/markdown) is a lightweight markup language with plain text formatting syntax that can be editied using a text editor.

The markdown files are accessed and translated into `html` through the `<zero-md>` element, which is placed in the `html` file. Documentation on `<zero-md>` can be found [here](https://zerodevx.github.io/zero-md/).

Before editing, you should first fork **simvascular.github.io** to your own repository and sync it with https://github.com/SimVascular/simvascular.github.io.

### Notes on writing markdown files

Because the markdown files are rendered through the `<zero-md>` element, there are a few specifications to ensure that the markdown is rendered correctly. These are detailed below.

#### Naming all documentation markdown files "readme.md"

Because the SimVascular website is hosted directly from github.io, markdown files that are not named `readme.md` are not considered by the github.io compiler even if they are linked in the rendered `html` page. For the markdown file to be read by github.io when compiling the website, it must be named "readme.md."

In order to differentiate between the different markdown files all titled "readme.md," the markdown files are placed in their own folders.

#### Embedding HTML in markdown files

Markdown is very compatible with `html`, so you can use `html` and markdown interchangebly in a markdown file, and it will render `html` correctly. However, there are a few places where the languages may not render correctly.

For one, you cannot use markdown styling inside `html` elements.

For example:

`<h5> An example **header** </h5>` will display as

<h5> An example **header** </h5>

instead of bolding the word "header" because the markdown styling with the \*\* to signify bolding was placed inside the `<h5>` element, and markdown styling does not render inside `html` elements.

To still be able to bold the word that you want inside an `html` element, you can use the `html` styling. In this case, instead of writing `<h5> An example **header**</h5>`, which will not render correctly, you can write `<h5> An example <b>header</b></h5>` where `<b>` is the element to bold words in `html`.

Another detail to make sure the page renders the styling correctly is to add new lines between code in html and in markdown.

For example, this code

```
<h5> An example header </h5>
This is styled with **html** and not markdown because there is no new line

<h5> An example header </h5>

This has a new line so it is styled with **markdown**.
```

will renders as follows:

<h5> An example header </h5>
This is styled with **html** and not markdown because there is no new line

<h5> An example header </h5>

This has a new line so it is styled with **markdown**.

Notice how, in the example above, the new line is necessary for the markdown styling to apply.

A similar detail to look out for is indentation in markdown. Indenting a section of code twice in markdown will render it as though it were code.

        This is an example of an indented piece of code.

While this is helpful, the way markdown is rendered will not render `html` elements or markdown styling in this indented section.

        For example, this will not render as **bold** despite the bold markdown styling
        <b>HTML</b> styling does not render either.

This sensitivity to new lines also applies when writing with `html` elements, which is usually written with indents. You can have indents in when writing `html`, but if you do, there cannot be an extra space between the elements.

For example, this code

```
<ul>
    <li>This renders correctly because there is no extra space between the previous html element and the current one.</li>

<li>This will render correctly even though there is an extra space because there is no indent.</li>

    <li>This will not render correctly because there is an extra space between the previous html element and the current one and an indent.</li>

<ul>
```

will render as

<ul>
    <li>This renders correctly because there is no extra space between the previous html element and the current one.</li>

<li>This will render correctly even though there is an extra space because there is no indent.</li>
    
    <li>This will not render correctly because there is both an extra space between the previous html element and the current one and an indent.</li>

<ul>

To check that the markdown you have written will render correctly, you can render it through the `<zero-md>` element and open the `html` page with a local server.

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

#### Notes on paths and links

##### Relative paths in markdown files

When the markdown file is rendered using the `<zero-md>` element, the element translates the file to `html`, which is read directly when viewing the `html` page. For this reason, the paths in the markdown files should be written relative to the `html` page, not relative to the markdown file.

For example, in the `template` markdown files, which is placed in multiple folders, the path to the `quickguide.html` file would normally be "../../quickguide.html". However, because the file is rendered into an `html` page that will be next to the `quickguide.html` page, you should write the path as only "quickguide.html." This is because "quickguide.html" is the path relative to the `html` page into which the markdown will be translated.

A note about referencing `id` attributes in anchor links:

##### Referencing `id` attributes

Anchor links in markdown files can reference the following `id` attributes:

1. `id`s that are inside the same markdown file
2. `id`s that are in the `<span>` elements surrounding `<zero-md> elements` inside the same `html` file
3. `id`s that are in the `<span>` elements surrounding `<zero-md> elements` inside other `html` files
4. All `id`s that are referenced in the landing page

They cannot, however, reference `id`s that are inside other markdown files.

##### Image paths on github.io

For simplicity between paths, a majority of images are referenced with their global path. An example of this path is displayed below.

```
<img src="/documentation/quickguide/intro/images/sv-pipeline.png">
```

On SimVascular's website, this will render correctly. However, if you have forked the simvascular.github.io and build and run the page through your github account, the images will not render correctly. This is because the fork you have made is a Project site instead of a User or Organization site. The difference between the two is detailed [here](https://www.tracktownsoftware.com/jekyll/github/2020/12/22/GitHubPagesUserVsProjectSites.html).

To still be able to view images, there are two options.

1. Rename your fork of simvascular.github.io to your_github_username.github.io to make your fork a User site instead of a Project site.

2. View your fork of the website from a local server instead of viewing it when it is deployed from your account with github pages.

#### Other notes for writing markdown

Markdown is sensitive to spaces and new lines. Headers without a space after the last "#" will not render correctly.

For example, this code

```
#####This will not render as a header because there is no space.

##### This will render because there is a space
```

will render as

#####This will not render as a header because there is no space.

##### This will render because there is a space.

Markdown is also sensitive to new lines. Only having an extra space between two paragraphs will render a distinct paragraph.

For example, this code

```
This will be
in the same paragraph

This will be

in a different paragraph.
```

will render as

This will be
in the same paragraph.

This will be

in a different paragraph.

Notice in the example above that the extra space creates a distinct paragraph.

To check that the markdown you have written will render correctly, you can render it through the `<zero-md>` element and open the `html` page with a local server.

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

Once you have updated the `docsSection` and the `navigationSection`, you can render the updated documentation page in a local server to see how it looks.

### Creating new documentation pages

If you want to create a new user guide page, find and copy the `template.html` page in the documentation folder. If you want to create a new clinical test case page, find and copy the `template.html` page in the clinical folder. These pages will have the foundational `html` necessary for the user guide or clinical case page. Rename this file to describe your new documentation page.

Before creating the `html` page for the new user guide or clinical test case, you may want to begin by writing the documentation in markdown files. First, create a folder with the same name as the `html` page you want to create. In this folder, for each markdown file, create a new folder with a relevant name for the section and place a `readme.md` file inside that folder. Write your documentation for each section in these `readme.md` files.

Once you have created the markdown files you seek to render in `html`, there are three places in this file to find and update in order to create a new user guide or clinical test case page: the navigation bar in the header, the navigation section on the left of the documentation page, and the paths to the new markdown files from the `<zero-md>` element.

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

Once you are happy with this page, update the navigation bar in the headers of all the user guide and clinical test case files to add the new page you have created and update the landing page's [Documentation](https://simvascular.github.io/#documentation) section to include the new page of documentation you have created.

#### Updating the navigation bar in page headers

When adding a new `html` page, its path should be added to the navigation bar in the headers of the other user guide and clinical test case `html` files to keep the website's headers consistent.

If you are adding a user guide page, add the navigation element under the `<summary>` element that has the label "User Guides." The element will resemble the following: a `<div>` element with the `class="navSubLink` and an updated `href` link for the `<a>` directing to the new page.

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

Once you have updated the navigation bars in the headers of the user guide and clinical test case pages, render the website on a local version to check the navigation links to make sure that they work correctly and that the order in which the page links appear in the navigation section is consistent throughout the headers.

#### Updating the landing page documentation section

Unlike the user guide and clinical test case pages, the landing page of the SimVascular website is written purely in `html` and is not generated from `md` files. The landing `html` file is named `index.html`. You can find the documentation section of the landing page by searching for `id="documentation"`.

If you are adding the link to a new User Guide page, copy an anchor element from another link under the "User Guide" section. It may resemble the following `<a>` element with the following attributes: `class="docLinks"`, `target="_blank"`, and an `href` that has the path to the `html` file you have created. After the `<a>` element, add a `<br>` for styling consistency.

```
<a class="docLinks" target="_blank" href="documentation/name_of_html_file">Label</a><br>
```

If you are adding the link to a new clinical test case page, copy an anchor element from another link under the "Clinical Case Studies" section. It may resemble the following `<a>` element with the following attributes: `class="docLinks"`, `target="_blank"`, and an `href` that has the path to the `html` file you have created. After the `<a>` element, add a `<br>` for styling consistency.

```
<a class="docLinks" target="_blank" href="clinical/name_of_html_file">Label</a><br>
```

Try to keep the order of the pages in the Documentation section of the landing page the same as that in the navigation bar in the headers of the documentation pages for consistency. After updating the Documentation section, render `index.html` in a local server to check how it looks and if the link paths are correct.

## Updating the landing page

Thank you for updating SimVascular's landing page.

Unlike the user guide and clinical test case pages, the landing page is written purely in `html` and is not generated from markdown files.

The landing page using styling from [Bootstrap](https://getbootstrap.com/), a library for responsive layout because we want the website to be as compatible with mobile devices as possible.

### Updating the Capabilities section

The capabilities section is styled with Bootstrap for compatability with mobile devices.

Every new section of capabilities has its own `<ul>` element, with the following classes `class="col-lg-6 col-12 p-5"`. In each `<ul>` element, the first `<li>` element is the header for that capability. This element has the class `class="capabilitiesHeader"`.

The following `<li>` elements have an icon element
`<i class="fa-sharp fa-solid fa-check"></i>`, which displays the checkmark, and text follows the `<i>` element to describe the sub-capability.

An example structure is as follows:

```
<ul class="col-lg-6 col-12 p-5">
    <li class="capabilitiesHeader">
        The header of the capability section
    </li>
    <li>
        <i class="fa-sharp fa-solid fa-check"></i>
        The label for the sub-capability
    </li>
    <!-- other <li> elements -->
</ul>
```

If you want to add sub-categories under the sub-capability, you can add the class `<li class="indented">` to the `<li>` element.

An example structure is as follows:

```
<li>
    <i class="fa-sharp fa-solid fa-check"></i>
    The label for the sub-capability
</li>
<li class="indented">
    <i class="fa-sharp fa-solid fa-check"></i>
    The label for the sub-sub-capability
</li>
```

After updating the Capabilities section, render `index.html` in a local server to check how it looks and if the presentation is how you intended.

### Updating the Applications section

The applications section is styled with Bootstrap for compatability with mobile devices.

Every section for a new application is set up the same way. There is a `<div>` with the following classes `class="col-lg-4 col-md-6 col-12"`. Then, there is an `<div class="applicationsHeader">` element, followed by a `<h2>` element with the name of the SimVascular application.

After the `<div class="applicationsHeader">`, there is an `<div class="applicationsText">` element, which is followed by a `<p>` element that contains the text describing the SimVacular application.

An example structure is as follows:

```
<div class="col-lg-4 col-md-6 col-12">
    <div class="applicationsHeader">
        <h2>SimVascular</h2>
    </div>
    <div class="applicationsText">
        <p> An interactive application for implementing all components
        of the image-based pipeline</p>
    </div>
</div>
```

To update the content under an application, change the text inside the `<p>` element.

To create a new section for a new application, copy the entire `<div>` as encoded above, and modify the `<h2>` element text content and the `<p>` element text content.

To create a new row, add another `<div>` element with the following classes `<div class="row justify-content-center">`. For information on the column and row classes in these `<div>` elements, visit [Bootstrap's documentation on rows and columns](https://getbootstrap.com/docs/5.3/layout/columns).

After updating the Applications section, you can render `index.html` in a local server to check how it looks and if the presentation is how you intended.

### Adding pictures to the Gallery section

The JavaScript behind the gallery section can be found in `home.js`, but this does not need to updated to add a picture to the Gallery section.

To add pictures, there are two places to add: the picture element and the element for the dots displayed under the gallery images.

The structure of each gallery image is displayed as follows. The image and caption are surrounded by a `<div>` with the classes `class="slides picSlides"`. Inside that `<div>`, there is an `<img>` with a `src` that links to the image, which should be placed with the other gallery images in the `img/gallery/` folder. There is also style applied to the image specifying `style="width:100%"`. After the image in the `<div>` is another `<div>` with the class `class="caption"`, and the text content in that `<div>` should describe the image.

An example of this structure is shown below. To add a new picture, first add this slide in the order you want it to appear in the carousel inside the `<div class="slideshow-container">`.

```
<div class="slides picSlides">
    <img src="pathToImage" style="width:100%">
    <div class="caption">Caption for your image</div>
</div>
```

After adding the new pictures, update the number of dots under the carousel by copying the `<span class="dots picDots" onclick="currentPicSlide(#)"></span>` element and changing the number inside currentPicSlide(#) to the next integer. Place this new `<span class="dots picDots">` element alongside the other `<span class="dots picDots">` elements.

After doing so, make sure that the number of `<span>` elements matches the number of pictures in the gallery, and that the numbers in currentPicSlide(#) are in ascending order.

For example, if there are three pictures, the dots `html` section should resemble

```
<div class="dotsContainer">
    <div style="margin:auto; width: fit-content;">
        <span class="dots picDots" onclick="currentPicSlide(0)"></span>
        <span class="dots picDots" onclick="currentPicSlide(1)"></span>
        <span class="dots picDots" onclick="currentPicSlide(2)"></span>
    </div>
</div>
```

To change pictures in the gallery, change the `src` path in the `<img>` element, and update the caption to a relevant description of the new picture.

After updating the Gallery section, you can render `index.html` in a local server to test scrolling through the gallery and check that the presentation is as you intended.

### Updating the Recent News section

Each news panel is set up the same way. There is a `<div>` with the class `class="newNews"` that contains the panel.

Inside the `<div>`, there is a `<div>` with the class `class="row"`, which creates a row that contains the news label on the left and the news date on the right. In the `<div class="row">`, there is a `<div class="col-sm-6 col-12 news_label">`, which contains the label of what type of news is being displayed. The label has two parts: a relevant icon and a description of the label.

The icons used in this website come from [fontawesome](https://fontawesome.com/search?o=r&m=free).

For example, to label the news as an "Event," a calendar icon from fontawesome is used and the description is "Event." The `html` code for this would resemble the following.

```
<div class="col-sm-6 col-12 news_label">
    <i class="iconInHeader fa-regular fa-calendar"></i>
    Event
</div>
```

Additionally in the `<div class="row">` is the `<div>` for the date of when the news is relevant, which has the classes `<div class="col-sm-6 col-12 news_label">`. Inside this `<div>`, there is a `<p>` element, with the date of when the event will take place.

The `html` code for this would resemble the following.

```
<div class="col-sm-6 col-12 news_date">
    <p>Month Start_Date - End_Date, YEAR</p>
</div>
```

After the `<div class="row">`, there is a `<div>` with the class `class="news_name"`. This section is for the name/label of the news. Inside the `<div>`, there is an anchor element with a link to a relevant website regarding more information on the news.

For example, for a workshop, the code for this section would resemble

```
<div class="news_name">
    <a target="_blank" href="https://www.cmbbe-symposium.com/2023/workshops/">
        Workshop at the CMBBE symposium
    </a>
</div>
```

After the `<div class="news_name">`, there is a `<div>` with the class `<div class="news_place">`, which describes where the news takes place.

For example, if a workshop took place in Paris, France, the code for this section would resemble

```
<div class="news_place">
    Takes place in Paris, France
</div>
```

All put together, the new panel for recent news would have the following code.

```
<div class="newNews">
    <div class="row">
        <div class="col-sm-6 col-12 news_label">
            <i class="iconInHeader fa-regular fa-calendar"></i>
            Event
        </div>
        <div class="col-sm-6 col-12 news_date">
            <p>MAY 3 - 5, 2023</p>
        </div>
    </div>
    <div class="news_name">
        <a target="_blank" href="https://www.cmbbe-symposium.com/2023/workshops/">
            Workshop at the CMBBE symposium
        </a>
    </div>
    <div class="news_place">
        Takes place in Paris, France
    </div>
</div>
```

To update information in the Recent News section, update the following five places when applicable:

1. The relevant icon for the news type (ex: a calendar icon)
2. The description of the news type (ex: "Event")
3. The date the news takes place (ex: MAY 3 - 5, 2023)
4. The name of the news (ex: Workshop at the CMBBE symposium)
5. The place the news takes place (ex: Takes place in Paris, France)

After updating the Recent News section, you can render `index.html` in a local server to check how it looks and if the presentation is how you intended.

### Updating the Team section

To add a new profile in the Team section, copy the template code below and change the code in the following places:

1. Replace `href="path_link"` with a relevant link that would give the user more information on the person. This could be a link to an institutional profile page or a LinkedIn profile.

2. Replace `src="image_source"` with the path to an image of the person. Images for these sections would be placed in the `img/team/` folder. The dimensions of this image must be a perfect square, so that the profile icon is circular.

3. Replace `alt="alt_of_image"` with a description of what the image is showing. This alternate description will only show if the website cannot access the image.

4. Replace `name_of_person` with the first and last name of the person you want to add.

```
<div class="col-md-4 col-6">
    <div class="team-item">
    <div class="team-triangle">
        <a href="path_link" target="_blank">
        <div class="team-content">
            <img src="image_source" alt="alt_of_image">
            <div class="team-hover text-center"  style="cursor:pointer">
            <p style="font-size: 17px;">name_of_person</p>
            </div>
        </div>
        </a>
    </div>
    </div>
</div>
```

Place your modified code alongside the other `<div class="col-md-4 col-6">` elements in the order that you wish for the team member to appear in.

After updating the Team section, you can render `index.html` in a local server to check if the presentation is how you intended and that the profile links are functional.

### Updating the Institutions or Acknowledgements section

To add an institution or acknowledgement, find the Institutions or Acknowledgements section respectively. Copy the code below and change it in the following places:

1. Replace `src="image_source"` with the path to image logo of the institution or acknowledgement. Logos for these sections would be placed in the `img/institutions/` folder.

2. Replace `alt="alt_of_image"` with a description of what the image is showing. This alternate description will only show if the website cannot access the image.

```
<div class="col-sm-6 col-12 creditContainer">
    <img class="creditImage" src="image_source" alt="alt_of_image"></img>
</div>
```

Place your modified code alongside the other `<div class="col-sm-6 col-12 creditContainer">` elements in the order that you wish for institution or acknowledgement to appear in. These elements should all be placed inside the `<div class="row creditsRow">`.

After updating the Institutions or Acknowledgements section, you can render `index.html` in a local server to check if the presentation is how you intended.

### Adding new sections

Each section is set up the same way. There is a `<div>` element with the class `class="section"` or `class="everyOtherSection"`.

The landing page has a color scheme in which every other section has the `background-color: var(--lightbluegrey)`. This is manually done by alternating between applying the class `<div class="section"> `and `<div class="everyOtherSection">` to the landing page sections. When adding a new section, make sure to update this class in every section to maintain an alternating pattern and keep the landing page consistent.

After that `<div>` element, there is a `<div class="newSectionHeader">` with an `<h1>` element in it. The `<h1>` element has an `id` that the navigation bar in the header of the landing page uses to skip to that section of the page.

After `<div class="newSectionHeader">`, there is a `<div class="newSectionContent">` which is the `<div>` element that contains the content of the section. In this `<div>`, you can add what you wanted in your new section.

This structure resembles the following

```
<div class="section">
    <div class="newSectionHeader">
        <h1 id="section_id">Title of Section</h1>
    </div>
    <div class="newSectionContent">
        <!-- The content of the section -->
    </div>
</div>
```

Once you have created the new section in `index.html`, update the navigation bar in the header. To do so, find the `<div id="navigationSection">`. To add a new navigation link, copy the following code:

```
 <tr class="skipTo section_id">
    <th>
        <p class="skipItem">Title of Section</p>
    </th>
</tr>
```

The `<tr>` element represents a new row in the `<table>` element which defines the navigation bar. The `<tr>` element must have two classes. The first class must be `skipTo`, which styles the row and adds functionality to the navigation link. The second class must be the `id` attribute of the `<h1>` header of your new section. The `<p>` element must have the class `class="skipItem"`, a class which styles the navigation link.

After adding a new section, you can render `index.html` in a local server to check if the navigation bar link works and if the section displays as you intended.
