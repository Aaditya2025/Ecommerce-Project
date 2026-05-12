export interface SignUp{
    name:string, 
    password:string, 
    email:string
}

export interface Login{
    email:string, 
    password:string
}

export interface product{
    quantity: undefined | number
    expanded: any
    imageUrl: any
    id:number,
    name: string, 
    price: number, 
    category: string, 
    color: string, 
    description: string, 
    image: string
    rating?: number
}
export interface cart{
    quantity: undefined | number
    expanded: any
    imageUrl: any
    id:number | undefined,
    name: string, 
    price: number, 
    category: string, 
    color: string, 
    description: string, 
    image: string,
    rating?: number,
    userId?: number,
    productId?: number
}