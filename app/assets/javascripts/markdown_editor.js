$(document).ready(function(){
  setup_save_click();
  setup_edit_click();
})

function setup_save_click(){
  $('.save').click(function(event){
    console.log('entering this');
    event.preventDefault();

    save_markdown_content(event);
  })
}


function setup_edit_click(){
  $('.markdown_panel_edit').click(function(event){
    event.preventDefault();

    request_edit_form(event);
  });
}

function request_edit_form(event){
  var markdown_panel = $(event.target).closest('.markdown_panel');
  var edit_markdown_path = $(markdown_panel).data()['edit_markdown_path'];
  var markdown_source_x = $(markdown_panel).data()['markdown_source_y'];

  $.ajax(edit_markdown_path, {
    data: {markdown_source_g: markdown_source_x}
  }).done(function(response_body, status){
    $('.markdown_panel').replaceWith(response_body);
    setup_save_click();
  })

}



function save_markdown_content(event){
  console.log('entered save_markdown_content');

  var editor_panel = $(event.target).closest('.markdown_editor');
  var markdown_source = editor_panel.find('textarea').val();
  var save_markdown_path = $(editor_panel).data()['save_markdown_path'];
  var authenticity_token = $('body').data()['authenticity_token'];

  $.ajax(save_markdown_path, {
    data: {
      markdown_source_b: markdown_source,
      authenticity_token: authenticity_token
    },
    method: 'POST'
  }).done(function(response_body, status_message){
    $('.markdown_editor').replaceWith(response_body);
    setup_edit_click();
  });
}
