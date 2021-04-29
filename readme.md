# Practice and Concepts

## requiring_dependencies

- When exporting script, there is a need to set <code> module.exports = the_variable </code>
  - And there are many ways to export the variables inside the file as shown in "math.js"

- when importing scripts, there is a need to do <code> const name = require('./script_name.js') </code>
  
- The "index.js" is like the "__init\_\_.py" file, where index.js is the entry point or the main file for the directory in JS

- You can import an entire directory by using "index.js":
  - All the subfiles are imported into "index.js", and then stored in a data structure and ultimately exported all together as one object, and then all the variables or functions are called from this one object. This is very similar to python as well. This is shown in "app.js"

## file_system

- You can use filesystems to create boilerplate files. i.e. <code> node boilerplate.js arg1 ... </code>
  - Note that there is a need to handle the argument being passed in, and how you want to add into the boilerplate is done through the use of node.js built in fs module to create files, and you can give it arguments through <code>process.argv[2]</code> where <code>process.argv = ['node', 'yourscript.js', ...]</code>, and thus the input variables are from the second index onwards.

## handling dependency basics

- Generally people do not upload "node_modules" folder because the size of the file is too big

- "package.json" contains the list of dependencies needed to run the code
  - Once we git clone a project on github, we can run <code>npm install</code> to install all the dependencies listed in the "package.json". A "node_modules" folder will then be created and the packages will be uploaded into it.
