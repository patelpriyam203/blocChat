(function() {
    function HomeCtrl(Room, Message, $uibModal) {
      this.rooms = Room.all;
      this.currentRoom = null;

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

    }

    angular
      .module('blocChat')
      .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
