import React from "react";
import { Outlet } from "react-router-dom";

const GuessLayout = () => {
    return (
        <div>This is Guess Layout
            <Outlet/>
        </div>
    )
}

export default GuessLayout;