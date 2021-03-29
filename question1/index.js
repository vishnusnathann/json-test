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
        


let output = [];

const resultPromise = new Promise(async (res,rej)=>{
    await input2.map(async (input2_item)=>{
        let temp_item = {};
        temp_item.title = input2_item.title
        // console.log(temp_item);
        await input1.map(async (input1_item,index)=>{
            temp_item =  {...temp_item,[`data${index}`]: input1_item.node[input2_item.key]}
            
        })

        // await console.log(temp_item);
        output.push(temp_item);
        // await console.log(output);
    });
        res("done")
})


resultPromise.then(res =>{
    console.log(output);
})



// console.log(output);