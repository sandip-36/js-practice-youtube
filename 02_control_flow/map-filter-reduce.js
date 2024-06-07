

// foreach >>>>>>>>>>>>>>>>>>>>>>


const coding = ["js", "ruby", "python", "java", "cpp"]

// const value = coding.forEach((item) => {  // we cant return value or print in foreach loop
//     // console.log(item);
//     return item
// })

// console.log(value);


// filter >>>>>>>>>>>>>>>>>>>


const mynums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newnum = mynums.filter( (num) => num > 4  // this is how filter used same as foreach but it will give you return 
// )

// const newnum = mynums.filter( (num) => { // and you have to write return for output when you used "{"
//     return num > 4 
// })

// console.log(newnum);

// const newnums = []

// mynums.forEach((num) => {
//     if(num > 4){
//         newnums.push(num)
//     }
// })

// console.log(newnums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userbook = books.filter((bk) => bk.genre === 'History' )

  userbook = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === 'History'
  });

  // console.log(userbook);


// map >>>>>>>>>>>>>>>>>>>


  const mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // const newnum = mynumbers.map((add) => {
  //     return add + 10
  // })

  const newnum = mynumbers
          .map((num) => num * 10)
          .map((digit) => digit + 1 )
          .filter((retain) => retain >= 40 )

  // console.log(newnum);


//  reduce  >>>>>>>>>>>>

const renum = [1, 2, 3]

// const redc = renum.reduce(function (acc, crnt) {
//   console.log(`acc: ${acc} and currentval: ${crnt}`);
//   return acc + crnt
// }, 0)

const redc = renum.reduce((acc, crnt) => acc+crnt , 0)

console.log(redc);

const shoppingcart = [
  {
    courseName : "JS",
    coursePrice : 3999
  },
  {
    courseName : "py",
    coursePrice : 999
  },
  {
    courseName : "Java",
    coursePrice : 1999
  },
  {
    courseName : "Data Science",
    coursePrice : 13999
  }
]

const total = shoppingcart.reduce((acc, item) => acc + item.coursePrice, 0)

console.log(total);
