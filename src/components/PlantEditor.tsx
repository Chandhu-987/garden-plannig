import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Plant, Region, Category } from "../interfaces/plant";
// If we add more interfaces inside plant, we might need to make extra components
import { shadeLevel } from "../interfaces/shadeLevel";

const REGIONS: Region[] = [
    "North America",
    "South America",
    "Europe",
    "Asia",
    "Africa",
    "Oceania",
    "Global"
];
const CATEGORIES: Category[] = [
    "Farmable",
    "Tree",
    "Flowers",
    "Decorations",
    "Cacti"
];

export function PlantEditor({
    plant,
    changeEditMode,
    editElement,
    removeElement
}: {
    plant: Plant;
    changeEditMode: () => void;
    editElement: (id: number, newElement: Plant) => void;
    removeElement: (plant: Plant) => void;
}): JSX.Element {
    // Create local state variables that will update the plant if the editted info is saved:
    const [nickname, setNickname] = useState<string>(plant.nickname);
    const [size, setSize] = useState<string>(plant.size.toString());
    const [shadeConditions, setShadeConditions] = useState<shadeLevel[]>(
        plant.shadeConditions
    );
    const [floweringPeriod, setFloweringPeriod] = useState<string>(
        plant.floweringPeriod
    );
    const [waterReq, setWaterReq] = useState<string>(plant.waterReq.toString());
    const [region, setRegion] = useState<Region>(plant.region);
    const [price, setPrice] = useState<string>(plant.price.toString());
    const [category, setCategory] = useState<Category>(plant.category);
    // --------------------------------------------------------------------------------------------
    function updateShadeRequirements(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        const shadeValue = event.target.value;
        const shadeValues = shadeConditions.map(
            (shadeCondition: shadeLevel): string => shadeCondition.toString()
        );
        // Check if the shade value is already checked
        if (shadeValues.includes(shadeValue)) {
            // Remove the given value
            setShadeConditions(
                shadeConditions.filter(
                    (shade: shadeLevel): boolean =>
                        shade.toString() !== shadeValue
                )
            );
        } else {
            const shadeLevels = [
                shadeLevel.None,
                shadeLevel.Light,
                shadeLevel.Partial,
                shadeLevel.Full,
                shadeLevel.Dense
            ];
            const newShadeLevel = shadeLevels.find(
                (shade: shadeLevel): boolean => shade.toString() === shadeValue
            );
            newShadeLevel === undefined
                ? setShadeConditions([...shadeConditions])
                : setShadeConditions([...shadeConditions, newShadeLevel]);
        }
    }

    function createOption(userOption: string): JSX.Element {
        return (
            <option key={userOption} value={userOption}>
                {userOption}
            </option>
        );
    }
    function changeRegion(event: React.ChangeEvent<HTMLSelectElement>) {
        const newRegion = REGIONS.find(
            (region: Region): boolean =>
                region.toString() === event.target.value
        );
        if (newRegion !== undefined) {
            setRegion(newRegion);
        }
    }
    function changeCategory(event: React.ChangeEvent<HTMLSelectElement>) {
        const newCategory = CATEGORIES.find(
            (category: Category): boolean =>
                category.toString() === event.target.value
        );
        if (newCategory !== undefined) {
            setCategory(newCategory);
        }
    }
    function saveChanges() {
        editElement(plant.id, {
            ...plant,
            nickname: nickname,
            size: parseInt(size) || 0,
            shadeConditions: shadeConditions,
            floweringPeriod: floweringPeriod,
            waterReq: parseInt(waterReq) || 0,
            region: region,
            price: parseFloat(price) || 0,
            category: category
        });
        changeEditMode();
    }

    return (
        <div>
            <h6>Plant Editor</h6>
            <p>
                Here, you will edit {plant.nickname} ({plant.species})
            </p>
            <Container>
                <Row>
                    <Col>
                        {/* Nickname */}
                        <Form.Group controlId="formPlantNickname" as={Row}>
                            <Form.Label>Nickname:</Form.Label>
                            <Col>
                                <Form.Control
                                    value={nickname}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>
                                    ) => setNickname(event.target.value)}
                                />
                            </Col>
                        </Form.Group>
                        {/* Size */}
                        <Form.Group controlId="formPlantSize" as={Row}>
                            <Form.Label>Size:</Form.Label>
                            <Col>
                                <Form.Control
                                    type="number"
                                    value={size}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>
                                    ) => setSize(event.target.value)}
                                ></Form.Control>
                            </Col>
                        </Form.Group>
                        {/* Water Requirement */}
                        <Form.Group controlId="formPlantSize" as={Row}>
                            <Form.Label>Water Requirement (unit?):</Form.Label>
                            <Col>
                                <Form.Control
                                    type="number"
                                    value={waterReq}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>
                                    ) => setWaterReq(event.target.value)}
                                ></Form.Control>
                            </Col>
                        </Form.Group>
                        {/* Price */}
                        <Form.Group controlId="formPlantPrice" as={Row}>
                            <Form.Label>Price ($):</Form.Label>
                            <Col>
                                <Form.Control
                                    type="number"
                                    step="0.01"
                                    min="0"
                                    value={price}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>
                                    ) => setPrice(event.target.value)}
                                ></Form.Control>
                            </Col>
                        </Form.Group>
                        {/* shadeConditions */}
                        <Row id="acceptedShadeLevels">
                            <div>Shade Levels:</div>
                            <Col>
                                <Form.Check
                                    type="checkbox"
                                    id="shade-check-none"
                                    label="NONE"
                                    name="shadeConditions"
                                    value={shadeLevel.None}
                                    checked={shadeConditions.includes(
                                        shadeLevel.None
                                    )}
                                    onChange={updateShadeRequirements}
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="shade-check-light"
                                    label="LIGHT"
                                    name="shadeConditions"
                                    value={shadeLevel.Light}
                                    checked={shadeConditions.includes(
                                        shadeLevel.Light
                                    )}
                                    onChange={updateShadeRequirements}
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="shade-check-partial"
                                    label="PARTIAL"
                                    name="shadeConditions"
                                    value={shadeLevel.Partial}
                                    checked={shadeConditions.includes(
                                        shadeLevel.Partial
                                    )}
                                    onChange={updateShadeRequirements}
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="shade-check-full"
                                    label="FULL"
                                    name="shadeConditions"
                                    value={shadeLevel.Full}
                                    checked={shadeConditions.includes(
                                        shadeLevel.Full
                                    )}
                                    onChange={updateShadeRequirements}
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="shade-check-dense"
                                    label="DENSE"
                                    name="shadeConditions"
                                    value={shadeLevel.Dense}
                                    checked={shadeConditions.includes(
                                        shadeLevel.Dense
                                    )}
                                    onChange={updateShadeRequirements}
                                />
                            </Col>
                        </Row>
                        {/* Flowering Period */}
                        <Form.Group controlId="formFloweringPeriod" as={Row}>
                            <Form.Label>Flowering Period:</Form.Label>
                            <Col>
                                <Form.Control
                                    value={floweringPeriod}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>
                                    ) => setFloweringPeriod(event.target.value)}
                                ></Form.Control>
                            </Col>
                        </Form.Group>
                        {/* Region */}
                        <Form.Group controlId="formRegion" as={Row}>
                            <Form.Label>Region:</Form.Label>
                            <Col>
                                <Form.Select
                                    value={region}
                                    onChange={changeRegion}
                                >
                                    {REGIONS.map(createOption)}
                                </Form.Select>
                            </Col>
                        </Form.Group>
                        {/* Category */}
                        <Form.Group controlId="formCategory" as={Row}>
                            <Form.Label>Category:</Form.Label>
                            <Col>
                                <Form.Select
                                    value={category}
                                    onChange={changeCategory}
                                >
                                    {CATEGORIES.map(createOption)}
                                </Form.Select>
                            </Col>
                        </Form.Group>
                        <Button onClick={saveChanges}>Save Changes</Button>
                        <Button
                            variant="danger"
                            onClick={() => removeElement(plant)}
                        >
                            Delete Plant
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
