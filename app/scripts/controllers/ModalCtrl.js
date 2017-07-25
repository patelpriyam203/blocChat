(function() {
    function ModalCtrl(Room, $uibModalInstance, $cookies) {
        this.createRoom = function() {
            Room.add(this.newRoom, this.cancel);
            $uibModalInstance.close();
        };

        this.cancel = function() {
            $uibModalInstance.dismiss();
        };

        this.createUserName = function() {
            $cookies.put('blocChatCurrentUser', this.userName);
            $uibModalInstance.close();
        }
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', '$cookies', ModalCtrl]);
})();
