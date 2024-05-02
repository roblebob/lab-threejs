import { proxy } from 'valtio';

const state = proxy({
    intro: true,  // are we in the home page or not
    color: "#EFBD48",
    isLogoTexture: true, // are we displaying the logo on the shirt or not
    isFullTexture: false,
    logoDecal: "./threejs.png", // the initial logo to display on the shirt
    fullDecal: "./threejs.png" // initial full texture shirt
});

export default state;