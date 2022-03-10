import React, { useContext, useEffect } from "react";
import { InfoSection } from "../../components";
import { homePageOne, homePageTwo, homePageThree, homePageFour } from "./data";
import { ConfigContext } from "../../helper/config.context";

function HomePage() {
    const config = useContext(ConfigContext);

    return (
        <div>
            
            <InfoSection {...homePageOne} />
            <InfoSection {...homePageTwo} />
            {config.mode !== "construction" && (
                <>
                    <InfoSection {...homePageThree} />
                    <InfoSection {...homePageFour} />
                </>
            )}
        </div>
    );
}

export default HomePage;
