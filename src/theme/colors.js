import { createTheme } from '@mantine/core';

export const lightThemeColors = {
    orange: [
        "#fff4e6",
        "#ffe8cc",
        "#fbc17e",
        "#f9a94d",
        "#f89728",
        "#f6972a",
        "#f6972a",
        "#ea8f27",
        "#ea8f27",
        "#e18b28",
    ],
    red: [
        "#fff5f5",
        "#ffe3e3",
        "#ffc9c9",
        "#ffa8a8",
        "#ff8787",
        "#ff6b6b",
        "#fa5252",
        "#f03e3e",
        "#c92a2a",
    ],
    green: [
        "#ebfbee",
        "#d3f9d8",
        "#b2f2bb",
        "#8ce99a",
        "#69db7c",
        "#51cf66",
        "#40c057",
        "#37b24d",
        "#2f9e44",
        "#2b8a3e",
    ],
    gray: [
        "#f5f7fa",
        "#f1f3f5",
        "#e9ecef",
        "#dee2e6",
        "#ced4da",
        "#adb5bd",
        "#868e96",
        "#495057",
        "#343a40",
        "#212529",
    ],
    dark: [
        "#c1c2c5",
        "#a6a7ab",
        "#909296",
        "#5c5f66",
        "#373a40",
        "#2c2e33",
        "#25262b",
        "#1a1b1e",
        "#141517",
        "#101113",
        "#33363C",
        "#3F434A"
    ],
};

export const theme = createTheme({
    colors: {
        ...lightThemeColors,
    },
});