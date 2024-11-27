import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./icons";
import "./Cart.css"

export function Cart(){
    const cartChecboxId = useId()

    return (
        <>
        <label className="cart-button" htmlFor={cartChecboxId}>
            <CartIcon />
        </label>
        <input type="checkbox" id={cartChecboxId} />
        <aside className="cart">
            <ul>
                <li>
                    <img src="https://ih1.redbubble.net/image.2481861407.2898/icr,iphone_16_tough,back,a,x600-pad,600x600,f8f8f8.jpg" alt="iphone" />
                    <div>
                        <strong>iphone</strong>
                    </div>
                    <footer>
                        <small>
                            Qty: 1
                        </small>
                    </footer>
                </li>
            </ul>
            <button>
            <ClearCartIcon />
            </button>
        </aside>
        </>
    )
}