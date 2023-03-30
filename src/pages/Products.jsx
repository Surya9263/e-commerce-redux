import {
  Box,
  Flex,
  Select,
  SimpleGrid,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Product from "../components/Product";
import { ADD_TO_CART } from "../store/cart/cart.types";
import { getProducts } from "../store/product/product.actions";

function Products() {
    const [isCurr,setISCurr]=useState()
  const navigate = useNavigate();
  const { loading, error, products, cart } = useSelector(
    (store) => store.products
  );
  console.log({ loading, error, products });

  const data = useSelector((store) => store);
  console.log(data);

  const handleAddToCart = (id) => {
    if (currentUser?.email) {
      dispatch({
        type: ADD_TO_CART,
        payload: { id, email: data?.users?.currentUser.email },
      });
    } else {
      navigate("/login");
    }
  };

  const handleFilter = (e) => {
    dispatch(getProducts(e.target.value));
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(()=>{},[])

  if (loading) {
    return (
      <SimpleGrid columns={[1, 2, 3]} spacing="40px">
        <Skeleton height="250" width="100%" />
        <Skeleton height="250" width="100%" />
        <Skeleton height="250" width="100%" />
      </SimpleGrid>
    );
  }

  return (
    <>
      <Select
        onChange={handleFilter}
        m={"auto"}
        my={10}
        width={"20%"}
        placeholder="Select category"
      >
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's clothing</option>
        <option value="women's clothing">Women's clothing</option>
      </Select>
      <SimpleGrid columns={[1, 2, 3]} spacing="40px">
        {products?.map((e) => (
          <Product
            id={e.id}
            img={e.image}
            name={e.title}
            price={e.price}
            description={e.description}
            rating={e.rating.rate}
            handleAddToCart={() => handleAddToCart(e.id)}
          />
        ))}
      </SimpleGrid>
    </>
  );
}

export default Products;
