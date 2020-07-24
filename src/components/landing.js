import React from "react";
import kitchen from "./kitchen.jpg";

class Landing extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            typed: false,
            count: 0,
        };
    }

    typeWriter = () => {
        let i = 0;
        let txt = ["Luxury", "Comfy", "Homely", "Cosy"];
        let count = this.state.count;
        let speed = 150;
        let currentcomponent = this;

        if (this.state.typed === false) {
            let typing = setInterval(function () {
                if (i < txt[count].length) {
                    document.getElementById("input").innerHTML += txt[count].charAt(i);
                    i++;
                }
                if (i >= txt[count].length) {
                    count++;
                    if (count >= txt.length) {
                        currentcomponent.setState({
                            typed: true,
                            count: 0,
                        });
                    } else {
                        currentcomponent.setState({
                            typed: true,
                            count,
                        });
                    }
                    clearInterval(typing);
                }
            }, speed);
        }
    };

    blinking = () => {
        setInterval(function () {
            document.getElementById("cursor").classList.toggle("zeroop");
        }, 500);
    };

    removing = () => {
        let currentcomponent = this;
        let typeWriter = this.typeWriter;

        if (this.state.typed === true) {
            setTimeout(() => {
                let txt = document.getElementById("input").innerHTML;
                let i = txt.length;
                let speed = 60;
                function deleter() {
                    if (i >= 0) {
                        txt = txt.slice(0, txt.length - 1);
                        document.getElementById("input").innerHTML = txt;
                        i--;
                        setTimeout(deleter, speed);
                    }
                    if (i === 0) {
                        currentcomponent.setState({
                            typed: false,
                        });
                        typeWriter();
                    }
                }
                deleter();
            }, 2000);
        }
    };

    componentDidMount = () => {
        this.typeWriter();
        this.blinking();
    };

    componentDidUpdate = () => {
        this.removing();
    };

    render() {
        return (
            <div className="landing">
                <img src={kitchen}></img>
                <div class="arrow">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="hover">
                    <h2><span id="typewriter"><span id="input"></span><span id="cursor">|</span></span>{" "}Stays<br></br> Near Cleveland<br></br> Metro Hospital</h2>
                    <div className="hover-btns">
                        <button class="snip1372" id="first">See Rooms<i class="ion-ios-home-outline"></i></button>
                        <button class="snip1372" id="second">Book Now<i class="ion-ios-calendar-outline"></i></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;
