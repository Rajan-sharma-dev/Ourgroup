import react from "react";
import jeans from '../assets/jeans.jpg'
import tshirt from '../assets/tshirt.jpg'
import shirt from '../assets/shirt.jpg'
import trousers from '../assets/trousers.jpg'
import fold from '../assets/fold.png'

import iron from '../assets/iron.png'
import liquid from '../assets/liquid.png'
import wash from '../assets/wash.png'


import './Store.css'
const Store = () => {
    return (<>
        <div className="header-Store">
            <div className="h-details"><h3>Product</h3></div>
            <div className="q-details"><h3>Quantity</h3></div>
            <div className="w-details"><h3>Wash Type</h3></div>
            <div className="p-details"><h3>Price</h3></div>

        </div>

        <div className="item-1">

            <div className="details">
                <div className="img1"><img src={shirt} /></div>
                <div className="data">
                    <h3>Shirts</h3>
                    <p>Lorem Ipsum is the </p>
                </div>
            </div>
            <div className="quantity"><div className="blank">0</div></div>
            <div className="wash-type">
                <div className="img2"><img src={wash}/></div>
                <div className="img2"><img src={iron}/></div>
                <div className="img2"><img src={fold}/></div>
                <div className="img2"><img src={liquid}/></div>
            </div>
            <div className="price"><h1>_</h1></div>

        </div>
        <div className="item-1">

            <div className="details">
                <div className="img1"><img src={tshirt} /></div>
                <div className="data">
                    <h3> T Shirts</h3>
                    <p>Lorem Ipsum is the </p>
                </div>
            </div>
            <div className="quantity"><div className="blank">0</div></div>
            <div className="wash-type">
                <div className="img2"><img src={wash}/></div>
                <div className="img2"><img src={iron}/></div>
                <div className="img2"><img src={fold}/></div>
                <div className="img2"><img src={liquid}/></div>
            </div>
            <div className="price"><h1>_</h1></div>

        </div>
        <div className="item-1">

            <div className="details">
                <div className="img1"><img src={trousers} /></div>
                <div className="data">
                    <h3>Trousers</h3>
                    <p>Lorem Ipsum is the </p>
                </div>
            </div>
            <div className="quantity"><div className="blank">0</div></div>
            <div className="wash-type">
                <div className="img2"><img src={wash}/></div>
                <div className="img2"><img src={iron}/></div>
                <div className="img2"><img src={fold}/></div>
                <div className="img2"><img src={liquid}/></div>
            </div>
            <div className="price"><h1>_</h1></div>

        </div>
        <div className="item-1">

            <div className="details">
                <div className="img1"><img src={jeans} /></div>
                <div className="data">
                    <h3>Jeans</h3>
                    <p>Lorem Ipsum is the </p>
                </div>
            </div>
            <div className="quantity"><div className="blank">0</div></div>
            <div className="wash-type">
                <div className="img2"><img src={wash}/></div>
                <div className="img2"><img src={iron}/></div>
                <div className="img2"><img src={fold}/></div>
                <div className="img2"><img src={liquid}/></div>
            </div>
            <div className="price"><h1>_</h1></div>

        </div>
        <div className="item-1">

            <div className="details">
                <div className="img1"><img src={shirt} /></div>
                <div className="data">
                    <h3>Shairts</h3>
                    <p>Lorem Ipsum is the </p>
                </div>
            </div>
            <div className="quantity"><div className="blank">0</div></div>
            <div className="wash-type">
                <div className="img2"><img src={wash}/></div>
                <div className="img2"><img src={iron}/></div>
                <div className="img2"><img src={fold}/></div>
                <div className="img2"><img src={liquid}/></div>
            </div>
            <div className="price"><h1>_</h1></div>

        </div>
    </>)

}

export default Store