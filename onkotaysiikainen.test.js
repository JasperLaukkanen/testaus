const onkotaysiIkainen = require('./onkotaysiikainen');
test('18 on täysiikäinen', ()=>{
expect(onkotaysiIkainen(18)).toBe(true);

});


test('17 ei ole täysiikäinen', ()=>{
    expect(onkotaysiIkainen(17)).toBe(false);
    
});


test('NaN throws error', ()=>{
    expect(()=>onkotaysiIkainen('hei')).toThrow();
        
});