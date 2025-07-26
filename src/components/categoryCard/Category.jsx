import { Flex, Stack, Text } from "@mantine/core";
import CategoryCard from "./CategoryCard";

export default function Category({ item, cart, addCart, deleteCart }){
    return (
        <Stack mb={'xl'} justify="center">
            <Text size="xl" fw={700}>{item.categoryName}</Text>
            <Flex gap={'xl'} wrap={'wrap'} justify="flex-start">
                {
                    item.products.map((product, index) => (
                        <CategoryCard 
                            key={index}
                            product={{categoryName: item.categoryName, ...product}}
                            cart={cart}
                            addCart={addCart}
                            deleteCart={deleteCart}
                        />
                    ))
                }
            </Flex>
        </Stack>
    );
}