import type { Product } from "@/lib/types/product";

type ProductCategory = "Accessories" | "Apparel" | "Beds" | "Collars" | "Grooming" | "Toys";

// Accessories (15)
import { adjustableNylonHarness } from "./adjustable-nylon-harness";
import { retractableLeash } from "./retractable-leash";
import { leatherBraidedLeash } from "./leather-braided-leash";
import { stainlessSteelFoodBowl } from "./stainless-steel-food-bowl";
import { elevatedDoubleFeeder } from "./elevated-double-feeder";
import { travelWaterBottle } from "./travel-water-bottle";
import { canvasCarrierTote } from "./canvas-carrier-tote";
import { carSeatCover } from "./car-seat-cover";
import { gpsCollarAttachment } from "./gps-collar-attachment";
import { siliconeTreatPouch } from "./silicone-treat-pouch";
import { airlineApprovedCarrier } from "./airline-approved-carrier";
import { trainingClickerSet } from "./training-clicker-set";
import { petFirstAidKit } from "./pet-first-aid-kit";
import { velvetPouch } from "./velvet-pouch";
import { giftBox } from "./gift-box";

// Apparel (11)
import { waterproofRainJacket } from "./waterproof-rain-jacket";
import { fleecePulloverSweater } from "./fleece-pullover-sweater";
import { insulatedWinterCoat } from "./insulated-winter-coat";
import { rubberPawBootsSet } from "./rubber-paw-boots-set";
import { cottonBandanaPack } from "./cotton-bandana-pack";
import { meshCoolingVest } from "./mesh-cooling-vest";
import { cottonCableKnitSweater } from "./cotton-cable-knit-sweater";
import { reflectiveSafetyVest } from "./reflective-safety-vest";
import { formalBowTieTuxedo } from "./formal-bow-tie-tuxedo";
import { denimDogJacket } from "./denim-dog-jacket";
import { softHoodieSweatshirt } from "./soft-hoodie-sweatshirt";

// Beds (12)
import { orthopedicRectangleBed } from "./orthopedic-rectangle-bed";
import { roundBolsterBed } from "./round-bolster-bed";
import { elevatedCoolingCot } from "./elevated-cooling-cot";
import { caveHoodedBed } from "./cave-hooded-bed";
import { travelFoldingBed } from "./travel-folding-bed";
import { luxuryVelvetSofaBed } from "./luxury-velvet-sofa-bed";
import { outdoorWaterproofBed } from "./outdoor-waterproof-bed";
import { smallCatPerchBed } from "./small-cat-perch-bed";
import { extraLargePillowBed } from "./extra-large-pillow-bed";
import { heatedWinterBed } from "./heated-winter-bed";
import { crateMatCushion } from "./crate-mat-cushion";
import { memoryFoamMattressBed } from "./memory-foam-mattress-bed";

// Collars (12)
import { classicLeatherDogCollar } from "./classic-leather-dog-collar";
import { nylonAdjustablePuppyCollar } from "./nylon-adjustable-puppy-collar";
import { reflectiveSafetyCollar } from "./reflective-safety-collar";
import { paddedComfortCollar } from "./padded-comfort-collar";
import { wovenCottonRopeCollar } from "./woven-cotton-rope-collar";
import { canvasMartingaleCollar } from "./canvas-martingale-collar";
import { studdedLeatherCollar } from "./studded-leather-collar";
import { breakawayCatCollar } from "./breakaway-cat-collar";
import { embroideredNameCollar } from "./embroidered-name-collar";
import { tacticalDogCollar } from "./tactical-dog-collar";
import { bowTieCollar } from "./bow-tie-collar";
import { wideLeatherCollar } from "./wide-leather-collar";

// Grooming (12)
import { dualSidedSlickerBrush } from "./dual-sided-slicker-brush";
import { stainlessSteelNailClippers } from "./stainless-steel-nail-clippers";
import { desheddingTool } from "./deshedding-tool";
import { bambooPinBrush } from "./bamboo-pin-brush";
import { groomingScissorsSet } from "./grooming-scissors-set";
import { rubberGroomingMitt } from "./rubber-grooming-mitt";
import { electricNailGrinder } from "./electric-nail-grinder";
import { stainlessSteelComb } from "./stainless-steel-comb";
import { professionalGroomingTable } from "./professional-grooming-table";
import { fleaCombSet } from "./flea-comb-set";
import { absorbentDryingCoat } from "./absorbent-drying-coat";
import { matSplitterTool } from "./mat-splitter-tool";

// Toys (12)
import { plushSqueakyBall } from "./plush-squeaky-ball";
import { naturalRubberChewRing } from "./natural-rubber-chew-ring";
import { ropeTugToy } from "./rope-tug-toy";
import { interactiveTreatPuzzle } from "./interactive-treat-puzzle";
import { plushDuckToy } from "./plush-duck-toy";
import { rubberFetchBall } from "./rubber-fetch-ball";
import { canvasFrisbee } from "./canvas-frisbee";
import { crinkleTunnelToy } from "./crinkle-tunnel-toy";
import { rubberBoneChew } from "./rubber-bone-chew";
import { plushFoxSqueaker } from "./plush-fox-squeaker";
import { rubberBallLauncherSet } from "./rubber-ball-launcher-set";
import { catnipMouseTrio } from "./catnip-mouse-trio";

// Membership is exported separately — not in main catalog
export { happypawsRewardsMembership } from "./happypaws-rewards-membership";

export const ALL_PRODUCTS: Product[] = [
  // Accessories
  adjustableNylonHarness,
  retractableLeash,
  leatherBraidedLeash,
  stainlessSteelFoodBowl,
  elevatedDoubleFeeder,
  travelWaterBottle,
  canvasCarrierTote,
  carSeatCover,
  gpsCollarAttachment,
  siliconeTreatPouch,
  airlineApprovedCarrier,
  trainingClickerSet,
  petFirstAidKit,
  velvetPouch,
  giftBox,
  // Apparel
  waterproofRainJacket,
  fleecePulloverSweater,
  insulatedWinterCoat,
  rubberPawBootsSet,
  cottonBandanaPack,
  meshCoolingVest,
  cottonCableKnitSweater,
  reflectiveSafetyVest,
  formalBowTieTuxedo,
  denimDogJacket,
  softHoodieSweatshirt,
  // Beds
  orthopedicRectangleBed,
  roundBolsterBed,
  elevatedCoolingCot,
  caveHoodedBed,
  travelFoldingBed,
  luxuryVelvetSofaBed,
  outdoorWaterproofBed,
  smallCatPerchBed,
  extraLargePillowBed,
  heatedWinterBed,
  crateMatCushion,
  memoryFoamMattressBed,
  // Collars
  classicLeatherDogCollar,
  nylonAdjustablePuppyCollar,
  reflectiveSafetyCollar,
  paddedComfortCollar,
  wovenCottonRopeCollar,
  canvasMartingaleCollar,
  studdedLeatherCollar,
  breakawayCatCollar,
  embroideredNameCollar,
  tacticalDogCollar,
  bowTieCollar,
  wideLeatherCollar,
  // Grooming
  dualSidedSlickerBrush,
  stainlessSteelNailClippers,
  desheddingTool,
  bambooPinBrush,
  groomingScissorsSet,
  rubberGroomingMitt,
  electricNailGrinder,
  stainlessSteelComb,
  professionalGroomingTable,
  fleaCombSet,
  absorbentDryingCoat,
  matSplitterTool,
  // Toys
  plushSqueakyBall,
  naturalRubberChewRing,
  ropeTugToy,
  interactiveTreatPuzzle,
  plushDuckToy,
  rubberFetchBall,
  canvasFrisbee,
  crinkleTunnelToy,
  rubberBoneChew,
  plushFoxSqueaker,
  rubberBallLauncherSet,
  catnipMouseTrio,
];

export function getProductBySlug(slug: string): Product | undefined {
  return ALL_PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return ALL_PRODUCTS.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return ALL_PRODUCTS.filter((p) => p.isFeatured);
}

export function getAllCategories(): ProductCategory[] {
  const categories = new Set(ALL_PRODUCTS.map((p) => p.category));
  return Array.from(categories) as ProductCategory[];
}
