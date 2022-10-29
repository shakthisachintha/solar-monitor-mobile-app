import { Messages } from "./messages";

export const translations: Record<keyof typeof Messages, Record<any, string>> = {
    TITLE_MAIN_SCREEN: { eng: "Solar Home Monitor" },
    TEXT_BATTERY: { eng: "Battery" },
    TEXT_SOLAR: { eng: "Solar" },
    TEXT_INVERTER: { eng: "Inverter" },
    TEXT_UTILITY: { eng: "Utility" },
    TEXT_VOLTAGE: { eng: "Voltage" },
    TEXT_CURRENT: { eng: "Current" },
    TEXT_OUTPUT: { eng: "Output" },
    TEXT_POWER: { eng: "Power" },
    TEXT_INPUT_CURRENT: { eng: "Input Current" },
    TEXT_INPUT_VOLTAGE: { eng: "Input Voltage" },
    TEXT_CHARGE_CURRENT: { eng: "Charge Current" },
    TEXT_CAPACITY: { eng: "Capacity" },
    TEXT_BATTERY_CHARGE: { eng: "Battery Charge" },
    TEXT_OUTPUT_CURRENT: {eng: "Output Current"},
    TEXT_OUTPUT_POWER: {eng: "Output Power"},
    TEXT_FREQUENCY: {eng: "Frequency"}
}