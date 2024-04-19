exports.getAllProduct = (req,res)=>{
    res.status(200);
    res.json([
        {
            id: 20,
            name: "mattress",
            price: "150,000"
          
        },

        {
            id: 30,
            name: "Table-Top Burner",
            price: "250,000"
          
        },

        {
            id: 35,
            name: "Laptop",
            price: "200,000"
          
        },

        {
            id: 40,
            name: "Samsung Tv",
            price: "550,000"
          
        },

    ]);
}

exports.getSingleProduct = (req,res)=>{
    res.status(200);
    res.json([
       

        {
            id: 40,
            name: "Samsung Tv",
            price: "550,000"
          
        },

    ]);
}

exports.updatedProduct = (req,res)=>{
    res.status(200);
    res.json([
       

        {
            id: 50,
            name: "Hisense Tv",
            price: "450,000"
          
        },

    ]);
}

exports.createNewProduct = (req,res)=>{
    res.status(200);
    res.json([
       

        {
            id: 55,
            name: "Hisense Tv",
            price: "400,000"
          
        },

    ]);
}

exports.deletedProduct = (req,res)=>{
    res.status(200);
    res.json([
       

        {
            id: 55,
            name: "Hisense Tv",
            price: "400,000"
          
        },

    ]);
}
  
      