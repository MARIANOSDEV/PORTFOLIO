let $galleryProjects = document.getElementById("galleryProjects");

function fnGalleryProjects() {
  $galleryProjects.innerHTML = ""
  for (let element of projects) {
    let setGalleryProjects = document.createElement("div")
    setGalleryProjects.className = `group relative`
    setGalleryProjects.id = `galleryProjectsChild`
    setGalleryProjects.innerHTML = `
    <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
    <a href="${element.link}"><img src=${element.img} alt="Certificado" class="w-full" style="height:200px;"></a>
    </div>
    <div class="mt-4">
      <h2 class="text-lg text-black-900 font-bold">
        ${element.title}
      </h2>
      <h3 class="text-m text-grey-700">
        ${element.lowDesc}
      </h3>
    </div>`
    $galleryProjects.append(setGalleryProjects)
  }
}

fnGalleryProjects()

let $GallerySkills = document.getElementById("gallerySkills");

function fnGallerySkills() {
  $GallerySkills.innerHTML = ""
  for (let element of skills) {
    let setGallerySkills = document.createElement("div")
    setGallerySkills.className = `group relative`
    setGallerySkills.id = `gallerySkillsChild`
    setGallerySkills.innerHTML = `
    <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
      <img src=${element.img} alt="Certificado" class="w-full" style="height:200px;">
    </div>
    <div class="mt-4">
      <h2 class="text-m text-black-800 font-bold">
        <span aria-hidden="true" class="absolute inset-0"></span>
        ${element.title}
      </h2>
    </div>`
    $GallerySkills.append(setGallerySkills)
  }
}
fnGallerySkills()




