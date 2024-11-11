import { useParams } from "react-router-dom";

const ProductInfo =() => {
    const {id} = useParams();
    return(
        <>
       <h1 className="text-3xl pt-4 font-bold"> Info for Product Id :{id}</h1>
        </>
    );
}
export default ProductInfo;