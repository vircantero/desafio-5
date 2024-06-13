let productos = ["heladera", "sofa", "tv LG"];

for (let index = 0; index < productos.length; index++){
    const element = productos[index];
    console.log(element);
}

for (let index = 0; index < productos.length; index ++){
    const result = productos[index].pop;
    console.log(result);
}
