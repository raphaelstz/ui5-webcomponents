import { registerIcon } from "@ui5/webcomponents-base/dist/SVGIconRegistry.js";

const name = "sap-icon://camera";
const d = "M480 128q9 0 16 4 6 3 11 9t5 17v290q0 12-9 22t-23 10H32q-13 0-22.5-10T0 448V158q0-13 9.5-21.5T32 128h64q4-14 12-30.5t17-31T143 42t17-10h192q8 0 17.5 9.5t18.5 24T404 97t12 31h64zm0 32h-87l-7-22q-8-25-20-46t-19-28H166q-8 7-19.5 28T127 138l-7 22H32v288h448V160zm-224 0q27 0 50 10t40.5 27.5 27.5 41 10 49.5q0 27-10 50t-27.5 40.5T306 406t-50 10-50-10-40.5-27.5T138 338t-10-50q0-26 10-49.5t27.5-41T206 170t50-10zm0 224q40 0 68-28t28-68-28-68-68-28-68 28-28 68 28 68 68 28zm176-192q16 0 16 16t-16 16-16-16 16-16z";

registerIcon(name, d);
