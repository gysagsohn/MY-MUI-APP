import React from "react";
import { Container, Typography, Paper } from "@mui/material";

const serviceList = ["Service 1", "Service 2", "Service 3"];
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Container>
        <Typography variant="h1" sx={{ my: 4, textAlign: 'center', color: "primary.main" }}>
          Hello World
        </Typography>
        <Typography variant="h2">Overview</Typography>
        {serviceList.map((service, index) => (
          <Paper key={index} elevation={3} sx={{ my: 2, p: 2 }}>
            <Typography variant="h3">{service}</Typography>
            <Typography>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Typography>
          </Paper>
        ))}
    </Container>
  );
}

export default App;
