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

function PropsInBoard({
    plant,
    scaleValue
}: {
    plant: Plant;
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
        type: ItemTypes.Board,
        item: {
            type: ItemTypes.Board,
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
                ref={drag}
                id={plant.id.toString()}
                src={plant.sideImage}
                alt={plant.species}
                style={{
                    border: isDragging ? "5px solid pink" : "0px",
                    width: `${(plant.size / scaleValue) * 800}px`,
                    height: `${(plant.size / scaleValue) * 800}px`
                }}
            />
        </div>
    );
}

export default PropsInBoard;
