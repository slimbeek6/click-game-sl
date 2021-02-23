import React, { Component } from "react";
import BassCard from "./components/BassCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import bassists from "./bassists.json";

class App extends Component {
    state = {
        bassists: bassists
    };

    removeBass = id => {
        const bassists = this.state.bassists.filter(bassist => bassist.id !== id);

        this.setState({ bassists: bassists });
    };

    render() {
        return (
            <Wrapper>
                <Title>Play the Bassist</Title>
                {this.state.bassists.map(bassist => (
                    <BassCard 
                    removeBass={this.removeBass}
                    id={bassist.id}
                    key={bassist.id}
                    name={bassist.name}
                    image={bassist.image}
                    band={bassist.band}
                    location={bassist.location}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default App;