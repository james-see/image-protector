author: James Campbell date: July 2013


### Congratulations on wanting to protect your images online. 

The goal of this project is to make it as easy as possible to _somewhat_ protect the images on your site. If you really don't want people to steal your images, don't post them on the web. That being said, let's move on:

There are a few things you need access to:

1. Your server where your domain is hosted. 
You need to be able to upload files to your server. There are workarounds for this but to make it as easy as possible server access is required
2. Your stylesheet (example: styles.css).


### Initial setup

I include an example html file to get you started. The file is labeled 'example.html' so you can't miss it.
You will notice that everything works with a div wrapped around an img tag with a class of 'protected' and 'unprotected' which are referenced in the separate style.css file and include the specific media targeting for mobile devices to disallow touch events on images.

### Disabling right-clicking on images.

This is a simple snippet of javascript. I use jquery for brevity in the example.js file. It turns off right clicking of any img tage with class named 'protected'. 

Here is the code:

	function NoClick() //turns off right clicking of mouse on desktops for any img with class named protected
	{

	$('body').on('contextmenu', '.protected', function(e){ return false; }); 
	}

### Disabling long-touch menu (which allows saving) on mobile

This is a little more involved because you need separate functions for android, firefox's mobile browser, and apple devices.
The code for apple devices is easiest, just add 