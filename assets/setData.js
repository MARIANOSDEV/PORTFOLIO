let admin = "admin"
let passAdmin = ""
let $adminPortBtn = document.getElementById("adminPort");
let $formSkills = document.getElementById("formSkills")
let $registerSkillsBtn = document.getElementById("registerSkillsBtn")
let $formProjects = document.getElementById("formProjects")
let $registerProjectsBtn = document.getElementById("registerProjectsBtn")

if (sessionStorage.getItem("password")) {
    passAdmin = sessionStorage.getItem("password")
}

async function logAdmin() {
    if (admin == passAdmin) {
        window.location.href = `/html/admin.html`
    }
    else {
        const { value: password } = await Swal.fire({
            title: 'Ingrese su contraseña de administrador',
            input: 'password',
            inputPlaceholder: 'UAT contraseña = admin',
            confirmButtonColor: '#7100b3',
            inputAttributes: {
                maxlength: 10,
                autocapitalize: 'off',
                autocorrect: 'off',
            }
        })
        if (password == admin) {
            passAdmin = `${password}`
            sessionStorage.setItem("password", `${password}`)
            window.location.href = `/html/admin.html`
        }
        else {
            if (password) {
                Swal.fire({
                    title: "Contraseña incorrecta.",
                    confirmButtonColor: '#7100b3',
                })
            }
        }

    }
}

$adminPortBtn.onclick = () =>{
  logAdmin()
}

class ProjectsComplete {
    constructor(id, img, title,lowDesc,link){
        this.id = id,
        this.img = img,
        this.title = title,
        this.lowDesc = lowDesc
        this.link = link
    }
}
let projects = []
const projects1 = new ProjectsComplete (projects.length+1,"https://lh3.googleusercontent.com/pw/AMWts8Bihs1pgqTLxkqgR4FXTKc4Q7QQp6pQfW3GFHeruP_obWrJ225bTVfmUyn2375hEW-vaOMuMDsogb8R79Ne3gsFtdpD66FHj5GvTriw0pC0ehSOcMBEYQVYHCuBf1XkfAJMBkr3donmsJzHJEQ47WejVQ=w401-h313-no?authuser=0","CAI social website","My first project. I decided to archive it as I developed it, to never forget the beginnings!","https://marianosdev.github.io/EntregaFinal_JS/")

// if(localStorage.getItem("projects"))  {
//     for (let project of JSON.parse(localStorage.getItem("projects"))){
//     const newProjects = new ProjectsComplete(project.id,project.img,project.title,project.lowDesc,project.link)
//     projects.push(newProjects)
// }}
// else{
    projects.push(projects1)
//     localStorage.setItem("projects", JSON.stringify(projects))
// }

const registerProjects = () => {
    let img = $formProjects[0].value
    let title = $formProjects[1].value
    let lowDesc = $formProjects[2].value
    let href = $formProjects[3].value
    const newProjects = new ProjectsComplete (skills.length+1,img,title,lowDesc,href)
    projects.push(newProjects)
    // localStorage.setItem("projects", JSON.stringify(projects))
}

class CoursesComplete {
    constructor(id, img, title,lowDesc){
        this.id = id,
        this.img = img,
        this.title = title
        this.lowDesc = lowDesc
    }
}
let skills = []

const course1 = new CoursesComplete (skills.length+1,"https://lh3.googleusercontent.com/pw/AMWts8BLLtNznkT0l9_h--7kP2c2MPqWo9XrVv7DBDbfESGx8F2cV2clWerFnns9Pvumfp6y_m0GwxygZEFbScnExn6qwHKB4bwpfKqUR_CKVTj8ppQ4XalYlNfE2r49AEl9BCNFkvl0RvxIRR2bnQUOk6Mwhw=w1170-h823-no?authuser=0","Web development - CODERHOUSE","Course based on html, css and library development.")
const course2 = new CoursesComplete (skills.length+2,"https://lh3.googleusercontent.com/pw/AMWts8CfclqAFqeMIu3hTKKINPL7o_CvHDfNFjimt6ph8sQ-0a3Lwm3nRXL21GWl_oWGZp9H8MI41sUvXDQc_xhH0tKbs1E0r0c_Lv-5sw8gxmWeCiW3u2sSanVmUlpkiJ7RFRDKdQirIUK8liXWRP5I_twnug=w1066-h826-no?authuser=0","Introduction to backend - Platzi","General ideas about backend. Logic and roll within the team.")
const course3 = new CoursesComplete (skills.length+3,"https://lh3.googleusercontent.com/pw/AMWts8BYBVCfhXMLU_K9NJpb6CE6oa138p7kJOJlOPfBlat7gF6d2zeCEgSPsenRHEyuFPnLOWNsQOP3vLIgAjt5LH0qmexujtTK5ujykrpybg-w0mNMRP-dNGSXWc5je2uwk260R3Cvta17r5IEoklMgRmUeg=w1061-h820-no?authuser=0","GitHub professional - Platzi","Professional Git and GitHub management course.")
const course4 = new CoursesComplete (skills.length+4,"https://lh3.googleusercontent.com/pw/AMWts8C0mGmtnMsw09gIZ_OnP0ZhIpSFGZvlnZyBNQ5rDBr_T6D4J21CiDZ8xWEuHIQKSAh187BOSkHNcQHDgUJe3O6Dup1DQhzDw3Gs8X7sbiZjlxZA4hfu__7XNtwxYuqS8OywymRhnpFKHP19pT-o4MRbfQ=w1070-h829-no?authuser=0","Introduction to Javascript - Platzi","Javascript Vanilla Course. Applications oriented to web development.")
const course5 = new CoursesComplete (skills.length+5,"https://lh3.googleusercontent.com/pw/AMWts8CdVySxd_DTNs5Gpjz7qOSibeUDcBelycFnOFHnmJM2JwV0OvmOZZvc2haxJTG7kj-_2tdVcZTBb_sS2eJjeM2pXTtfFl7WTiLAZW_z9O232Egv0va5EVzvBPBCkrb1DYktgS0VMjQg1YZ8EyIeEb14_w=w1070-h826-no?authuser=0","V8 engine - Javascript - Platzi","Open source engine for JavaScript and WebAssembly. Utility in browsers.")
const course6 = new CoursesComplete (skills.length+6,"https://lh3.googleusercontent.com/pw/AMWts8B2lNbZtf-C0ydkNuZNb78W5s8oXhYXbWSIhxTBGwY-rDD40gZXJkCBf21CEPL3pYftnWkPSs9ECTxAjSwdKQeNkInF2XeBrmsWVuUHHDuMUVaQeaZeuclLNRLSTn9ELGjpIkPHBEIQyJfCBaGIh1P82Q=w1065-h819-no?authuser=0","Asynchronism in Javascript - Platzi","Asynchronism specialization. Old and new code tools in ECMAscript 2018.")


// if(localStorage.getItem("skills"))  {
//     for (let skill of JSON.parse(localStorage.getItem("skills"))){
//     const newSkills = new CoursesComplete(skill.id,skill.img,skill.title)
//     skills.push(newSkills)
// }}
// else{
    skills.push(course1, course2, course3, course4, course5, course6)
// }

const registerSkills = () => {
    let img = $formSkills[0].value
    let title = $formSkills[1].value
    let lowDesc = $formProjects[2].value
    const newSkills = new CoursesComplete (skills.length+1,img,title,lowDesc)
    skills.push(newSkills)
}
