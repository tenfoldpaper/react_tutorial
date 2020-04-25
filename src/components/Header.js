import React, {Component} from "react"
class Header extends Component {

    componentDidUpdate(prevProps, prevState){
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColour = "rgb(" + x + "," + y + "," + z + ")";

        if(prevProps.headerSpan !== this.props.headerSpan){
            console.log("props change");
            document.getElementById("inH1").innerHTML = "clicked";
            document.getElementById("inH1").style.backgroundColor = bgColour;
        }
    }
    render(){
        const headerStyle = {
            padding: "20px 0",
            lineHeight: "2em",
        }
        return(
            <header style={headerStyle}>
                <h1 style={{ fontSize: "25px", marginBottom: "15px" }}>
                    Simple Todo App <span id="inH1"></span>
                </h1>
                
                <p style={{ fontSize: "19px" }}> 
                    Please add to-do items through the input field
                </p>
            </header>
        )
    };
}
    

export default Header