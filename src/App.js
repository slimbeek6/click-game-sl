import React, { Component } from "react";
import BassCard from "./components/BassCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import pictures from "./bassists.json";

class App extends Component {
    state = {
        score: 0,
        topScore: 0,
        images: pictures,
        clicked: []
    };

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

    clickBass = (event) => {
        event.preventDefault();
        let id = event.target.getAttribute("id");
        console.log(id);
        this.clickedPic(id);
        this.reorderPictures();
    }

    render() {
        return (
            <div>
            <Navbar score={this.state.score} topScore={this.state.topScore}/>
            <Wrapper>
            
                    {this.state.images.map(bassist => (
                        <BassCard 
                            clickBass={this.clickBass}
                            id={bassist.id}
                            key={bassist.id}
                            name={bassist.name}
                            image={bassist.image}
                            band={bassist.band}
                            location={bassist.location}
                        />
                    ))}
            
            </Wrapper>
            </div>
        );
    }
}

export default App;