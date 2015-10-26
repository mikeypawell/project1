## Getting set up on Heroku with Node + Mongoose

### Before you do anything
1) Let's remove the link to the repo we cloned and commit the starting point of our project in a local git repo. We can check the location of the remote repository by typing: `git remote -v`. In order to remove the link to the class repo, type: `git remote remove origin`. You can confirm this was successful with the first command.

If so, your app is still under version control with `git` but it only has a local repository. You can run `git status` to make sure. If not, just type `git init` to make it into one again. __Stop and commit your changes.__

2) Sign up for an account with heroku: https://www.heroku.com/

3) Install the heroku toolbelt - [https://toolbelt.heroku.com/](https://toolbelt.heroku.com/)

**(NOTE YOUR PROJECT MUST BE A GIT REPO TO CONTINUE.)**.

### Heroku Setup

4) Add a new remote to your project that points to Heroku's servers:

```bash
    heroku create
    //OR
    heroku create YOUR_APP_NAME
```

5) In your `server.js` file, modify `app.listen` to use `process.env.PORT` (this will be set, dynamically, by Heroku):

```javascript
    app.listen(process.env.PORT || 3000)
```

6) Tell heroku to use the mongolab addon. In your terminal, run:

```bash
    heroku addons:create mongolab
```

7) At this point, the command line may ask you to enter a credit card number. Heroku charges for some services, or if you go over some data limits. With the tools we're using and the size of our projects' data, everything should be free.  If you had to enter in a credit card, run the `heroku addons:create mongolab` command again. __You may need to wait a few minutes for mogolab to become active.__

8) Update your database connection to point to Heroku's database. Open `models/index.js` and add the following to the `mongoose.connect` method:

```javascript
    mongoose.connect( process.env.MONGOLAB_URI ||
                      process.env.MONGOHQ_URL || 
                      "YOUR OWN LOCAL URL HERE" )
```

Congrats! Your application knows what port to run on, and what database to connect to - you're almost all set up to work in "production" on Heroku's servers!

### Confirm your Dependencies

9) Double check your `package.json` to make sure that all your depenedencies are present. If something is missing install it.

Here are some common dependencies:  
``` javascript
    {
      "dependencies": {
        "body-parser": "^1.14.1",
        "ejs": "^2.3.4",
        "express": "^4.13.3",
        "express-session": "^1.11.3",
        "mongoose": "^4.1.5"
      }
    }
```

For example, if you're using body-parser but don't have it listed in your package.json `dependencies`, run the following:

```bash
    npm install body-parser --save
```

### Check the start script
10) Check a `start` script for your application in your `package.json`:

```javascript
...
  "scripts": {
    "start": "node server.js"
   }
...
```

This is assuming your main application file is called `server.js`. If your main file is called something else, adjust the script to use your file name.

### Check the Procfile
11) Notice we have a `Procfile` so that Heroku knows how to run your application. If you do not have a Procfile, create one:
    - Make sure you are in your main project directory (the same directory as `server.js`). Then run:  
``` bash
    touch Procfile
    echo "web: node server.js" >> Procfile
```

### Deploy!
12) Stop and commit. We've made a lot of changes!
``` bash
    git add . -A
    git commit -m "ready for heroku deploy attempt #1"
```

13) Now we can deploy:
``` bash
    git push heroku master
```

If you missed a step just ask for help. Otherwise you should be able to visit your application by saying the following:

```bash
    heroku open
```

## Debugging Tips

Here are some helpful commands for debugging your application on Heroku:

#### `heroku logs`
This command lists your most recent application server logs. Helpful for figuring out why your application may be crashing and burning.

#### `heroku run bash`
This command allows you to run terminal _on Heroku's servers_. This is a handy way for us to poke around and run commands on our application (like seeding the database, and checking that everything was installed correctly).
# project1
