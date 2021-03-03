# Bassist Click Game

## Summary

This application is a small react application that runs a game where the user tries to click all 12 famous bassists in a row without any repeats:

![Picture of Website](./assets/picofsite.png)

* [See Live Site](https://nameless-wildwood-28032.herokuapp.com/)

## Key Pieces of Code

The key to this application running is the use of a global state to track pictures, add and edit attributes to those pictures, and track the actions of the user relative to the pictures.  In order to do this, we establish the state on the Application's main page:

```
class App extends Component {
    state = {
        score: 0,
        topScore: 0,
        images: pictures,
        clicked: []
    };
```

Once we have established the state, we need to be able to show the user their current score, as well as their top score. To do this, we pass the score and topScore state values to a Navbar component as props:

```
<Navbar score={this.state.score} topScore={this.state.topScore}/>
```

We then need to create the actual meat of the game, which is the user clicking on a picture, and the application testing whether that picture had been clicked previously:

```
clickedPic = id => {
    let clicked = this.state.clicked;
    let score = this.state.score;
    let topScore = this.state.topScore;

    if (clicked.includes(id)) {
        clicked =[];
        score =0;
    } else {
        clicked.push(id);
        score +=1;
    }
   
    if (score > topScore) {
        topScore = score;
    }
    this.setState({ clicked: clicked, score: score, topScore: topScore});
};
```

Finally, we need to create a script to scramble our pictures, as well as a single hook function within the page to run the application:

```
reorderPictures = () => {
    let pictures = this.state.images;
    for (let i= pictures.length -1; i>0; i--) {
        let j = Math.floor(Math.random()*(i-1));
        let swap = pictures[i];
        pictures[i] = pictures[j];
        pictures[j] = swap;
    }
    this.setState({pictures: pictures})
}

clickBass = (event) => {
    event.preventDefault();
    let id = event.target.getAttribute("id");
    console.log(id);
    this.clickedPic(id);
    this.reorderPictures();
}
```

<hr>

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [React](https://reactjs.org/)
* [Bootstraps](https://getbootstrap.com/)

## Licenses

 
The MIT License (MIT); Copyright 2011-2020 Twitter, Inc.; Copyright 2011-2020 The Bootstrap Authors

## Authors

### **Shaun Limbeek** 

- [Link to Github](https://github.com/slimbeek6/)
- [Link to LinkedIn](https://www.linkedin.com/in/shaun-limbeek/)
- [Link to Portfolio](https://afternoon-temple-06204.herokuapp.com/)