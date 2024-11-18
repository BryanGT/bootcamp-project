import { useQuery } from "@tanstack/react-query"
import { Product } from "@repo/schemas";
import { ProductCard } from "./ProductCard";

export type ListProductsResponse = {
    status: string;
    data: Product[];
};

export const ProductList = () => {
    const { status, data, error } = useQuery <ListProductsResponse> ({ 
        queryKey: ['products'],
        queryFn: () => {
            console.log('fetch data');
            return fetch('http://localhost:5001/api/products').then((result) => result.json())
        }
    })

    console.log(status)
    console.log(data)

    if (status === 'pending') {
        return <span>Loading...</span>
    }

    if (status === 'error') {
        return <span>Error: {error.message}</span>
    }

    return (
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(250px,1fr))]">
            {data.data.map((item) => (
                /*<div className="item" key={item.id}>
                    <img src={item.image ?? undefined}></img>
                    <h2>{item.name}</h2>
                    <p>{item.description ?? undefined}</p>
                </div>*/
                <ProductCard key={item.id} product={item} />
            ))}
        </div>
    )
}