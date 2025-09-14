const ProductCard = () =>{
    

    return(
        <div className="border-20 border-blue-600 w-[500px] h-[500px] flex flex-col items-center gap-2 justify-center pt-4 pb-4 pr-4 pl-4 rounded-3xl ">
            <img src="image.png" alt="image" className="size-50 border-amber-950 rounded-full" />
            <div className="flex flex-col items-center gap-4">
            <h2 className="font-bold text-4xl">Product 1</h2>
            <p className="font-serif text-blue-600 text-center text-5xl">iphone 17 pro max</p>
            <p className="font-stretch-95% text-3xl text-pink-700">199999rs-only</p>
            </div>
            <button className="bg-cyan-500 w-[50%] border-1 rounded-2xl cursor-pointer hover:bg-blue-50">Add to whistlist</button>
        </div>
        
    )
}
export default ProductCard