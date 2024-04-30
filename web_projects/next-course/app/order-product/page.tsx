"use client"
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing order");
    router.push("/");
  };
  return (
    <>
      <h1>Plase Order</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}
