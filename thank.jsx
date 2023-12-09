import React, { useState } from "react";
import "./cart.css"; // Import the CSS file for styling
import * as ROUTES from "../../constants/routes";
import {
    Container,
    Link,
    Box,
  } from "@mui/material";
  

  const thank = () => {

    return(
        <Container>
            <div>
                <h1 color="brown">Thank You! </h1>
            </div>
        <Box item>
        <Link href={ROUTES.HOME} variant="body2">
          {"Back to home page "}
        </Link>
    </Box>
    </Container>
    );
  }

  export default thank;
