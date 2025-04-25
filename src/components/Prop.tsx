import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../interfaces/constants";
import { Plant } from "../interfaces/plant";

interface DragItem {
    type: string;
    id: string;
    data: Plant;
    name: string;
}

function Prop({
    plant,
    selectElement,
    scaleValue
}: {
    plant: Plant;
    selectElement: (id: number) => void;
    scaleValue: number;
}): JSX.Element {
    const makeid = (length: number) => {
        let result = "";
        const characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
            );
        }
        return result;
    };
    const [{ isDragging }, drag] = useDrag<DragItem, void, { isDragging: boolean }>({
        type: ItemTypes.PROP,
        item: {
            type: ItemTypes.PROP,
            id: makeid(10),
            data: plant,
            name: plant.species
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });

    return (
        <div>
            <img
                id={plant.id.toString()}
                ref={drag}
                src={plant.sideImage}
                alt={plant.species}
                style={{
                    border: isDragging ? "5px solid pink" : "0px"
                }}
                onClick={() => {
                    selectElement(plant.id);
                }}
                width={scaleValue}
                height={scaleValue}
            />
        </div>
    );
}

export default Prop;
