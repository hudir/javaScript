let testTitle = 'Tst title value';

let postTitle = 'title';
let desTest = 'description';

const post = {
    title:'Post title',
    description:'Post description'
};
// console.log('1',post[desTest]);
// Dot notation
// console.log(post.title);
// Bracket notation
// console.log(post['description']);
// another way( check line Nr 3 )
// console.log(post[postTitle]);
// console.log(post[testTitle]) // undefined

//Add new props in object
post.views = 10;
post.user = 'hudir';

// Modify props in object
post.views = 11;
post.views++;
// console.log(post.views);
// console.log(post.title)
post.title = 'update the title!';
// console.log(post.title)

// Delete props in object
delete post.views;
// console.log(post)

// Computed properties

let personName =11;
let personAge = 'age';

const person = {
    [personName] : 'Pilar',
    [personAge] : 33,
    test: personName
};
// console.log(person);

const blogPost = ['title','description', 'views'];
/* let blogPost_object = {
    [blogPost[0]]: 1,
    [blogPost[1]]: 2,
    [blogPost[2]]: 3
}; */
const blogPost_object = {};
for (let i = 0; i < blogPost.length; i++) {
    blogPost_object[blogPost[i]] = 'Blog-'+ blogPost[i];
}
// console.log(blogPost_object)

const obj = {
    for:1,
    length:12,
    return: 22
};
// console.log(obj);

// Nested objects
const user1 = {
    name:{
        firstName: 'Max',
        lastName: 'Tommy'
    },
    address: {
        strName: 'Berliner Str.',
        strNumber: 19,
        pinCode: 12345,
        city: 'Berlin'
    },
    age: 30
};
// console.log(user1.name.firstName);

let userInTemplate = `
${user1.name.firstName} ${user1.name.lastName} ${user1.address}
${user1.address.strName} ${user1.address.strNumber} 
${user1.address.pinCode} ${user1.address.city}  
`;
// console.log(userInTemplate)
// console.log(user1.address + '111')

function creatUser(userName, userAge) {
    return {
        'User Name': userName,
        'User Age': userAge
    };
};
// console.log(creatUser('hudir',35))
// console.log(creatUser('Alex',28))

//------#######------------

// Objects in array
const schoolClass = [
    {
      name: "Byron",
      email: "byron@gmail.com"
    },
    {
      name: "Diala",
      email: "diala@gmail.com"
    },
    {
      name: "Fidan",
      email: "fidan@gmail.com"
    }
  ];
  
  for (let i = 0; i < schoolClass.length; i++) {
    if (schoolClass[i].name === "Byron") {
      console.log(schoolClass[i].name, schoolClass[i].email);
    } else {
      console.log(schoolClass[i].email);
    }
  }
  
  /**
let template = "";
for (let i = 0; i < schoolClass.length; i++) {
  template += `<li>${schoolClass[i].email}</li>`;
}

console.log(template);
*/
/*
<li>byron@gmail.com</li>
<li>diala@gmail.com</li>
<li>fidan@gmail.com</li> 
*/

//el.innerHTML = template;
   
  /* Byron byron@gmail.com 
  diala@gmail.com 
  fidan@gmail.com 
    */
  
  // Display the data in HTML



//  const el = document.getElementById('app');

// el.innerHTML = '<li>test<li>'


let template = "";
for (let i = 0; i < schoolClass.length; i++) {
  template += `<li>${schoolClass[i].email}</li>`;
}

console.log(template);

/*
<li>byron@gmail.com</li>
<li>diala@gmail.com</li>
<li>fidan@gmail.com</li> 
*/

// el.innerHTML = template;