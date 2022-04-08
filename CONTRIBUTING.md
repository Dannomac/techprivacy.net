# Contributing  
If you would like to contribute to techprivacy.net feel free to create an issue or open a pull request.  
Help in any form is appreciated.  

## What you'll need
* A working jekyll install (instructions can be found at [jekyllrb.com/docs/installation](https://jekyllrb.com/docs/installation/))
* Basic markdown knowledge

# Contributing
A good first contribution is to fix any issues with documentation or fix spelling/grammar mistakes on the website.  

# Editing a page  
To edit a page on the website, find it in the `pages` directory.  
It can be edited using Markdown.  
Optionally HTML can be inserted if necessary.

# Creating a new page  
To create a new page in Jekyll, create a new file ending in .md in the `pages` directory.  
It can then be edited using Markdown.  
Before you start editing the page, ensure you have included your front matter.  
This tells jekyll some basic information about your file.  
You can copy and paste it from the example below.


| Name      | Use                                                         | Example                     |
|-----------|-------------------------------------------------------------|-----------------------------|
| layout    | Tells Jekyll what layout the file uses                      | `layout: default`           |
| title     | Tells Jekyll what the title of your page is                 | `title: My title`           |
| permalink | Tells Jekyll what URL you want the file to be accessible from | `permalink: /catagory/item` |  

```
---
layout: default
title: Your great title
permalink: /category/item
---
```

# Submitting a pull request  
Once you have made your changes and tested them, you can submit a pull request.  
Your changes will be reviewed and either approved or rejected.  
You may be asked to make changes before a decision in made.  
If your pull request is approved your changes will go live shortly after.