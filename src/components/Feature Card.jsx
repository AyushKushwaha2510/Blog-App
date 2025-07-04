import React from "react";

function FeatureCard({ featureHead, feature }) {

    return (
        <div className="max-w-full mx-2 lg:w-70 lg:mx-0 shadow-md shadow-orange-300 p-4 rounded-lg border-[0.5px] border-orange-300 ">
            <h2 className="font-semibold text-gray-700 text-lg dark:text-orange-400">{featureHead}</h2>
            <hr className="w-full border-t-2 border-orange-300 my-2 " />
            <p className="text-sm text-gray-600 dark:text-orange-100">{feature}</p>
        </div>
    )
}

export default FeatureCard;