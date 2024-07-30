"use client"; 
import {useRouter} from  "next/navigation"; 

export default function  OdderProduct() {
    const router = useRouter();  
    const handleClick = () => {
        console.log("Palacing your order")
        router.push("/"); 

}; 
return (
    <>
    <h1>Order product</h1>
    <button onClick={handleClick}>Place order</button>
    </>

    
);
}