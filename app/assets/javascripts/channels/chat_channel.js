$(function() {
    $('[data-channel-subscribe="chat"]').each(function(index, element) {
      var $element = $(element),
          messageTemplate = $('[data-role="message-template"]');
  
      $element.animate({ scrollTop: $element.prop("scrollHeight")}, 1000)        
  
      App.cable.subscriptions.create(
        {
          channel: "ChatChannel",
          room: "doggo"
        },
        {
          received: function(data) {
            var content = messageTemplate.children().clone(true, true);
            content.find('[data-role="user-avatar"]').attr('src', data.user_avatar_url);
            content.find('[data-role="message-text"]').text(data.message);
            content.find('[data-role="message-date"]').text(data.updated_at);
            $element.append(content);
            $element.animate({ scrollTop: $element.prop("scrollHeight")}, 1000);
          }
        }
      );
    });
  });
  