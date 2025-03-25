---
title: "How to Include Images in Hugo Posts"
date: 2023-08-18
description: "A guide to including images in Hugo posts with the PaperMod theme"
tags: ["hugo", "images", "guide"]
categories: ["tutorials"]
# To add a cover image to your post:
cover:
    image: "/images/example-cover.jpg" # Replace with your image
    alt: "Example Cover Image"
    caption: "Photo by Author"
    relative: false # When set to false, it uses the static folder directly
    hidden: false # Display cover image on post page
    hiddenInList: false # Display cover image in post lists
draft: false
---

## Introduction to Images in Hugo

This guide demonstrates various ways to include images in your Hugo posts.

### Method 1: Using Markdown Syntax (Simplest)

The simplest way to include an image is using Markdown syntax:

![Example Image](/images/example1.jpg)

### Method 2: Using Hugo Figure Shortcode

Hugo provides a built-in shortcode for more control:

{{< figure src="/images/example2.jpg" alt="Example Image with Caption" caption="This is a caption for the image" width="600px" >}}

### Method 3: Using HTML for Full Control

For maximum control, you can use HTML directly:

<div style="text-align: center; margin: 2rem 0;">
    <img src="/images/example3.jpg" alt="Centered Image" style="max-width: 80%; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
    <p style="font-style: italic; margin-top: 0.5rem;">A beautifully styled image with custom CSS</p>
</div>

### Method 4: Using PaperMod Gallery Feature

PaperMod supports a gallery shortcode:

{{< gallery >}}
{{< figure src="/images/gallery1.jpg" alt="Gallery Image 1" >}}
{{< figure src="/images/gallery2.jpg" alt="Gallery Image 2" >}}
{{< figure src="/images/gallery3.jpg" alt="Gallery Image 3" >}}
{{< /gallery >}}

## Image Placement Tips

1. **Store images in the static folder**: Place images in `/static/images/` and reference them as `/images/filename.jpg`

2. **Post-specific images**: For images related to specific posts, you can create subdirectories like `/static/images/posts/post-name/`

3. **Optimization**: Compress images before uploading to improve load times

4. **Responsive design**: PaperMod automatically makes images responsive, but you can control this with CSS

## Creating a New Post with Images

To create a new post with images:

1. Create your post markdown file in `content/posts/`
2. Upload your images to `static/images/`
3. Reference the images using any of the methods above
4. Include a cover image in the front matter if desired

That's it! With these techniques, you can easily include images in your Hugo posts. 
