![BroLogo](http://www.brocerystore.com/wp-content/uploads/2015/09/bro_TMlogo_black.png)

# Purpose

The purpose of this is to create materials for former and possibly future
web development students.  This is currently completely seperate from GA and
doest not fit GA standards for course materials.  This repo __will not__ meet
GA standards at any point, nor will any of the additional materials that follow.

If this is ever to be intergrated, this version will remain but not be
maintained.  Why? It allows me more freedom to go off in strange directions and
use colloquial, fun and language that would not otherwise have a place in
standard course materials.

Again why?

**FOR ALL THE LULZ**

I'm gonna ramble a bit, crack some jokes and have some fun. Maybe you'll pick
up some backbone along the way.

## Dependencies

Install with `npm install`.

-   [Webpack](https://webpack.github.io)
-   [Bootstrap](http://getbootstrap.com)
-   [Handlebars.js](http://handlebarsjs.com)
-   [Backbone](http://backbonejs.org/)
-   [Rick Astley](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
-   LULz

## Necessary Skills

-   Knowledge of basic MVC pattern and their parts
-   Some front end framework knowledge
-   Javascript
-   Maybe Rails? Idk, we'll see
-   A sense of Lulz
-   [Watching this video](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

## Dafaq is Backbone?

Ever heard of google? Seriously, if you found yourself asking that question
and didn't google it you're SOL and might as well stop reading now or go Google
it.

...
<br>
...

Seriously, I'll wait...

__Not playing, go Google it__

Good, Glad you're back.  I'm sure you read some stuff that you both did and
didn't understand.  I'm going to give you a quick explaination of Backbone so
we can be on the same page for the rest of this... Bro.

Backbone is a lightweight library but might as well be an MVC framework. Unlike
a ravenous pitbull it plays nicely with others.  This means that you can use
other frameworks or libraries (as long as they play nice as well) with Backbone
without having to deal with table-flipping bugs.

Another advantage is that you can use as much or as little backbone as you want.
Say you only want to deal with views, Backbone is your bro.  Say you only want
basic models, Backbone has your back.  Controllers, sure Backbone is like Bud
Light, down for whatever.  There are other goodies too like Events, Collections
and a Router.

Backbone is great for fighting the spaghetti monster and keeping your code
organized.

Business logic <-------         (Ah, love this seperation)             ------> UI

`"But Jason, I'm a sad SOB. I gots Pokemons to catch and cheetoz to eats, how hard is this?"`

As Rihanna once said [CAKE CAKE CAKE](https://www.youtube.com/watch?v=YxE75Otag1M)

## Enough Bull, Let's Do This

So you skipped the first section, nice you're pretty much a true developer (5
points Gryffindor).  Go back and read it you slacker.

As I said earlier Backbone is a lightweight library, that allows you to use
whatever parts you desire to help build your app. This freedom is a gift and a
curse.  It's great because allows you to build your project the way you want,
unfortunately it allows you to build the project anyway you want.

You'll have to create your directories and files manually. Everyone has a
different style but something similiar to this is what I will be using for this
app... Bro

```bash
scripts/
     index.js
     controllers/
         todo.js
     models/
         todo.js
     views/
         index.js
```

*Note: This structure is currently subject to change as this repo is being
developed if pain points and more convient ways to structure make themselves
apparent.

Obviously this is just the scripts directory, and we will be adding more files
and folders as we go, but this is a good starting place for most apps.

Obvious this is some sort to Todo app at least to start. We'll see where this
takes us.

I know you're itching to see some code. So lets dive in here.

# Model: Draw me like one of your French girls, Jack

![French Pokemon](http://cdn.smosh.com/sites/default/files/ftpuploads/bloguploads/draw-french-snorlax.jpg)

First off, don't be a derp.  Add this to you manifest `index.js`:

```js
const Backbone = require('backbone');
```

Add this snippit to your `scripts/models/todo.js` file:

```js
'use strict';

const app = {}; // create namespace for our app

  app.Todo = Backbone.Model.extend({
    // notice that Todo, Backbone and Model are capitaized
    defaults: {
      title: '',
      completed: false
    }
  });
```

You wrote your first model, nice bro! (Not really, you just made some copypasta
but whatever, if you don't tell anyone I wont either).

You probably want to know what the code means **SUCKS TO BE YOU!**

Just kidding, let's start with the first part:

```js
app.Todo = Backbone.Model.extend({
  // model stuff here
})
```

With Backbone you will see a common pattern.

```js
let foo = Backbone.<something>.extend({})
```

This extends the the Backbone <something> and all of its shiny cool inner
workings to your variable.  In our case it's the model.  We're extending the
Backbone model to `app.Todo`.

The stuff inside of our `Todo Model` sets the defaults for `title`, and `completed`.


### Shut Up and Do This

Spin up your server... If you don't know how and made it this far I'm just
impressed.  Here is a hint... it rhymes with `grunt serve`.

Copy and paste what we wrote in the model (you may need to change the `const` to
`var`).

Then create a new instance of a Todo with something like this:

```js
var todo = new app.Todo({title: 'Stop sucking', completed: false});
```

and test if it worked with `todo.get('title');`.  See the title?

![Look at it](http://lh4.ggpht.com/sqbX0-1A4YPYEE44m93mOGWKP_f1mfLMBNXoqpJA93NRoprNMMOPMMR-8fieVSRSk5dU_xVXwsevQ6IlPuCsOQ=s240)

If you don't see the title well, sucks to be you `rm -rf life`.  If you do try
setting another property in the todo with something like `todo.set('isDumb', 'Aye');`

Nice, you're pretty much a model ninja now. Play around with that for a bit, when
you're done move on to the next section.  We need to talk about collections then
we're done with the model layer... Kindof.

## Collections: Yes There's More Stop Whining



## [License](LICENSE)

Source code distributed under the Brogrammer license. Text and other assets
copyright Bros United, all rights reserved.
