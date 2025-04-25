// Importing React elements
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { DropTargetMonitor, useDrop } from "react-dnd";

// Importing Components
import Garden from "./Garden";
import PropList from "./PropList";
import { BorderBoxUp } from "./BorderBoxUp";
import { PlantDescriber } from "./PlantDescriber";
// Importing interfaces and constants
import { Plant } from "../interfaces/plant";
import { PropListArr } from "../interfaces/PropList";
import { ItemTypes } from "../interfaces/constants";

// Importing Styles
import "../styles/Design.css";
import "../styles/App.css";
import "../styles/globals.css";

function Design(): JSX.Element {
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

      interface ITEM {
            type: string;
            id: string;
            data: Plant;
            name: string;
      }

      const [{ isOver }, drop] = useDrop({
            accept: ItemTypes.PROP,
            drop: (item: ITEM) => SetBoardProps(addToBoardList(item.data)),
            collect: (monitor: DropTargetMonitor) => ({
                  isOver: !!monitor.isOver()
            })
      });

      function addToBoardList(newPlant: Plant) {
            return [
                  ...deepCloneBoardProps(boardprops),
                  {
                        ...newPlant,
                        id: Math.floor(Math.random() * 100),
                        shadeCondtions: newPlant.shadeConditions
                  }
            ];
      }

      const [{ isOver2 }, drop2] = useDrop({
            accept: ItemTypes.Board,
            drop: (item: ITEM) => SetBoardProps(removeFromBoardList(item.data)),
            collect: (monitor: DropTargetMonitor) => ({
                  isOver2: !!monitor.isOver()
            })
      });

      function removeFromBoardList(plant: Plant): Plant[] {
            return deepCloneBoardProps(boardprops).filter(q => q.id !== plant.id);
      }

      return (
            <div className="design-container">
                  <header>Design Your Garden!</header>
             
                  <div className="form-container">
                        <Form.Group controlId="formGardenSize">
                              <Form.Label>Size of Garden:</Form.Label>
                              <Form.Control
                                    type="number"
                                    value={gardenSize}
                                    onChange={updateGardenSize}
                              />
                        </Form.Group>
                  </div>
                  
                  <div className="garden-layout">
                        <div className="prop-list-container">
                              <PropList
                                    gardenElements={gardenElements}
                                    propList={propList}
                                    setPropList={setPropList}
                                    selectElement={selectElement}
                                    boardprops={boardprops}
                              />
                        </div>
                        <div className="garden-container">
                              <Garden
                                    boardprops={boardprops}
                                    drop={drop}
                                    scaleValue={gardenSize}
                                    selectElement={selectElement}
                              />
                        </div>
                  </div>
            </div>
      );
}

export default Design;
