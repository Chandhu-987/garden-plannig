import { Plant } from "./plant";
import { shadeLevel } from "./shadeLevel";
import cactusTD from "../images/CactusTopDown.png";
import cactusSV from "../images/CactusSide.png";
import tomatoSV from "../images/TomatoPlantSide.png";
import redrosesSV from "../images/RedRoseBushSide.png";
import yellowrosesSV from "../images/YellowRoseBushSide.png";
import sunflowerSV from "../images/SunflowerSide.png";
import pathTD from "../images/Path.png";
import lilacSV from "../images/LilacSV.png";
import lilacTD from "../images/LilacTV.png";
import chrisSV from "../images/ChrisSV.png";
import chrisTD from "../images/ChrisTD.png";
import SBSV from "../images/SBSV.png";
import SBTD from "../images/SBTD.png";
import BushTD from "../images/BushTD.png";
import BushSV from "../images/BushSV.png";
import RedMapleTD from "../images/RedMapleTD.png";
import RedMapleSV from "../images/RedMapleSV.png";
import LemonSV from "../images/LemonSV.png";
import LemonTD from "../images/LemonTD.png";
import BambooTD from "../images/BambooTD.png";
import BambooSV from "../images/BambooSV.png";
import CabbageTD from "../images/CabbageTD.png";
import CabbageSV from "../images/CabbageSV.png";
import CornTD from "../images/CornTD.png";
import CornSV from "../images/CornSV.png";
import PotatoTD from "../images/PotatoTD.png";
import PotatoSV from "../images/PotatoSV.png";
import SuccTD from "../images/SuccTD.png";
import SuccSV from "../images/SuccSV.png";
import AloeTD from "../images/SuccRTD.png";
import AloeSV from "../images/SuccRSV.png";
import lily from "../images/lily.png";
import tree from "../images/tree.png";
import flowers from "../images/flowers2.png";
import rock from "../images/rock.png";
import crazy from "../images/crazy.png";
import flowervase from "../images/flowervase.png";
import flowerbush from "../images/flowerbush.png";
import snakeplant from "../images/snakeplant.png";
import shrub from "../images/shrub.png";
import bushflowers from "../images/bushflowers.png";
import flowersbush from "../images/flowersbush.png";
import christmas from "../images/christmas.png";

const Cactus: Plant = {
    id: 1,
    species: "Cactaceae",
    nickname: "Cactus",
    topImage: cactusTD,
    sideImage: cactusSV,
    size: 8,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 12,
    region: "Global",
    price: 700,
    category: "Cacti"
};
const Tomato: Plant = {
    id: 2,
    species: "Solanum lycopersicum",
    nickname: "Tomato",
    topImage: "",
    sideImage: tomatoSV,
    size: 5,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 64,
    region: "South America",
    price: 700,
    category: "Farmable"
};
const RedRoses: Plant = {
    id: 3,
    species: "Rosa",
    nickname: "Red Roses",
    topImage: "",
    sideImage: redrosesSV,
    size: 12,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 54,
    region: "Europe",
    price: 700,
    category: "Flowers"
};
const YellowRoses: Plant = {
    id: 4,
    species: "Rosa hemisphaerica",
    nickname: "Yellow Roses",
    topImage: "",
    sideImage: yellowrosesSV,
    size: 12,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 49,
    region: "Europe",
    price: 300,
    category: "Flowers"
};
const Sunflower: Plant = {
    id: 5,
    species: "Helianthus",
    nickname: "Sunflower",
    topImage: "",
    sideImage: sunflowerSV,
    size: 11,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 43,
    region: "North America",
    price: 300,
    category: "Flowers"
};
const Lilac: Plant = {
    id: 6,
    species: "Syringa",
    nickname: "Lilac",
    topImage: lilacTD,
    sideImage: lilacSV,
    size: 9,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 39,
    region: "Europe",
    price: 700,
    category: "Flowers"
};
const Chrysanthemum: Plant = {
    id: 7,
    species: "Chrysanthemum indicum",
    nickname: "Chrysanthemum",
    topImage: chrisTD,
    sideImage: chrisSV,
    size: 7,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 22,
    region: "Asia",
    price: 300,
    category: "Flowers"
};
const SiberianBugloss: Plant = {
    id: 8,
    species: "Brunnera macrophylla",
    nickname: "Siberian Bugloss",
    topImage: SBTD,
    sideImage: SBSV,
    size: 8,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 34,
    region: "Asia",
    price: 700,
    category: "Flowers"
};
const Bamboo: Plant = {
    id: 9,
    species: "Bambusa",
    nickname: "Bamboo",
    topImage: BambooTD,
    sideImage: BambooSV,
    size: 7,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 27,
    region: "Asia",
    price: 700,
    category: "Decorations"
};
const Cabbage: Plant = {
    id: 10,
    species: "Brassica oleracea",
    nickname: "Cabbage",
    topImage: CabbageTD,
    sideImage: CabbageSV,
    size: 4,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 74,
    region: "Europe",
    price: 450,
    category: "Farmable"
};
const Corn: Plant = {
    id: 11,
    species: "Zea mays",
    nickname: "Corn",
    topImage: CornTD,
    sideImage: CornSV,
    size: 8,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 84,
    region: "South America",
    price: 450,
    category: "Farmable"
};
const Potato: Plant = {
    id: 12,
    species: "Solanum tuberosum",
    nickname: "Potato",
    topImage: PotatoTD,
    sideImage: PotatoSV,
    size: 4,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 54,
    region: "North America",
    price: 450,
    category: "Farmable"
};
const Aloe: Plant = {
    id: 13,
    species: "Aloe barbadensis miller",
    nickname: "Aloe Vera",
    topImage: SuccTD,
    sideImage: SuccSV,
    size: 5,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 19,
    region: "Oceania",
    price: 450,
    category: "Cacti"
};
const Succulent: Plant = {
    id: 14,
    species: "Crassula ovata",
    nickname: "Succulent",
    topImage: AloeTD,
    sideImage: AloeSV,
    size: 4,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 4,
    region: "Global",
    price: 450,
    category: "Cacti"
};
const Lily: Plant = {
    id: 15,
    species: "Lily",
    nickname: "Lily",
    topImage: lily,
    sideImage: lily,
    size: 4,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 4,
    region: "Global",
    price: 700,
    category: "Cacti"
};
const flowersssbush: Plant = {
    id: 16,
    species: "Bush of Flowers",
    nickname: "Bush of Flowers",
    topImage: flowerbush,
    sideImage: flowerbush,
    size: 4,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 4,
    region: "Global",
    price: 450,
    category: "Cacti"
};
const flowerbushss: Plant = {
    id: 17,
    species: "Flower Bush",
    nickname: "Flower Bush",
    topImage: flowersbush,
    sideImage: flowersbush,
    size: 4,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 4,
    region: "Global",
    price: 450,
    category: "Cacti"
};
const Crazy: Plant = {
    id: 18,
    species: "Crazy Plant",
    nickname: "Crazy",
    topImage: crazy,
    sideImage: crazy,
    size: 4,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 4,
    region: "Global",
    price: 450,
    category: "Cacti"
};
const Vase: Plant = {
    id: 19,
    species: "Vase",
    nickname: "Vase",
    topImage: flowervase,
    sideImage: flowervase,
    size: 4,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 4,
    region: "Global",
    price: 450,
    category: "Cacti"
};
const SnakePlant: Plant = {
    id: 20,
    species: "Snake Plant",
    nickname: "Snake",
    topImage: snakeplant,
    sideImage: snakeplant,
    size: 4,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 4,
    region: "Global",
    price: 700,
    category: "Cacti"
};
const shrubs: Plant = {
    id: 21,
    species: "Shrub",
    nickname: "Shrub",
    topImage: shrub,
    sideImage: shrub,
    size: 4,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 4,
    region: "Global",
    price: 700,
    category: "Cacti"
};
const bushofflowers: Plant = {
    id: 22,
    species: "Bush Flowers",
    nickname: "Flowers",
    topImage: bushflowers,
    sideImage: bushflowers,
    size: 4,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 4,
    region: "Global",
    price: 700,
    category: "Cacti"
};
const christmass: Plant = {
    id: 23,
    species: "Christmas",
    nickname: "CMas",
    topImage: christmas,
    sideImage: christmas,
    size: 4,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 4,
    region: "Global",
    price: 450,
    category: "Cacti"
};
const flowers2: Plant = {
    id: 24,
    species: "Flowers",
    nickname: "Flowers",
    topImage: flowers,
    sideImage: flowers,
    size: 4,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 4,
    region: "Global",
    price: 700,
    category: "Cacti"
};
const Ctree: Plant = {
    id: 25,
    species: "Christmas Tree",
    nickname: "Christmas",
    topImage: tree,
    sideImage: tree,
    size: 4,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 4,
    region: "Global",
    price: 300,
    category: "Tree"
};
const Rock: Plant = {
    id: 26,
    species: "Rock",
    nickname: "Rock",
    topImage: rock,
    sideImage: rock,
    size: 4,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 4,
    region: "Global",
    price: 700,
    category: "Decorations"
};

const LemonTree: Plant = {
    id: 27,
    species: "Citrus limon",
    nickname: "Lemon Tree",
    topImage: LemonTD,
    sideImage: LemonSV,
    size: 14,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 62,
    region: "Asia",
    price: 300,
    category: "Tree"
};
const RedMapleTree: Plant = {
    id: 28,
    species: "Acer rubrum",
    nickname: "Red Maple",
    topImage: RedMapleTD,
    sideImage: RedMapleSV,
    size: 20,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 10,
    region: "North America",
    price: 300,
    category: "Tree"
};
const Bush: Plant = {
    id: 29,
    species: "Betula",
    nickname: "Bush",
    topImage: BushTD,
    sideImage: BushSV,
    size: 8,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 15,
    region: "Global",
    price: 700,
    category: "Decorations"
};
const Path: Plant = {
    id: 30,
    species: "Path",
    nickname: "Path",
    topImage: pathTD,
    sideImage: pathTD,
    size: 10,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 0,
    region: "Global",
    price: 700,
    category: "Decorations"
};
export const PropListArr = [
    Cactus,
    Tomato,
    RedRoses,
    YellowRoses,
    Sunflower,
    Lilac,
    Chrysanthemum,
    SiberianBugloss,
    Bamboo,
    Cabbage,
    Corn,
    Potato,
    Aloe,
    Succulent,
    Lily,
    flowersssbush,
    flowerbushss,
    Crazy,
    Vase,
    SnakePlant,
    shrubs,
    bushofflowers,
    christmass,
    flowers2,
    Ctree,
    Rock,
    LemonTree,
    RedMapleTree,
    Bush,
    Path
];

export const defaultProps = [
    Cactus,
    Tomato,
    RedRoses,
    YellowRoses,
    Sunflower,
    Lilac,
    Chrysanthemum,
    SiberianBugloss,
    Bamboo,
    Cabbage,
    Corn,
    Potato,
    Aloe,
    Succulent,
    Lily,
    flowersssbush,
    flowerbushss,
    Crazy,
    Vase,
    SnakePlant,
    shrubs,
    bushofflowers,
    christmass,
    flowers2,
    Ctree,
    Rock,
    LemonTree,
    RedMapleTree,
    Bush,
    Path
];
