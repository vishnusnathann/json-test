const input1 = [ 
    { 
    node: { 
    name: "Elliot Alderson", 
    age: "26", 
    qualification: "Btech", 
    jobTitle: "UI Developer", 
    collegeEducation: { 
    edges: [ 
    { 
    node: { 
    course: "Btech",
    collegeName: "MITS", 
    year: "2017", 
    }, 
    }, 
    ], 
    }, 
    schoolEducation: { 
    edges: [ 
    { 
    node: { 
    course: "High School", 
    schoolName: "STPS", 
    year: "2013", 
    }, 
    }, 
    ], 
    }, 
    }, 
    }, 
    { 
    node: { 
    name: "Darlene Alderson", 
    age: "32", 
    qualification: "MBA", 
    jobTitle: "HR Manager", 
    collegeEducation: { 
    edges: [ 
    { 
    node: { 
    course: "MBA", 
    collegeName: "IIM", 
    year: "2018", 
    }, 
    }, 
    ], 
    }, 
    schoolEducation: { 
    edges: [ 
    { 
    node: { 
    course: "High School", 
    schoolName: "Nirmala High School", 
    year: "2010",
    }, 
    }, 
    ], 
    }, 
    }, 
    }, 
    ]; 

    const input2 = [ 
    { 
    title: "Name", 
    key: "name", 
    }, 
    { 
    title: "Age", 
    key: "age", 
    }, 
    { 
    title: "Qualification", 
    key: "qualification", 
    }, 
    { 
    title: "Job Title", 
    key: "jobTitle", 
    }, 
    { 
    title: "College Education", 
    key: "collegeEducation", 
    children: [ 
    { 
    title: "College", 
    key: "education", 
    children: [ 
    { 
    title: "Course", 
    key: "collegeEducation", 
    dataKey: "course", 
    }, 
    { 
    title: "College Name",
    key: "collegeEducation", 
    dataKey: "collegeName", 
    }, 
    { 
    title: " Year", 
    key: "collegeEducation", 
    dataKey: "year", 
    }, 
    ], 
    }, 
    ], 
    }, 
    { 
    title: "School Education", 
    key: "schoolEducation", 
    children: [ 
    { 
    title: "College", 
    key: "education", 
    children: [ 
    { 
    title: "Course", 
    key: "schoolEducation", 
    dataKey: "course", 
    }, 
    { 
    title: "School Name", 
    key: "schoolEducation", 
    dataKey: "schoolName", 
    }, 
    { 
    title: "Year", 
    key: "schoolEducation", 
    dataKey: "year", 
    }, 
    ], 
    }, 
    ], 
    }, 
    ];
        


// declaring ouput object
let output = [];


const childrenFinder = (child_object,key,input1) =>{

    console.log(child_object,input1);


    temp_output = [];

    const temp_resultPromise = new Promise(async (res,rej)=>{
        await child_object.map(async (child_object_item)=>{
            let temp_item = {};
            temp_item.title = child_object_item.title
            if(child_object_item.children == undefined){
                await input1.map(async (input1_item,index)=>{
                    temp_item =  {...temp_item,[`data${index}`]: input1_item.node[child_object_item.key]}
                    
                })
            }
            else{
                
                temp_item = {...temp_item, children: childrenFinder(child_object_item.children,child_object_item.key,input1_item.node[input2_item.key].edges)}
            }
    
            temp_output.push(temp_item);
        });
            res("done")
    });

    temp_resultPromise.then(res =>{
        return(temp_output)
    })

}


const resultPromise = new Promise(async (res,rej)=>{
    await input2.map(async (input2_item)=>{
        let temp_item = {};
        temp_item.title = input2_item.title
        if(input2_item.children == undefined){
            await input1.map(async (input1_item,index)=>{
                temp_item =  {...temp_item,[`data${index}`]: input1_item.node[input2_item.key]}
                
            })
        }
        else{
            await input1.map(async (input1_item,index)=>{
                if(input1_item.node[input2_item.key])
                    temp_item = {...temp_item, children: childrenFinder(input2_item.children,input2_item.key,input1_item.node[input2_item.key].edges)}
            })
        }

        output.push(temp_item);
    });
        res("done")
})


resultPromise.then(res =>{
    console.log(output);
})



// console.log(output);