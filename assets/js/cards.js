function create_cards() {
    clone_card(
        "Code Refactor", 
        "Refactor a codebase so that it follows accessibility standards and the site is optimized for search engines.", 
        "assets\\images\\cards\\CodeRefactorImage.png", "-15rem",
        "https://tomakpo.github.io/UW_Coding_Bootcamp_Portfolio/projects/01-CodeRefactor/", 
        "HTML", "CSS")
    clone_card(
        "Project 2", 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "https://www.designbolts.com/wp-content/uploads/2019/01/Business-Deal-Free-Stock-Photo.jpg", "-75%",
        "https://tomakpo.github.io/UW_Coding_Bootcamp_Portfolio/projects/01-CodeRefactor/", 
        "HTML", "CSS", "JS")
    clone_card(
        "Project 3", 
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
        "https://miro.medium.com/max/2800/1*MPJD9WihZSvMBOdy7rHpYw.jpeg", "-50%",
        "https://tomakpo.github.io/UW_Coding_Bootcamp_Portfolio/projects/01-CodeRefactor/", 
        "HTML", "JSON")
    clone_card(
        "Project 4", 
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        "https://cdn.wallpapersafari.com/86/88/WOske4.jpg", "-50%",
        "https://tomakpo.github.io/UW_Coding_Bootcamp_Portfolio/projects/01-CodeRefactor/", 
        "JS", "jQuary")
    clone_card(
        "Project 5", 
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.", 
        "https://static-cse.canva.com/blob/138631/best-free-stock-photos.jpg", "-50%",
        "https://tomakpo.github.io/UW_Coding_Bootcamp_Portfolio/projects/01-CodeRefactor/", 
        "AWS", "MySQL")
}

var skill_set = {}
var highlighted_skills = []

function clone_card(name, description, image, shift, link, ...skills) {
    let id = name.toLowerCase().split(" ").join("_")
    let str_skills = function() {
        let output = ""
        for (const skill of skills) {
            output += `\n            <span>${skill}</span>`
            if (!(skill in skill_set)) {
                skill_set[skill] = []
            }
            skill_set[skill].push(`#${id}`)
        }
        return output
    }
    let str_element = 
`   <a id="${id}" class="project-card" href="${link}" target="_blank">
        <img src="${image}" style="top:${shift}" alt="Backgound image for the ${name} project.">
        <div>
            <span>
                <h2 class="project-name">${name}</h2>
                <em class="skills-used">${str_skills()}</em>
            </span><br>
            <p class="description">${description}</p>
        </div>
    </a>`

    $('#cards').append(str_element)

    $('#skills').empty()
    for (const skill in skill_set) {
        $('#skills').append(
            `<span class="skill-filter" onclick="toggle_skill(this, '${skill}')">${skill}</span>`
        )
    }
    $('#skills').append(
        `<span id="clear_filters" class="skill-filter" onclick="show_all_projects()">❌</span>`
    )
    $('#clear_filters').hide()
}

function toggle_skill(filter, skill) {
    if (highlighted_skills.includes(skill)) {
        let i = highlighted_skills.indexOf(skill)
        highlighted_skills.splice(i, 1)
    } else {
        highlighted_skills.push(skill)
    }
    console.log(highlighted_skills);
    $(filter).toggleClass('highlighted')
    highlight_skills(highlighted_skills)
}

function highlight_skills(skills) {
    if (skills.length == 0) {
        $('.project-card').removeClass('hidden')
        $('#clear_filters').hide()
    } else {
        $('.project-card').addClass('hidden')
        $('#clear_filters').show()
        for (const skill of skills) {
            for (const project of skill_set[skill]) {
                $(project).removeClass('hidden')
            }
        }
    }
}

function show_all_projects() {
    highlighted_skills = []
    $('.project-card').removeClass('hidden')
    $('.highlighted').removeClass('highlighted')
    $('#clear_filters').hide()
}