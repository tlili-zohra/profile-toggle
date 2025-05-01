import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Tlili Zohra",
        bio: "A passionate developer from the web development world.",
        imgSrc:
          "https://www.shutterstock.com/image-vector/beautiful-muslim-women-hijab-vector-600nw-1722147865.jpg",
        profession: "Web Developer",
      },
      show: false,
      timeSinceMount: 0,
    };
  }

  componentDidMount() {
    // Start the interval to calculate the time since mount
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1,
      }));
    }, 1000); // Increment time every second
  }

  componentWillUnmount() {
    // Clean up the interval when the component is removed
    clearInterval(this.interval);
  }

  toggleProfile = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { person, show, timeSinceMount } = this.state;

    const containerStyle = {
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      padding: "30px",
      backgroundColor: "#f0f2f5",
      minHeight: "100vh",
    };

    const cardStyle = {
      backgroundColor: "#fff",
      borderRadius: "10px",
      padding: "20px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      maxWidth: "400px",
      margin: "20px auto",
    };

    const imgStyle = {
      width: "150px",
      height: "150px",
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: "15px",
    };

    const buttonStyle = {
      padding: "10px 20px",
      backgroundColor: show ? "#ff4d4f" : "#1890ff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
      marginBottom: "20px",
    };

    const timerStyle = {
      fontSize: "14px",
      color: "rgba(0, 0, 0, 0.7)",
      marginTop: "15px",
    };

    return (
      <div style={containerStyle}>
        <h1>👤 React Profile Component</h1>
        <button onClick={this.toggleProfile} style={buttonStyle}>
          {show ? "Hide Profile" : "Show Profile"}
        </button>

        {show && (
          <div style={cardStyle}>
            <img src={person.imgSrc} alt="profile" style={imgStyle} />
            <h2>{person.fullName}</h2>
            <p>
              <strong>Profession:</strong> {person.profession}
            </p>
            <p>{person.bio}</p>
          </div>
        )}

        <div style={timerStyle}>
          ⏱ Time since component mounted: {timeSinceMount} seconds
        </div>
      </div>
    );
  }
}

export default App;
