import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Plant } from "../interfaces/plant";
import Prop from "./Prop";

import "../styles/PropList.css";


const Price = ["All", "100-300", "301-600", "601+"];

const SORTINGMETHODS = [
    "Original",
    "A-Z",
    "Z-A",
    "Smallest-Largest",
    "Largest-Smallest",
    "Greatest Water Requirement",
    "Least Water Requirement"
];
const REGIONS = [
    "All",
    "North America",
    "South America",
    "Europe",
    "Asia",
    "Africa",
    "Oceania",
    "Global"
];
const PriceRanges = ["All", "100-300", "301-600", "601+"];
const CATEGORIES = [
    "All",
    "Farmable",
    "Trees",
    "Flowers",
    "Decorations",
    "Cacti"
];

interface methodReference {
    name: string;
    operation: () => void;
}

function PropList({
    gardenElements,
    propList,
    setPropList,
    selectElement,
    boardprops
}: {
    gardenElements: Plant[];
    propList: Plant[];
    setPropList: (newPropList: Plant[]) => void;
    selectElement: (id: number) => void;
    boardprops: Plant[];
}) {
    const [sortingMethod, setSortingMethod] = useState<string>("Original");
    const [regionFilter, setRegionFilter] = useState<string>("All");
    const [priceFilter, setPriceFilter] = useState<string>("All");
    const [categoryFilter, setCategoryFilter] = useState<string>("All");

    function generateList(plants: Plant[]): JSX.Element[] {
        return plants.map((plant) => (
            <div key={plant.id} className="propcontainer">
                <li onClick={() => selectElement(plant.id)}>
                    <img src={plant.sideImage} alt={plant.species} />
                </li>
                <li onClick={() => selectElement(plant.id)}>
                    {plant.species}
                </li>
                <li onClick={() => selectElement(plant.id)}>
                    {plant.price}
                </li>
            </div>
        ));
    }
    function generateListElement(prop: Plant): JSX.Element {
        return (
            <div key={prop.id} className="propcontainer">
                <li>{prop.nickname}</li>
                <Prop
                    plant={prop}
                    selectElement={selectElement}
                    scaleValue={100}
                />
            </div>
        );
    }
    function deepCloneProps(gardenProps: Plant[]): Plant[] {
        return gardenProps.map(
            (prop: Plant): Plant => ({
                ...prop,
                shadeConditions: [...prop.shadeConditions]
            })
        );
    }
    function resetlist() {
        const newPropList = deepCloneProps(gardenElements);
        setPropList(newPropList);
    }
    function alphabeticalOrder() {
        const newPropList = deepCloneProps(propList);
        setPropList(
            newPropList.sort((a: Plant, b: Plant) =>
                a.nickname < b.nickname ? -1 : 1
            )
        );
    }
    function ReverseAlphabeticalOrder() {
        const newPropList = deepCloneProps(propList);
        setPropList(
            newPropList.sort((a: Plant, b: Plant) =>
                a.nickname > b.nickname ? -1 : 1
            )
        );
    }
    function SortbySizeSmall() {
        const newPropList = deepCloneProps(propList);
        setPropList(newPropList.sort((a: Plant, b: Plant) => a.size - b.size));
    }
    function SortbySizeBig() {
        const newPropList = deepCloneProps(propList);
        setPropList(newPropList.sort((a: Plant, b: Plant) => b.size - a.size));
    }
    function SortbyWaterReqSmall() {
        const newPropList = deepCloneProps(propList);
        setPropList(
            newPropList.sort((a: Plant, b: Plant) => a.waterReq - b.waterReq)
        );
    }
    function SortbyWaterReqBig() {
        const newPropList = deepCloneProps(propList);
        setPropList(
            newPropList.sort((a: Plant, b: Plant) => b.waterReq - a.waterReq)
        );
    }

    function NA_Region() {
        const newPropList = deepCloneProps(gardenElements);
        const regionarr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.region === "North America"
        );
        setPropList(regionarr);
    }
    function SA_Region() {
        const newPropList = deepCloneProps(gardenElements);
        const regionarr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.region === "South America"
        );
        setPropList(regionarr);
    }
    function EU_Region() {
        const newPropList = deepCloneProps(gardenElements);
        const regionarr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.region === "Europe"
        );
        setPropList(regionarr);
    }
    function AF_Region() {
        const newPropList = deepCloneProps(gardenElements);
        const regionarr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.region === "Africa"
        );
        setPropList(regionarr);
    }
    function ASIA_Region() {
        const newPropList = deepCloneProps(gardenElements);
        const regionarr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.region === "Asia"
        );
        setPropList(regionarr);
    }
    function AUS_Region() {
        const newPropList = deepCloneProps(gardenElements);
        const regionarr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.region === "Oceania"
        );
        setPropList(regionarr);
    }
    function ALL_Region() {
        const newPropList = deepCloneProps(gardenElements);
        const regionarr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.region === "Global"
        );
        setPropList(regionarr);
    }
    function lowPrice() {
        const newPropList = deepCloneProps(gardenElements);
        const priceArr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.price >= 100 && q.price <= 300
        );
        setPropList(priceArr);
    }
    
    function midPrice() {
        const newPropList = deepCloneProps(gardenElements);
        const priceArr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.price >= 301 && q.price <= 600
        );
        setPropList(priceArr);
    }
    
    function highPrice() {
        const newPropList = deepCloneProps(gardenElements);
        const priceArr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.price > 601
        );
        setPropList(priceArr);
    }
    
    function filterFarmable() {
        const newPropList = deepCloneProps(gardenElements);
        const categoryArr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.category === "Farmable"
        );
        setPropList(categoryArr);
    }
    function filterTrees() {
        const newPropList = deepCloneProps(gardenElements);
        const categoryArr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.category === "Tree"
        );
        setPropList(categoryArr);
    }
    function filterFlowers() {
        const newPropList = deepCloneProps(gardenElements);
        const categoryArr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.category === "Flowers"
        );
        setPropList(categoryArr);
    }
    function filterDecorations() {
        const newPropList = deepCloneProps(gardenElements);
        const categoryArr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.category === "Decorations"
        );
        setPropList(categoryArr);
    }
    function filterCacti() {
        const newPropList = deepCloneProps(gardenElements);
        const categoryArr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.category === "Cacti"
        );
        setPropList(categoryArr);
    }

    function changeSortingMethod(event: React.ChangeEvent<HTMLSelectElement>) {
        const sortingMethods: methodReference[] = [
            { name: "Original", operation: resetlist },
            { name: "A-Z", operation: alphabeticalOrder },
            { name: "Z-A", operation: ReverseAlphabeticalOrder },
            { name: "Smallest-Largest", operation: SortbySizeSmall },
            { name: "Largest-Smallest", operation: SortbySizeBig },
            {
                name: "Greatest Water Requirement",
                operation: SortbyWaterReqBig
            },
            {
                name: "Least Water Requirement",
                operation: SortbyWaterReqSmall
            }
        ];
        const newSortingMethod = sortingMethods.find(
            (sortMethod: methodReference): boolean =>
                sortMethod.name === event.target.value
        );
        if (newSortingMethod !== undefined) {
            setSortingMethod(newSortingMethod.name);
            newSortingMethod.operation();
        }
    }
    function changeRegionFilter(event: React.ChangeEvent<HTMLSelectElement>) {
        const regionFilterers: methodReference[] = [
            { name: "All", operation: resetlist },
            { name: "North America", operation: NA_Region },
            { name: "South America", operation: SA_Region },
            { name: "Europe", operation: EU_Region },
            { name: "Africa", operation: AF_Region },
            { name: "Asia", operation: ASIA_Region },
            { name: "Oceania", operation: AUS_Region },
            { name: "Global", operation: ALL_Region }
        ];
        const newRegionFilter = regionFilterers.find(
            (regionFilterer: methodReference): boolean =>
                regionFilterer.name === event.target.value
        );
        if (newRegionFilter !== undefined) {
            setRegionFilter(newRegionFilter.name);
            setSortingMethod("Original");
            setPriceFilter("None");
            setCategoryFilter("All");
            newRegionFilter.operation();
        }
    }
    /*function changePriceFilter(event: React.ChangeEvent<HTMLSelectElement>) {
        const priceFilterers: methodReference[] = [
            { name: "All", operation: resetlist },
            { name: "$", operation: lowPrice },
            { name: "$$", operation: midPrice },
            { name: "$$$", operation: highPrice }
        ];
        const newPriceFilter = priceFilterers.find(
            (priceFilterer: methodReference): boolean =>
                priceFilterer.name === event.target.value
        );
        if (newPriceFilter !== undefined) {
            setPriceFilter(newPriceFilter.name);
            setSortingMethod("Original");
            setRegionFilter("None");
            setCategoryFilter("All");
            resetlist();
            newPriceFilter.operation();
        }
    }*/


        function changePriceFilter(event: React.ChangeEvent<HTMLSelectElement>) {
            const priceFilterers: methodReference[] = [
                { name: "All", operation: resetlist },
                { name: "Low", operation: lowPrice },
                { name: "Medium", operation: midPrice },
                { name: "High", operation: highPrice }
            ];
        
            const newPriceFilter = priceFilterers.find(
                (priceFilterer: methodReference) => priceFilterer.name === event.target.value
            );
        
            if (newPriceFilter) {
                setPriceFilter(newPriceFilter.name);
                setSortingMethod("Original");
                setRegionFilter("None");
                setCategoryFilter("All");
                resetlist();
                newPriceFilter.operation();
            }
        }
        
    function changeCategoryFilter(event: React.ChangeEvent<HTMLSelectElement>) {
        const categoryFilterers: methodReference[] = [
            { name: "All", operation: resetlist },
            { name: "Farmable", operation: filterFarmable },
            { name: "Trees", operation: filterTrees },
            { name: "Flowers", operation: filterFlowers },
            { name: "Decorations", operation: filterDecorations },
            { name: "Cacti", operation: filterCacti }
        ];
        const newCategoryFilter = categoryFilterers.find(
            (categoryFilterer: methodReference): boolean =>
                categoryFilterer.name === event.target.value
        );
        if (newCategoryFilter !== undefined) {
            setCategoryFilter(newCategoryFilter.name);
            setSortingMethod("Original");
            setRegionFilter("All");
            setPriceFilter("All");
            resetlist();
            newCategoryFilter.operation();
        }
    }
    function createOption(userOption: string): JSX.Element {
        return (
            <option key={userOption} value={userOption}>
                {userOption}
            </option>
        );
    }
    return (
        <div>
            <div className="filters-container">
                {/* Sort By */}
                <Form.Group controlId="formSortSelectionList">
                    <Form.Label>Sort By:</Form.Label>
                    <Form.Select
                        value={sortingMethod}
                        onChange={changeSortingMethod}
                    >
                        {SORTINGMETHODS.map((sortMethod: string) =>
                            createOption(sortMethod)
                        )}
                    </Form.Select>
                </Form.Group>
                {/* Filter By Region */}
                <Form.Group controlId="formFilterbyRegion">
                    <Form.Label>Filter By Region:</Form.Label>
                    <Form.Select value={regionFilter} onChange={changeRegionFilter}>
                        {REGIONS.map((region: string) => createOption(region))}
                    </Form.Select>
                </Form.Group>
                {/* Filter by Category */}
                <Form.Group controlId="formFilterbyCategory">
                    <Form.Label>Filter By Category:</Form.Label>
                    <Form.Select
                        value={categoryFilter}
                        onChange={changeCategoryFilter}
                    >
                        {CATEGORIES.map((category: string) =>
                            createOption(category)
                        )}
                    </Form.Select>
                </Form.Group>
            </div>
            <ul className="scroll-bar">{propList.map(generateListElement)}</ul>
        </div>
    );
}

export default PropList;
