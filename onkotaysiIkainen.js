function onkotaysiIkainen(ika){
    if (typeof ika !=='number'){
        throw new Error("syötteen on oltava numero");
    }
    return ika <= 18;
}