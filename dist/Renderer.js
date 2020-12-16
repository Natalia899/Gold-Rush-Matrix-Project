class Renderer {
    renderBoard(matrix){
        const source = $('#board-template').html()
        const template = Handlebars.compile(source)
        const data = template({matrix})
        $('#board-container').empty().append(data) 
    }
    renderScore1(score){
        const source = $('#score1-template').html()
        const template = Handlebars.compile(source)
        const data = template(score)
        $('#score1-container').empty().append(data) 
    }
    renderScore2(score){
        const source = $('#score2-template').html()
        const template = Handlebars.compile(source)
        const data = template(score)
        $('#score2-container').empty().append(data) 
    }
}