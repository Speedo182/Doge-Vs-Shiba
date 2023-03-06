import React, { Component } from "react";
import "../styles/Coin.css";

class Coin extends Component {
  render() {
    const { side } = this.props;
    return (
      <div className="Coin">
        <img
          className="Coin-img"
          src={side === "heads" ? "/images/doge-coin.png" : "/images/shiba-coin.png"}
          alt={side}
        />
      </div>
    );
  }
}

export default Coin;
