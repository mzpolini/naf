$(function() {
   $("#save").click( function()
           {
             $(".resultsnote").each(function(index){
               $( "#results" ).append($(this).text());
             })}
      );
});

function NoteLogic (note) {
    this.note = note;
    this.hSeg = "<div class='note resultsnote'>" + this.note + "<img src='img/" + this.note + ".png'></div>";
    return this.hSeg;
}

$('#noteA').click(function(){
    $( "#sheetmusic" ).append(NoteLogic('A'));
});
$('#noteB').click(function(){
    $( "#sheetmusic" ).append(NoteLogic('B'));
});
$('#noteC').click(function(){
    $( "#sheetmusic" ).append(NoteLogic('C'));
});
$('#noteD').click(function(){
    $( "#sheetmusic" ).append(NoteLogic('D'));
});
$('#noteE').click(function(){
    $( "#sheetmusic" ).append(NoteLogic('E'));
});
$('#noteF').click(function(){
    $( "#sheetmusic" ).append(NoteLogic('F'));
});
$('#noteG').click(function(){
    $( "#sheetmusic" ).append(NoteLogic('G'));
});
$('#noteH').click(function(){
    $( "#sheetmusic" ).append(NoteLogic('H'));
});
