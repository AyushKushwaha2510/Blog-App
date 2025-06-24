import React from "react";
import { Link } from "react-router-dom";

function PostCard() {

    return (
        // <Link>
        //     <div>
        //         <div>
        //             <img src="https://stock.adobe.com/search?k=sample" alt="" />
        //         </div>
        //         <h2>FAEWEW</h2>
        //     </div>
        // </Link>

        <div className="w-full bg-amber-600">
            <div className="w-80 bg-emerald-400 h-80" >
                {/* <img src="https://www.istockphoto.com/photos/free-sample" alt="" /> */}
                <img src="" alt="" />
            </div>
            <h2 className="text-xl font-bold">Lorem, ipsum.</h2>
        </div>
    )
}

export default PostCard;