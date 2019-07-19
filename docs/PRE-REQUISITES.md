# Fork and Clone the code

All the code examples we use throughout the course are hosted on [GitHub](https://github.com).

[GitHub](https://github.com) is an online service that provides remote Git repositories. Essentially this means we can write our code on our laptops then when we're ready we can **push** that code up to the GitHub servers.

It means that if something breaks on our laptop or similar issues then we know we ALWAYS have a copy of the code on GitHub.

This also aids sharing - for example lets say you've done a bit of code and you want to share this with people. Prior to version control systems like Git, you would either show them your laptop (not always possible if you aren't in the same room), you might put your code on a USB (pen) drive (or even a floppy disk when I started!) or you might email your code etc.

But what happens if you change code often - do you keep sharing the pen drive? Keep sending lots of emails? Use a different filename for every update? MyCode, MyCodeNew, MyCodeNewNew - I'm sure we've all done this!

Version control systems remove all this and allow us to share code easily.

By this stage you should already have a GitHub account. Please make sure your Tech Coach knows your GitHub Username.

First, **fork** the example code from the [TechReturners Repositories](https://github.com/techreturners) that are on GitHub.

In GitHub, [forking](https://help.github.com/articles/fork-a-repo/) means taking a copy of someone else's code and storing it in your own account.

Firstly open the following web page:

https://github.com/techreturners/programming_fundamentals_001

Once the page has loaded click the **Fork** button located towards the top right of the screen. You should see a popup that looks similar to the image below:

![Fork repo](https://storage.googleapis.com/tech-returners-course/001-fundamentals-fork-repo.png)

Click the button that matches your GitHub username.

Once the fork process has completed (you'll be taken to a new screen) you can **clone** down the code. To do this run the following command, replacing the **USERNAME** with your own GitHub username:

```
git clone https://github.com/USERNAME/programming_fundamentals_001.git
```

When you run this command, you will be asked to enter your Github username and password, and then all the code on the GitHub servers will automatically be brought down and stored on your laptop. Imagine this as your way of taking the Pen drive from GitHub.

Once the above process has completed you can change in to the **programming_fundamentals_001** folder and open up Visual Studio Code. To do this:

```
cd programming_fundamentals_001
```

And then

```
code .
```

## Next steps

Well done! Now you have got your laptop all ready to go, we're in a position to start running the application and get our hands on writing code.

Head on over to the [instructions for running the application and tests](./RUNNING-APPLICATION.md).
