(function() {
  function Message($firebaseArray, $cookies, $filter) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
        // Filter the messages by their room ID.
        return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    };

    Message.send = function(newMessage, currentRoom) {
        // Send method logic
        var date = new Date();
        var post = {
          content: newMessage,
          userName: $cookies.get('blocChatCurrentUser'),
          roomI: currentRoom.$id,
          sentAt: $filter('date')
        };

        messages.$add(post);
        this.messages = '';
    };

    return Message;
  }


  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', '$filter', Message]);
})();
