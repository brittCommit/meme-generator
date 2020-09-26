import React, {Component} from "react"

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state ={
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                console.log(memes[0])
                this.setState({ allMemeImgs: memes })
            })
    }

    render() {
        return (
            <div>
                <form className="meme-form">
                <input 
                    type="text" 
                    name="topText" 
                    value={this.state.topText} 
                    placeholder="Top Text"
                    onChange={this.state.topText}
                />
                <br></br>
                <input 
                    type="text" 
                    name="bottomText" 
                    value={this.state.bottomText} 
                    placeholder="Bottom Text"
                    onChange={this.state.bottomText}
                />
                    <button>Generate Meme</button>
                </form>
            </div>
        )
    }
}

export default MemeGenerator