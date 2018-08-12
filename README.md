# CodeBase Website 3.0 (WIP)
### Before You Begin
First and foremost, thank you so much for helping out with the CodeBase website! Before getting started, it'd be helpful to check out this awesome guide on the [Hugo directory structure](https://www.jakewiesler.com/blog/hugo-directory-structure/) and the [Bootstrap docs](https://getbootstrap.com/docs/4.1/getting-started/introduction/)

---

### Run Instructions
1. Install [Hugo](https://gohugo.io/getting-started/quick-start/)
```
brew install hugo
hugo version
```
2. Start the Hugo Server
```
hugo server -D
```
Feel free to reach out to Cindy or Young with any questions about anything at all!

---

### CSS Crash Course
If you're looking to implement something, check first in case there's some prior art for it. Here are some commonly used CSS classes that might help you out:

**Sections**
- `.section`, `.section-title`, `.section-description`
 - Section padding and font styling for sections
- `.gray-section`, `.blue-section`
 - Background color and font color for major `.section` blocks
- `.full-width-section`
 - Pulls a section to be full width so that background can extend the entire width of the screen
 - Please place a `.container` for content in `.full-width-section`s

**Grid Cards**
- Check out `gridCard.css`
 - Very useful for any sort of grid-styled content

### Hugo Crash Course

The directory structure is hopefully easy to jump into! _Hopefully_ you don't need to worry about a lot of the implementation details (described below), but if you're blocked on progress or curious about how things work, then feel free to take a gander.


**Templating**
- The `layouts/` directory is _very_ important. We've set up most of the structure already, and it should be intuitive to jump in, but I would _highly_ recommend gaining some understanding of [Hugo Templates](https://gohugo.io/getting-started/quick-start/) first
- Layouts contains the html files that define the structure of each page
- Every page inherits from `layouts/_default/baseof.html` **if** you wrap things in `{{ define "main" }}`/ `{{ end }}`
- We have a "partials" directory to contain repeated pieces of code, e.g. the navbar, header, footer, etc.
- Styling works as usual with CSS - we have bootstrap set up but feel free to use or not use it

**Content**
- Content pages are defined in `content/`
- These define the _pages_ that exist on our website
- Content is primarily used to 1) map the directory structure to the site structure and 2) define basic page attributes
- More concretely, `nav.html` iterates over the `{{ .Pages }}` site variable (derived from `content/`), and each `.md` file defines its own `url` value in its [Front Matter](https://gohugo.io/content-management/front-matter/)

**Data**
- We're utilizing the `data/` folder for all of our wonderful data needs
- Please use yaml rather than toml or json
- Put all titles/body text in `data/` rather than directly in the html files for ease of access and maintenance
- Information in these values are accessed through `{{ .Site.data.FILE_NAME.KEY_NAME }}`
  - There are plenty examples of this in the core page templates!
- You can also do cool things like loop over elements in a list [(see more here)](https://gohugo.io/templates/data-templates/)

**Miscellaneous**
- There's a lot of _magic_ going on here. If you're confused, pattern matching existing skeleton code will be your friend

---

### FAQ
**What's happening to the old website?**
 - In an effort to rebrand the organization for the 2018-2019 school year, we're making a new website!
 - The old website will be archived :(

**Why are we using Hugo?**
 - It's got a _great_ templating engine and is relatively easy to use

**I'm really excited. How can I contribute more?**
 - Please message Cindy! We would love all the help we can get on building the site!

**I'm Stuck. What should I do?**
 - Try pattern matching existing content or Google searching
 - If you're spinning your wheels for unnecessarily long, please reach out to Cindy or Young!
