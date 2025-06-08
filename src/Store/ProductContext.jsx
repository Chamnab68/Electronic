  import axios from "axios";
  import { createContext, useEffect, useState } from "react";
  const ProductContext = createContext();
  export const ProductProvider = ({children}) => {

    const [products,setProducts] = useState([]);
    const [isloading,setisLoading] = useState(false);

    const FetchApi = async () =>{

        try{
            setisLoading(true);
            const res = await axios.get("https://product-server-json.onrender.com/products?fbclid=IwY2xjawKo7LhleHRuA2FlbQIxMABicmlkETFNT1NiNzQ2RFFWNW5iS1dtAR748j_4V_RttzHyGjLNbrglgtspdPrLEAi5j208fnB8LcyXqZZQx6lukduVbw_aem_fn223biHlE9uDqIO9S07RQ");
            setProducts(res.data);
        }catch(e){

        }finally{
            setisLoading(false);
        }
    }
    useEffect(()=>{
        FetchApi();
    },[]);

    return(
        <ProductContext.Provider value={{products,isloading}}>
            {children}
        </ProductContext.Provider>
    )
  }
  export default ProductContext;