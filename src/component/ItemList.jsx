import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/CartSlice";
    
const ItemList = ({items}) => {
    console.log("Hey",items)

     const dispatch = useDispatch() 

     const handleAddItem = (item) => {
      dispatch(addItem(item))
     }

    return (
      <div>
        {items.map((item) => (
            <div key={item.card.info.id}  className="p-2 m-2 border-gray border-b-2 text-left flex justify-between">
                <div className="w-9/12">
                <div className="p-2">
                    <span>{item.card.info.name}</span>
                    <span>-₹ {item.card.info.price ? item.card.info.price/100 :item.card.info.defaultPrice/100 }</span>
                </div>
                <p className="text-xs text-left">{item.card.info.description}</p>
                </div>
                <div className="w-3/12 p-4">
                <div className="absolute">
                <button className="p-2 mx-10 rounded-lg bg-black text-white textshadow-lg" onClick={() => handleAddItem(item)}>Add+</button>
                </div>
                <img src={CDN_URL+item.card.info.imageId} className="w-full"/>
                </div>-
            </div>
        ))}
      </div>
    )
}
export default ItemList;