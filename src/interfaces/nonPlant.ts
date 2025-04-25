export interface NonPlant {
    // A unique numerical ID attached to the garden object
    id: number;
    // The name of the object
    name: string;
    // A URL/filepath of the top view of the object
    topImage: string;
    // A URL/filepath of the side view of the object
    sideImage: string;
    // The relative size of object to the garden
    size: number;
}
