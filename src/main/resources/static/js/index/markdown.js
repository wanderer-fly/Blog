$(document).ready(function () {
    $("#loadMarkdownLink").click(function (e) {
        e.preventDefault()
        var markdownUrl = $(this).attr("href")
        $.get(markdownUrl, function (data) {
            $("#mdcont").html(data)
        })
    })
})