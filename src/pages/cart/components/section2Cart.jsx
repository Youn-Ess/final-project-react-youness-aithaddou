import { useContext, useEffect } from "react"
import img from "../../../assets/images/banner-07.jpg"
import { MyContext } from "../../../utils/ContextProvider"

export const Section2Cart = () => {
    const { setStoreDataBase, storeDataBase, cartDataBase, setCartDataBase } = useContext(MyContext)
    const calcSum = () => {
        let sum = 0
        let sumArray = []
        cartDataBase.forEach(element => {
            let sumEachProduct = element.quantitySelected * element.productPrice
            sumArray.push(sumEachProduct)
        });
        console.log(sumArray);
        sum = sumArray.reduce((a, b) => a + b, 0)
        return sum.toFixed(2)
    }
    useEffect(() => {
        calcSum()
    }, [cartDataBase])


    return (
        <>
            <div className="flex flex-col gap-3 lg:px-[13rem] py-[4rem]">
                <div className="px-[2.5rem] flex justify-between">
                    <p className="text-[0.9rem] font-bold text-gray-600">PRODUCT IMAGE</p>
                    <p className="text-[0.9rem] font-bold text-gray-600">PRODUCT NAME</p>
                    <p className="text-[0.9rem] font-bold text-gray-600">UNIT PRICE</p>
                    <p className="text-[0.9rem] font-bold text-gray-600">QUANTITY</p>
                    <p className="text-[0.9rem] font-bold text-gray-600">TOTAL</p>
                </div>
                <div>
                    {/* <div className="border py-[2rem] px-[2.5rem] flex items-center justify-between">
                        <div className="h-[20vh] w-[10%]" style={{ backgroundImage: `url(${img})`, backgroundPosition: `center`, backgroundSize: `cover` }}></div >
                        <div>
                            <h1 className="text-[1.1rem] font-light text-gray-500" >product name</h1>
                        </div>
                        <div>
                            <h1 className="text-[1.1rem] font-light text-gray-500" >product price 30$</h1>
                        </div>
                        <div>
                            <input type="number" min="1" max="20" placeholder="quantity" className="border px-2 rounded-sm text-[1rem]" />
                        </div>
                        <div>
                            <h1 className="text-[1.1rem] font-light text-gray-500" >total 100$</h1>
                        </div>
                    </div> */}
                    {
                        cartDataBase.map(element =>
                            <>
                                <div className="border py-[2rem] px-[2.5rem] flex items-center justify-between">
                                    <div className="h-[20vh] w-[10%]" style={{ backgroundImage: `url(${element.productImage})`, backgroundPosition: `center`, backgroundSize: `cover` }}></div >
                                    <div>
                                        <h1 className="text-[1.1rem] font-light text-gray-500" >{element.productName}</h1>
                                        <h1 className="text-[1.1rem] font-light text-gray-500" >{element.sizeSelected}</h1>
                                    </div>
                                    <div>
                                        <h1 className="text-[1.1rem] font-light text-gray-500" >${element.productPrice}</h1>
                                    </div>
                                    <div>
                                        <input value={element.quantitySelected} type="number" min="1" max="20" placeholder="quantity" className="border px-2 rounded-sm text-[1rem]" />
                                    </div>
                                    <div>
                                        <h1 className="text-[1.1rem] font-light text-gray-500" >${(element.productPrice * element.quantitySelected).toFixed(2)}</h1>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
                <div>
                    <h1>Subtotal : ${calcSum()}</h1>
                </div>
            </div>
        </>
    )
}