// Importing React elements
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { DropTargetMonitor, useDrop } from "react-dnd";
// Importing Styles
import "../styles/App.css";
import "../styles/globals.css";
import "../styles/PropList.css";
// Importing Components
import Garden from "./Garden";
import PropList from "./PropList";
import { PlantDescriber } from "./PlantDescriber";
// Importing interfaces and constants
import { Plant } from "../interfaces/plant";
import { PropListArr } from "../interfaces/PropList";
import { ItemTypes } from "../interfaces/constants";

function PlantLibrary(): JSX.Element {
    function deepCloneBoardProps(gardenProps: Plant[]): Plant[] {
        return gardenProps.map(
            (prop: Plant): Plant => ({
                ...prop,
                shadeConditions: [...prop.shadeConditions]
            })
        );
    }

    const [gardenElements, setGardenElements] = useState<Plant[]>(deepCloneBoardProps(PropListArr));
    const [propList, setPropList] = useState<Plant[]>(deepCloneBoardProps(PropListArr));
    const [selectedElement, setSelectedElement] = useState<Plant | undefined>(undefined);
    const [gardenSize, setGardenSize] = useState<number>(70);
    const [boardprops, SetBoardProps] = useState<Plant[]>([]);

    function updateGardenSize(event: React.ChangeEvent<HTMLInputElement>) {
        setGardenSize(event.target.valueAsNumber);
    }

    function selectElement(id: number) {
        setSelectedElement(
            gardenElements.find((element: Plant): boolean => element.id === id)
        );
    }

    function editGardenElement(id: number, newElement: Plant) {
        setGardenElements(
            gardenElements.map(
                (element: Plant): Plant =>
                    element.id === id ? newElement : element
            )
        );
        setPropList(
            propList.map(
                (element: Plant): Plant =>
                    element.id === id ? newElement : element
            )
        );
        SetBoardProps(
            boardprops.map(
                (boardProp: Plant): Plant =>
                    boardProp.species === newElement.species
                        ? newElement
                        : boardProp
            )
        );
    }

    function removeGardenElement(removedElement: Plant) {
        setGardenElements(gardenElements.filter(element => element.id !== removedElement.id));
        setPropList(propList.filter(element => element.id !== removedElement.id));
        SetBoardProps(boardprops.filter(boardProp => boardProp.species !== removedElement.species));
        setSelectedElement(undefined);
    }

    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.PROP,
        drop: () => {},
        collect: (monitor: DropTargetMonitor) => ({
            isOver: !!monitor.isOver()
        })
    });

    return (
        <div className="App">
            <header className="App-header">Garden on the Go!</header>
            <div className="garden-container">
                <div className="proplist-container">
                    <PropList
                        gardenElements={gardenElements}
                        propList={propList}
                        setPropList={setPropList}
                        selectElement={selectElement}
                        boardprops={boardprops}
                    />
                </div>
                <div className="plant-describer-container">
                    <PlantDescriber
                        gardenElements={gardenElements}
                        selectedElement={selectedElement}
                        editElement={editGardenElement}
                        removeElement={removeGardenElement}
                    />
                </div>
            </div>
        </div>
    );
}

export default PlantLibrary;
