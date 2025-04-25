
import React, { useState } from "react";
import "../styles/BorderBox.css";

// If I took out the "export" in COLORS, would it not update?
const COLORS = ["green", "blue", "brown"];
const BORDERS = ["Lawn", "Water", "Wood"];
const DEFAULT_COLOR_INDEX = 0;

interface ChangeBorderBox {
    setBorderIndex: (newBorderIndex: number) => void;
    borderIndex: number;
}

function BorderPreview({ borderIndex }: ChangeBorderBox): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[borderIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function BorderBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div className="borderbox">
            <h3>Border Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div
                onClick={() => setColorIndex((1 + colorIndex) % COLORS.length)}
            >
                <p>{BORDERS[colorIndex]}</p>
                <BorderPreview
                    setBorderIndex={setColorIndex}
                    borderIndex={colorIndex}
                ></BorderPreview>
            </div>
        </div>
    );
}
