import { Roboto, Source_Code_Pro } from "next/font/google";

const roboto = Roboto({
     subsets: ["latin"],
     weight: ["400", "500", "700"],
    });


const sourceCodePro = Source_Code_Pro({
        subsets: ["latin"],
        weight: ["400", "500", "700"],
        });
export {roboto, sourceCodePro}