var active_section = '#about-section'
let class_name = 'active'
function make_active(section) {
    var id = section.getAttribute('href')
    if (active_section != id) {
        $(`nav a[href='${active_section}'], ${active_section}`).removeClass(class_name)
        $(`nav a[href='${id}'], ${id}`).addClass(class_name)
        active_section = id
    }
}

function set_scroll_offset() {
    var header_height = $('header').height()
    $('main section').css('scroll-margin-top', header_height)
}
$(window).resize(set_scroll_offset)