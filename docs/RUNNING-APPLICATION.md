# Running your code

The next section outlines how to run the code and get your Javascript tests executing.

Before we dive in to the code lets first understand the folder and file structure so we know where everything is.

**NOTE:** Sometimes techies will use the word '**directories**' when referring to **folders** on your laptop.

## Exploring the files

By now Visual Studio Code should be open and you can see your code. If this isn't the case please go back to the [pre-requisites documentation](./PRE-REQUISITES.md) and follow through the steps.

It should look similar to the screenshot below:

![VS Code Directory](https://storage.googleapis.com/tech-returners-course/001-fundamentals-directory-structure.png "Directory structure")

On the left hand side of the screen you can see the explorer panel - here you can navigate through the directories and files. Simply click a file to open it.

#### package.json

Lets start by exploring the file called **package.json**

It has the following content:

```
{
  "name": "programming-fundamentals-001",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/techreturners/programming_fundamentals_001.git"
  },
  "author": "Tech Returners",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/techreturners/programming_fundamentals_001/issues"
  },
  "homepage": "https://github.com/techreturners/programming_fundamentals_001#readme",
  "devDependencies": {
    "jest": "23.6.0"
  }
}
```

The [file extension](https://en.wikipedia.org/wiki/Filename_extension) (thats the part that comes after the . in the file name) is of type JSON. [JSON](https://en.wikipedia.org/wiki/JSON) (pronounced "Jason") standards for Javascript Object Notation. Techies love an acronym! 

It is a standard way for defining a structure of data, it has keys and values. For example the file above has a key of **main** that has a string (text) value of **index.js**.

The keys are always string and define the name of the property and the values are usually strings (text), integers (numbers), booleans (true or false) or can be nested objects. An example of a nested object is the property called **scripts** its value is a nested object, denoted by the curly braces `{}` and that nested object has its own set of keys. One of which is **test** that has a string value of **jest**.

### What does this file actually do?

Remember we talked about installing packages and open source code created by other people? A key responsibility of this file is managing the installation of those open source pieces of code that we are going to use. Said another way, this file manages our [software dependencies](https://www.nexb.com/blog/introduction_to_software_dependencies.html).

Look for the **devDependencies** key. Notice it has a nested object where one of those items is called **jest** and its value is a string of **23.6.0**. This tells the Node Package Manager (NPM) that our software has a **dependency** on another piece of code called [jest](https://jestjs.io/) and we want **version** 23.6.0 to be installed.

The package.json also defines the **scripts** that we can do to run our application. Notice the **scripts** key has a nested object value that in turn has a key of **test** with a value of **jest**.

That section is telling us that we can run the `npm test` command and that will in turn invoke the **jest** command.

### Using the package.json to install dependencies

Now we know what the file is responsible for we can get it to automatically install our dependencies.

To do this, open up your terminal and make sure you are in the **programming_fundamentals_001** directory and then run:


```
npm install
```

This will install the required dependencies and you'll see a new directory get created called **node_modules** - this is where all the open source code we are using lives. You should very rarely have to edit any code in there.

You should see it process all the required files and output a message similar to the following:

```
added 617 packages in 12.136s
```

#### bookshop_utils.js

Within the app directory you'll find a file called the **bookshop_utils.js**. This file contains useful functions which might be used by a bookshop application.

The file contains the following code:

```
function addVAT(price) {
    return price + (0.2 * price);
}

module.exports = {
    addVAT
};
```

## Coding Tasks

Now you're ready to get started on the coding tasks. In your pairs, head on over to the [coding tasks and get started](./TASKS.md).



