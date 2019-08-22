import { registerIcon } from "@ui5/webcomponents-base/dist/SVGIconRegistry.js";

const name = "sap-icon://supplier";
const d = "M352 96q0 40-28 68t-68 28-68-28-28-68 28-68 68-28 68 28 28 68zm-96 64q27 0 45.5-19T320 96t-18.5-45T256 32q-26 0-45 19t-19 45 19 45 45 19zM128 352h256v160H128V352zm-96 48q0-20 14-34t34-14h16v96H80q-20 0-34-14t-14-34zm400-48q20 0 34 14t14 34-14 34-34 14h-16v-96h16zm-48-32v-32q0-11-7.5-22.5T356 245t-30.5-15-37.5-6h-64q-20 0-37.5 6T156 245t-20.5 20.5T128 288v32H96q1-35 11.5-59.5T135 221t40-22 49-7h64q27 0 50 6.5t40.5 21.5 27.5 39.5 10 60.5h-32zm-32-32v32h-96v-32h96z";

registerIcon(name, d);
