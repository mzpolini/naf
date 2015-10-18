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
    this.hSeg = "<div class='note resultsnote'><img src='img/" + this.note + ".gif'></div>";
    return this.hSeg;
}

$('#note1').click(function(){
    $( "#sheetmusic" ).append(NoteLogic('1'));
});
$('#note2').click(function(){
    $( "#sheetmusic" ).append(NoteLogic('2'));
});
$('#note3').click(function(){
    $( "#sheetmusic" ).append(NoteLogic('3'));
});
$('#note4').click(function(){
    $( "#sheetmusic" ).append(NoteLogic('4'));
});
$('#note5').click(function(){
    $( "#sheetmusic" ).append(NoteLogic('5'));
});
$('#note6').click(function(){
    $( "#sheetmusic" ).append(NoteLogic('6'));
});
$('#note7').click(function(){
    $( "#sheetmusic" ).append(NoteLogic('7'));
});
$('#note8').click(function(){
    $( "#sheetmusic" ).append(NoteLogic('8'));
});
