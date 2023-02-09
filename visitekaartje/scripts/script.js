// variables
const fName = $('h1')
const lName = $('h2')
// const websiteLi = $('ul li:nth-of-type(2)')
// const bioLi = $('ul li:nth-of-type(3)')



// logica
fetchData()




// functions
function fetchData (){
    const url = 'https://whois.fdnd.nl/api/v1/member?id=cldex71y947xa0av0m7fidrwe'


    const data = fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        // iets gaan doen met de data
                        // data, h1 veranderen naar naam
                        changeHTML(data)
                    console.log(data.member.name)

                    })
}



function changeHTML (data) {
    // const myName = data.members.id
    const name = data.member.name
    

    const surname = data.member.surname
    

    // const website = data.member.website
    // websiteLi.innerHTML = website

    // const bio = data.member.bio
    // bioLi.innerHTML = bio

    const fullName = data.member.name + " " + data.member.surname
    fName.innerHTML = fullName
}


//if id = cldex71y947xa0av0m7fidrwe show data.members.name

function $ (element) {
    return document.querySelector(element)

}

function $$ (elements) {
    return document.querySelectorAll(elements)
}

