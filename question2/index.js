
    const input = [ 
        { 
            name: "company", 
            type: "IS", 
            value: ["Apple", "Google"], 
        }, 
        { 
            name: "technology", 
            type: "IS", 
            value: ["Javascript", "React"], 
        }, 
        { 
            name: "technology", 
            type: "NOT", 
            value: ["Vue", "Angular"], 
        }, 
        { 
            name: "company", 
            type: "NOT", 
            value: ["Microsoft", "Wipro"], 
        }, 
        { 
            name: "location", 
            type: "NOT", 
            value: ["Bangalore", "Chennai"], 
        } 
    ]
        
let output = {};


input.map((item)=>{
    if(output[item.name] === undefined){
        output[item.name] ={
            [item.type]:item.value
        }
    }
    else{

        output[item.name] ={
            ...output[item.name],[item.type]:item.value
        }
    }
});


console.log(output);