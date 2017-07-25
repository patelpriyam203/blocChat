(function() {
    function HomeCtrl(Room, Message, $uibModal, $cookies) {
      this.rooms = Room.all;
      this.currentRoom = null;
      this.currentUser = $cookies.get('blocChatCurrentUser');

      this.addRoom = function() {
        $uibModal.open({
          templateUrl: '/templates/modal.html',
          controller:'ModalCtrl as modal',
          size:'sm'
        });
      }

      this.setCurrentRoom = function(room) {
        this.currentRoom = room;
        // console.log(room);
        this.messages = Message.getByRoomId(this.currentRoom.$id);
        // console.log(this.messages);
      }

      this.sendMessage = function(){
        this.newMessage.roomId = this.currentRoom.$id;
        this.newMessage.userName = this.currentUser;
        Message.send(this.newMessage);
      }
    }

    angular
      .module('blocChat')
      .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();
